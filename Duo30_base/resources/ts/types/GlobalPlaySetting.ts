
export type GlobalPlaySetting = {
    /* ========= 自動実行 ========= */
    autoPlay: boolean;

    /* ========= セクションの進め方 ========= */
    repeatSection: boolean;

    /* ========= センテンスの進め方 ========= */
    repeatSentence: boolean;

    /* ========= 自動再生に含める ========= */
    playTitle: boolean;
    playKeywords: boolean;
    playJapanese: boolean;
    playEnglishNormal: boolean;
    playEnglishFast: boolean;

    // 再生制御
    playbackRate: number;

    // 拡張系
    lockWhilePlaying: boolean;
    enableABRepeat: boolean;
    
};
