<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class WordSpeak extends Model
{
    public function sentence()
    {
        return $this->belongsTo(
            Sentence::class
        );
    }
}
