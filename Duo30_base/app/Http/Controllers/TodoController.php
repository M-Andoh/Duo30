<?php

namespace App\Http\Controllers;

use App\Http\Requests\Todo\DeleteRequest;
use App\Http\Requests\Todo\StoreRequest;
use App\Http\Requests\Todo\UpdateRequest;
use App\Models\Todo;
use App\Models\TodoDetail;
use Illuminate\Container\Attributes\Log as AttributesLog;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\DB;


class TodoController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        Log::info('Todo.Index');

        // Userに紐づいたmemo情報取得
        $user = Auth::user();

        // Todoの一覧を取得する。// リレーションをロード
        $todos = Todo::where('user_id', Auth::id())->with('todoDetails')->get();

        // Todoの一覧を返却する
        return $todos;
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
        // 新規にTodoモデルを作成する
        $todo = new Todo();

        // Todoモデルの値を格納する
        $todo->user_id = Auth::id();
        $todo->title =  $request->get('title');

        $detail = new TodoDetail();
        $detail->user_id = Auth::id();
        $detail->name = null;
        $detail->completed_flag = false;

        // Todoモデルを保存する
        DB::transaction(function () use ($todo, $detail) {
            $todo->save();
            $detail->todo_id = $todo->id;
            $detail->save();
        });
    }

    /**
     * Display the specified resource.
     */
    public function show(Todo $toDo)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Todo $toDo)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateRequest $request, $id)
    {
        Log::info('TodoController.Index');

        // $idに紐づくTodoモデルを取得する
        $todo = Todo::find($id);

        // Todoモデルの値を格納する
        $todo->title =  $request->get('title');

        // Todoモデルを保存する
        $todo->save();
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(DeleteRequest $request, $id)
    {
        // $idに紐づくTodoモデルを取得する
        $todo = Todo::find($id);

        // Todoモデルを削除する
        $todo->delete();
    }
}
