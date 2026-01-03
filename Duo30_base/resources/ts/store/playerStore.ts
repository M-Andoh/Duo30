// src/store/playerStore.ts
import useDuo30Index from '@/hocks/Duo30/useDuo30Index';
import { GlobalPlaySetting } from '@/types/GlobalPlaySetting';
import { SentenceType } from 'SentenceType';
import { create } from 'zustand';

/* =========================
   PlayStore（← これ）
========================= */
export type PlayStore = {
    globalSetting: GlobalPlaySetting;

    /** 再生中かどうか */
    isPlaying: boolean;

    /** セクションリスト */
    sections: number[];
    sentences: SentenceType[];

    /** 現在位置 */
    sentenceNo: number;
    sectionNo: number;

    /** actions */
    setGlobalSetting: (setting: Partial<GlobalPlaySetting>) => void;

    setPlaying: (playing: boolean) => void;

    setSections: (n: number[]) => void;
    setSentences: (n: SentenceType[]) => void;

    setSectionNo: (n: number) => void;
    prevSection: () => void;
    nextSection: () => void;

    setSentenceNo: (n: number) => void;
    prevSentence: () => void;
    nextSentence: () => void;
};

const getSections = () => {
    const sections = new Set<number>();
    const sentences = useDuo30Index();
    sentences?.map((s) => {
        sections.add(s.section_id);
    });
    return Array.from(sections);
};

/* =========================
   Zustand store 本体
========================= */
export const usePlayerStore = create<PlayStore>((set, get) => ({
    /* 初期値 */
    globalSetting: {
        /* ========= 自動実行 ========= */
        autoPlay: true,

        /* ========= セクションの進め方 ========= */
        repeatSection: false,

        /* ========= センテンスの進め方 ========= */
        repeatSentence: false,

        /* ========= 自動再生に含める ========= */
        playTitle: true,
        playKeywords: true,
        playJapanese: true,
        playEnglishNormal: true,
        playEnglishFast: true,

        lockWhilePlaying: false,
        enableABRepeat: false,

        playbackRate: 1.0,
    },

    isPlaying: false,
    sections: [],
    sentences: [],
    sentenceNo: 1,
    sectionNo: 1,

    /* actions */
    setGlobalSetting: (setting) =>
        set((state) => ({
            globalSetting: {
                ...state.globalSetting,
                ...setting,
            },
        })),

    setPlaying: (playing) => set({ isPlaying: playing }),

    setSections: (n: number[]) => {
        set((s) => ({
            sections: n,
        }));
    },

    setSentences: (n: SentenceType[]) => {
        set((s) => ({
            sentences: n,
        }));
    },

    setSectionNo: (n) => {
        const { sectionNo, sections, sentences } = get();
        if (n !== sectionNo) {
            const i = sections.findIndex((s) => n === s);
            if (i >= 0) {
                const section = sections[i];
                const sentence = sentences.find(
                    (s) => s.section_id === section,
                );
                set((s) => ({
                    sentenceNo: sentence?.id,
                    sectionNo: sentence?.section_id,
                }));
            }
        }
    },

    prevSection: () => {
        const { sectionNo, sections, sentences } = get();
        const i = sections.findIndex((s) => sectionNo === s);
        if (i - 1 >= 0) {
            const section = sections[i - 1];
            const sentence = sentences.find((s) => s.section_id === section);
            set((s) => ({
                sentenceNo: sentence?.id,
                sectionNo: sentence?.section_id,
            }));
        }
    },

    nextSection: () => {
        const { sectionNo, sections, sentences } = get();
        const i = sections.findIndex((s) => sectionNo === s);
        if (i + 1 < sections.length) {
            const section = sections[i + 1];
            const sentence = sentences.find((s) => s.section_id === section);
            set((s) => ({
                sentenceNo: sentence?.id,
                sectionNo: sentence?.section_id,
            }));
        }
    },

    setSentenceNo: (n) => {
        const { sentenceNo, sentences } = get();
        if (n !== sentenceNo) {
            const i = sentences.findIndex((s) => n === s.section_id);
            if (i >= 0) {
                set((s) => ({
                    sentenceNo: n,
                }));
            }
        }
    },

    prevSentence: () => {
        const { sentenceNo, sentences } = get();
        const i = sentences.findIndex((s) => sentenceNo === s.id);
        if (i - 1 >= 0) {
            const sentence = sentences[i - 1];
            set((s) => ({
                sentenceNo: sentence.id,
                sectionNo: sentence.section_id,
            }));
        }
    },

    nextSentence: () => {
        const { sentenceNo, sentences } = get();
        const i = sentences.findIndex((s) => sentenceNo === s.id);
        if (i + 1 < sentences.length) {
            const sentence = sentences[i + 1];
            set((s) => ({
                sentenceNo: sentence.id,
                sectionNo: sentence.section_id,
            }));
        }
    },
}));
