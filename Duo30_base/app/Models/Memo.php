<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

/**
 * @property int $id
 * @property int $user_id
 * @property int $revision
 * @property string|null $title
 * @property string|null $body
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property-read \App\Models\User $user
 * @method static \Database\Factories\MemoFactory factory($count = null, $state = [])
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Memo newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Memo newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Memo query()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Memo whereBody($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Memo whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Memo whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Memo whereRevision($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Memo whereTitle($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Memo whereUpdatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Memo whereUserId($value)
 * @mixin \Eloquent
 */
class Memo extends Model
{
    use HasFactory;

    public function user()
    {
        return $this->belongsTo(
            User::class,
            'user_id',
            'id',
            'users',
        );
    }
}
