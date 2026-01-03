<?php
// sail artisan tinker --execute="include base_path('makedata.php')";
use App\Models\EnglishFastSpeak;
use App\Models\EnglishSpeak;
use App\Models\JapaneseSpeak;
use App\Models\Section;
use App\Models\Sentence;
use App\Models\TitleSpeak;
use App\Models\WordSpeak;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;

function StoreSentence($path, $section_number, $sentence_number)
{
    DB::transaction(function () use ($path, $section_number, $sentence_number) {
        print($path . "\t\t" . $section_number . "\t" . $sentence_number . "\n");
        $sentence               = Sentence::find($sentence_number) ?? new Sentence();
        $sentence->id           = $sentence_number;
        $sentence->section_id   = $section_number;
        $japanese_sentence_path = sprintf("Duo30/Section%02d/Sentence%03d(j).txt", $section_number, $sentence_number);
        print($japanese_sentence_path . "\n");

        $japanese_sentence_content = Storage::disk('local')->get($japanese_sentence_path);
        print($japanese_sentence_content . "\n");
        if ($japanese_sentence_content) {
            $sentence->japanese = $japanese_sentence_content;
        }

        $english_sentence_path = sprintf("Duo30/Section%02d/Sentence%03d(e).txt", $section_number, $sentence_number);
        print($english_sentence_path . "\n");
        $english_sentence_content = Storage::disk('local')->get($english_sentence_path);
        print($english_sentence_content . "\n");
        if ($english_sentence_content) {
            $sentence->english = $english_sentence_content;
        }

        $sentence->save();

        $title_path    = sprintf("Duo30/Section%02d/Sentence%03d(0).mp3", $section_number, $sentence_number);
        $title_content = Storage::disk('local')->get($title_path);
        if ($title_content) {
            $title              = TitleSpeak::find($sentence_number) ?? new TitleSpeak();
            $title->id          = $sentence_number;
            $title->sentence_id = $sentence_number;
            $title->speak       = $title_content;
            $title->save();
        }

        $word_path    = sprintf("Duo30/Section%02d/Sentence%03d(3).mp3", $section_number, $sentence_number);
        $word_content = Storage::disk('local')->get($word_path);
        if ($word_content) {
            $word              = WordSpeak::find($sentence_number) ?? new WordSpeak();
            $word->id          = $sentence_number;
            $word->sentence_id = $sentence_number;
            $word->speak       = $word_content;
            $word->save();
        }

        $japanese_path    = sprintf("Duo30/Section%02d/Sentence%03d(1).mp3", $section_number, $sentence_number);
        $japanese_content = Storage::disk('local')->get($japanese_path);
        if ($japanese_content) {
            $japanese              = JapaneseSpeak::find($sentence_number) ?? new JapaneseSpeak();
            $japanese->id          = $sentence_number;
            $japanese->sentence_id = $sentence_number;
            $japanese->speak       = $japanese_content;
            $japanese->save();
        }

        $english_path    = sprintf("Duo30/Section%02d/Sentence%03d(2).mp3", $section_number, $sentence_number);
        $english_content = Storage::disk('local')->get($english_path);
        if ($english_content) {
            $english              = EnglishSpeak::find($sentence_number) ?? new EnglishSpeak();
            $english->id          = $sentence_number;
            $english->sentence_id = $sentence_number;
            $english->speak       = $english_content;
            $english->save();
        }

        $english_fast_path    = sprintf("Duo30/Section%02d/Sentence%03d(4).mp3", $section_number, $sentence_number);
        $english_fast_content = Storage::disk('local')->get($english_fast_path);
        if ($english_fast_content) {
            $english_fast              = EnglishFastSpeak::find($sentence_number) ?? new EnglishFastSpeak();
            $english_fast->id          = $sentence_number;
            $english_fast->sentence_id = $sentence_number;
            $english_fast->speak       = $english_fast_content;
            $english_fast->save();
        }

    });
}

function getSentences($path, $section_number)
{
    $section     = Section::find($section_number) ?? new Section();
    $section->id = $section_number;
    $section->save();

    $sentences = glob($path . "/Sentence*(e).txt");

    foreach ($sentences as $sentence) {
        preg_match('/Sentence(\d+)\(e\).txt$/', basename($sentence), $matches);
        StoreSentence(str_replace('(e).txt', '', $sentence), $section_number, (int) $matches[1]);
    }
}

$dir = Storage::disk('local')->path('Duo30');

$sections = glob($dir . "/Section*");
foreach ($sections as $section) {
    preg_match('/Section(\d+)$/', basename($section), $matches);
    getSentences($section, (int) $matches[1]);
}
