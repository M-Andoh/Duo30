<?php

namespace App\Http\Controllers;

use App\Http\Requests\User\ChangePasswordRequest;
use App\Http\Requests\User\UserRequest;
use App\Http\Requests\User\StoreRequest;
use App\Http\Requests\User\UpdateProfileRequest;
use App\Http\Requests\User\UpdateRequest;
use App\Http\Requests\User\UpdateUserRequest;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Log;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(UserRequest  $request)
    {
        Log::info('User.Index');

        // 全User情報取得
        $user = User::with('role')->get();

        // memo情報返却
        return $user;
    }

    /**
     * Store a newly created resource in storage.
     */
    public function add(StoreRequest $request)
    {
        Log::info('User.Store');

        // user情報更新
        $user = new User();
        $user->name =  $request->get('name');
        $user->email =  $request->get('email');
        $user->password = $request->get('password');
        $user->role_id =  $request->get('role_id');

        // user情報保存
        $user->save();
        return $user;
    }

    /**
     * Update the specified resource in storage.
     */
    public function profile(UpdateProfileRequest $request, string $user)
    {
        Log::info('User.Update');

        // 指定された user情報を取得する
        $user = User::find($user);

        //user情報を更新する
        $user->name =  $request->get('name');
        $user->email =  $request->get('email');
        $user->role_id =  $request->get('role_id');

        //DB 更新
        $user->save();
    }

    /**
     * Update the specified resource in storage.
     */
    public function password(ChangePasswordRequest $request, string $user)
    {
        Log::info('User.Password');

        // 指定された user情報を取得する
        $user = User::find($user);

        //user情報を更新する
        $user->password = $request->get('password');

        //DB 更新
        $user->save();
    }

    /**
     * Remove the specified resource from storage.
     */
    public function delete(UserRequest $request, string $user)
    {
        Log::info('User.Destroy');

        // 指定された User情報を取得する
        $user = User::find($user);

        //DB 削除
        $user->delete();
    }
}
