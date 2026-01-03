<?php

namespace App\Http\Controllers;

use App\Http\Requests\Memo\DeleteRequest;
use App\Http\Requests\Memo\MemoRequest;
use App\Http\Requests\Memo\StoreRequest;
use App\Http\Requests\Memo\UpdateRequest;
use App\Models\Memo;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Log;

class MemoController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(MemoRequest $request)
    {
        Log::info('Memo.Index');

        // Userに紐づいたmemo情報取得
        $user = Auth::user();
        $memos = $user->memos;

        // memo情報返却
        return $memos;
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create(MemoRequest $request)
    {
        // ログに残す（本番向け）
        Log::info('Memo.Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreRequest $request)
    {
        Log::info('Memo.Store');

        // user情報取得
        $user = Auth::user();
        if ($user == null) return "";

        // memo情報取得
        $memo = new Memo();
        $memo->user_id = $user->id;
        $memo->revision = 1;
        $memo->title =  $request->get('title');
        $memo->body =  $request->get('body');

        // memo情報保存
        $memo->save();
        return $memo;
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        // ログに残す（本番向け）
        Log::info('Memo.Show');
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        // ログに残す（本番向け）
        Log::info('Memo.Edit');
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateRequest $request, string $id)
    {
        Log::info('Memo.Update');
        // 指定された Memo情報を取得する
        $memo = Memo::find($id);

        //memo情報を更新する
        $memo->revision = $memo->revision + 1;
        $memo->title =  $request->get('title');
        $memo->body =  $request->get('body');

        //DB 更新
        $memo->save();
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(DeleteRequest $request, string $id)
    {
        Log::info('Memo.Destroy');

        // 指定された Memo情報を取得する
        $memo = Memo::find($id);

        //DB 削除
        $memo->delete();
    }
}
