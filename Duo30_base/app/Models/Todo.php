<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

/**
 * @property int $id
 * @property int $user_id
 * @property string|null $title
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property-read \Illuminate\Database\Eloquent\Collection<int, \App\Models\TodoDetail> $todoDetails
 * @property-read int|null $todo_details_count
 * @property-read \App\Models\User $user
 * @method static \Database\Factories\TodoFactory factory($count = null, $state = [])
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Todo newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Todo newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Todo query()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Todo whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Todo whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Todo whereTitle($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Todo whereUpdatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Todo whereUserId($value)
 * @mixin \Eloquent
 */
class Todo extends Model
{
    /** @use HasFactory<\Database\Factories\TodoFactory> */
    use HasFactory;

    protected $fillable = ['title', ];
   
    public function user()
    {
        return $this->belongsTo(
            User::class,
            'user_id',
            'id',
            'users'
        );
    }

    public function todoDetails()
    {
        return $this->hasMany(TodoDetail::class);
    }

    public function delete()
    {
        // 関連したTodoDetailを削除する
        $this->todoDetails()->delete();

        // Todoを削除する
        return parent::delete();
    }

}
