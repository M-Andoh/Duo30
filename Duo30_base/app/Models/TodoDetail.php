<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

/**
 * @property int $id
 * @property int $user_id
 * @property int $todo_id
 * @property string|null $name
 * @property bool|null $completed_flag
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property-read \App\Models\Todo $todo
 * @property-read \App\Models\User $user
 * @method static \Database\Factories\TodoDetailFactory factory($count = null, $state = [])
 * @method static \Illuminate\Database\Eloquent\Builder<static>|TodoDetail newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|TodoDetail newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|TodoDetail query()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|TodoDetail whereCompletedFlag($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|TodoDetail whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|TodoDetail whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|TodoDetail whereName($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|TodoDetail whereTodoId($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|TodoDetail whereUpdatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|TodoDetail whereUserId($value)
 * @mixin \Eloquent
 */
class TodoDetail extends Model
{
    /** @use HasFactory<\Database\Factories\TodoDetailFactory> */
    use HasFactory;

    protected $fillable = ['to?do_id', 'name', 'completed_flag'];

    protected $casts = [
        'completed_flag' => 'boolean',
    ];

    public function user()
    {
        return $this->belongsTo(
            User::class,
            'user_id',
            'id',
            'users'
        );
    }

    public function todo()
    {
        return $this->belongsTo(
            Todo::class,
            'todo_id',
            'id',
            'todos'
        );
    }
}
