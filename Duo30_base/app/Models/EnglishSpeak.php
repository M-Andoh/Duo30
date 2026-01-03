<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class EnglishSpeak extends Model
{
    public function sentence()
    {
        return $this->belongsTo(
            Sentence::class
        );
    }
}
