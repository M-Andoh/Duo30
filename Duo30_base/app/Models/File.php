<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

/**
 * @property int $id
 * @property int $user_id
 * @property int $revision
 * @property string $name
 * @property int $size
 * @property string $mime
 * @property string|null $mtime
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property-read \App\Models\FileContent|null $fileContent
 * @property-read \App\Models\User $user
 * @method static \Illuminate\Database\Eloquent\Builder<static>|File newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|File newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|File query()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|File whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|File whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|File whereMime($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|File whereMtime($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|File whereName($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|File whereRevision($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|File whereSize($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|File whereUpdatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|File whereUserId($value)
 * @mixin \Eloquent
 */
class File extends Model
{
    protected $hidden = [
        'fileContents',
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

    public function fileContent()
    {
        return $this->hasOne(
            FileContent::class,
            'file_id',
            'id'
        );
    }
}
