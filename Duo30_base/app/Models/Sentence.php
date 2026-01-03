<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Random\Engine;

class Sentence extends Model
{
    public function user()
    {
        return $this->belongsTo(
            User::class
        );
    }
    
    public function section()
    {
        return $this->belongsTo(
            Section::class
        );
    }

    public function titleSpeak()
    {
        return $this->hasOne(TitleSpeak::class);  // ✅ hasOne
    }

    public function wordSpeak()
    {
        return $this->hasOne(WordSpeak::class);  // ✅ hasOne
    }

    public function japaneseSpeak()
    {
        return $this->hasOne(JapaneseSpeak::class);  // ✅ hasOne
    }

    public function englishSpeak()
    {
        return $this->hasOne(EnglishSpeak::class);  // ✅ hasOne
    }

    public function englishFastSpeak()
    {
        return $this->hasOne(EnglishFastSpeak::class);  // ✅ hasOne
    }
}
