<?php
namespace App\Http\Controllers;

use App\Http\Requests\Duo30\Duo30Request;
use App\Models\EnglishFastSpeak;
use App\Models\EnglishSpeak;
use App\Models\JapaneseSpeak;
use App\Models\Sentence;
use App\Models\TitleSpeak;
use App\Models\WordSpeak;
use Illuminate\Support\Facades\Log;

class Duo30Controller extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Duo30Request $request)
    {
        Log::info('Duo30.Index');

        // Sentence情報取得
        $sentences = Sentence::orderBy('section_id')
            ->orderBy('id')
            ->get();

        // Sentence情報返却
        return $sentences;
    }

    public function getTitle(Duo30Request $request, $id)
    {
        Log::info('Duo30.getTitle');

        // title音声取得
        $title = TitleSpeak::find($id);

        // title音声返却
        return response($title->speak)
            ->header('Content-Type', 'audio/mpeg')
            ->header('Content-Length', strlen($title->speak))
            ->header('Accept-Ranges', 'bytes');
    }

    public function getWord(Duo30Request $request, $id)
    {
        Log::info('Duo30.getWord');

        // title音声取得
        $word = WordSpeak::find($id);

        // title音声返却
        return response($word->speak)
            ->header('Content-Type', 'audio/mpeg')
            ->header('Content-Length', strlen($word->speak))
            ->header('Accept-Ranges', 'bytes');
    }

    public function getJapanese(Duo30Request $request, $id)
    {
        Log::info('Duo30.getJapanese');

        // title音声取得
        $japanese = JapaneseSpeak::find($id);

        // title音声返却
        return response($japanese->speak)
            ->header('Content-Type', 'audio/mpeg')
            ->header('Content-Length', strlen($japanese->speak))
            ->header('Accept-Ranges', 'bytes');
    }

    public function getEnglish(Duo30Request $request, $id)
    {
        Log::info('Duo30.getEnglish');

        // title音声取得
        $english = EnglishSpeak::find($id);

        // title音声返却
        return response($english->speak)
            ->header('Content-Type', 'audio/mpeg')
            ->header('Content-Length', strlen($english->speak))
            ->header('Accept-Ranges', 'bytes');
    }

    public function getEnglishFast(Duo30Request $request, $id)
    {
        Log::info('Duo30.getEnglishFast');

        // title音声取得
        $english = EnglishFastSpeak::find($id);

        // title音声返却
        return response($english->speak)
            ->header('Content-Type', 'audio/mpeg')
            ->header('Content-Length', strlen($english->speak))
            ->header('Accept-Ranges', 'bytes');
    }
}
