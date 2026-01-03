<?php

namespace App\Http\Controllers;

use App\Http\Requests\File\FileRequest;
use App\Http\Requests\File\ShowRequest;
use App\Http\Requests\File\StoreRequest;
use App\Http\Requests\File\UpdateRequest;
use App\Http\Requests\File\DeleteRequest;
use App\Models\File;
use App\Models\FileContent;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Storage;
use Mockery\Undefined;
use Symfony\Component\Finder\Iterator\FilecontentFilterIterator;

class FileController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(FileRequest $request)
    {
        Log::info('File.Index');

        // Userに紐づいたmemo情報取得
        $user = Auth::user();
        $files = $user->files;

        // memo情報返却
        return $files;
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create(FileRequest $request)
    {
        Log::info('File.Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreRequest $request)
    {
        Log::info('File.Upload');

        // user情報取得
        $user = Auth::user();
        if ($user == null) abort(404);

        // リクエスト情報取得
        $name = $request->get('name');
        $mime = $request->get('mime');
        $size = (int)$request->get('size');
        $mtime = $request->get('mtime');
        $contents = $request->file('contents');

        // file情報取得
        $file = new File();
        $file->user_id = Auth::id();
        $file->revision = 1;
        $file->name = $name;
        $file->size = $size;
        $file->mime = $mime;
        // Carbon へ変換
        $mtimeDate = Carbon::createFromTimestamp($mtime / 1000);
        $file->mtime = $mtimeDate;
        $file->save_path = '';

        // file情報保存
        DB::transaction(function () use ($file, $contents) {
            $file->save();
            $file->save_path = $contents->storeAs(
                'warehouse',
                $file->id . '.' . $file->name,
                'local'
            );
            $file->save();
        });
    }
    /**
     * Display the specified resource.
     */
    public function show(ShowRequest $request, string $id)
    {
        Log::info('File.Show');
    }

    public function download(ShowRequest $request, string $id)
    {
        Log::info('File.Download');

        // ファイル情報の取得
        $file = File::find($id);
        $contents = Storage::disk('local')->get($file->save_path);
        return response($contents)
            ->header(
                'Content-Type',
                $file->mime
            )
            ->header(
                'Content-Disposition',
                'attachment; ' .
                    'filename="' . $file->name . '"; ' .
                    'Modification-Date="' . $file->mtime . '" '
            )
            ->header('Content-Length', $file->size);
    }


    /**
     * Show the form for editing the specified resource.
     */
    public function edit(FileRequest $request, string $id)
    {
        Log::info('File.Edit');
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateRequest $request, string $id)
    {
        Log::info('File.Update');

        // リクエスト情報取得
        $name = $request->get('name');
        $mime = $request->get('mime');
        $size = (int)$request->get('size');
        $mtime = $request->get('mtime');
        $contents = $request->file('contents');

        // file情報取得
        $file = File::with('fileContent')->find($id);
        $file->revision = $file->revision + 1;
        $file->name = $name;
        $file->size = $size;
        $file->mime = $mime;
        // Carbon へ変換
        $mtimeDate = Carbon::createFromTimestamp($mtime / 1000);
        $file->mtime = $mtimeDate;
        $file->save_path = $contents->storeAs(
            'warehouse',
            $file->id . '.' . $file->name,
            'local'
        );

        // file情報保存
        DB::transaction(function () use ($file) {
            $file->save();
        });
    }


    /**
     * Remove the specified resource from storage.
     */
    public function destroy(DeleteRequest $request, string $id)
    {
        Log::info('File.Destroy');

        // 指定された File情報を取得する
        $file = File::find($id);

        //ファイル 削除
        Storage::disk('local')->delete($file->save_path);

        //DB 削除
        $file->delete();
    }
}
