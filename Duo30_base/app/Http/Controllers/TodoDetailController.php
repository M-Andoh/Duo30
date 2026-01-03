<?php

namespace App\Http\Controllers;

use App\Http\Requests\TodoDetail\DeleteRequest;
use App\Http\Requests\TodoDetail\StoreRequest;
use App\Http\Requests\TodoDetail\UpdateRequest;
use App\Models\TodoDetail;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Log;


class TodoDetailController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        Log::info('TodoDetailController.Index');

        // TodoDetailの一覧を取得する。
        $details = TodoDetail::get();

        // TodoDetailの一覧を返却する
        return $details;
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreRequest $request)
    {
        Log::debug("TodoDetailController.Store");

        // 新規にTodoDetailモデルを作成する
        $detail = new TodoDetail();

        // TodoDetailモデルの値を格納する
        $detail->user_id =  Auth::id();
        $detail->todo_id =  $request->get('todo_id');
        $detail->name =  $request->get('name');
        $detail->completed_flag =  $request->boolean('completed_flag', false);

        // TodoDetailモデルを保存する
        $detail->save();
    }

    /**
     * Display the specified resource.
     */
    public function show(TodoDetail $toDoDetail)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(TodoDetail $toDoDetail)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateRequest $request, $id)
    {
        Log::info('TodoDetailController.Index');
        // $idに紐づくTodoDetailモデルを作成する
        $detail = TodoDetail::find($id);

        // TodoDetailモデルの値を格納する
        $detail->name =  $request->get('name');
        $detail->completed_flag =  $request->get('completed_flag');

        // TodoDetailモデルを保存する
        $detail->save();
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(DeleteRequest $request, $id)
    {
        Log::info('TodoDetailController.destroy');
        // $idに紐づくTodoDetailモデルを取得する
        $detail = TodoDetail::find($id);

        // TodoDetailモデルを削除する
        $detail->delete();
    }
}
