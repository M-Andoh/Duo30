<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

/**
 * @property int $id
 * @property int $user_id
 * @property int $file_id
 * @property string $content
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property-read \App\Models\File $file
 * @property-read \App\Models\User $user
 * @method static \Illuminate\Database\Eloquent\Builder<static>|FileContent newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|FileContent newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|FileContent query()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|FileContent whereContent($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|FileContent whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|FileContent whereFileId($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|FileContent whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|FileContent whereUpdatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|FileContent whereUserId($value)
 * @mixin \Eloquent
 */
class FileContent extends Model
{
    public function user()
    {
        return $this->belongsTo(
            User::class,
            'user_id',
            'id',
            'users'
        );
    }

    public function file()
    {
        return $this->belongsTo(
            File::class,
            'file_id',
            'id',
            'files'
        );
    }
}
