<?php

namespace App\Http\Requests\User;

use App\Models\Memo;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Facades\Auth;
use Illuminate\Validation\Rules;

class UpdateProfileRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return Auth::check();
        if (!Auth::check()) return false;
        if ($this->user()->role_id < 2) return false;
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'name' =>  ['required', 'string', 'max:255'],
            'email' =>  ['required', 'string', 'lowercase', 'max:255', 'email',],
            'role_id' => ['required', 'integer', 'exists:roles,id'],
        ];
    }
}
