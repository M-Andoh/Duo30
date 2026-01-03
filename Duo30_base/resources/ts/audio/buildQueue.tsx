import { AudioItem } from '@/types/AudioItem';
import { GlobalPlaySetting } from '@/types/GlobalPlaySetting';

export const buildQueue = (
    id: number,
    setting: GlobalPlaySetting,
): AudioItem[] => {
    const queue: AudioItem[] = [];

    if (setting.playTitle) {
        queue.push({
            id: 'title',
            label: 'タイトル',
            src: route('duo30.title', { id: id }),
        });
    }

    if (setting.playKeywords) {
        queue.push({
            id: 'keywords',
            label: '単語',
            src: route('duo30.word', { id: id }),
        });
    }

    if (setting.playJapanese) {
        queue.push({
            id: 'jp',
            label: '日本語',
            src: route('duo30.japanese', { id: id }),
        });
    }

    if (setting.playEnglishNormal) {
        queue.push({
            id: 'en',
            label: '英語',
            src: route('duo30.english', { id: id }),
        });
    }

    if (setting.playEnglishFast) {
        queue.push({
            id: 'enFast',
            label: '英語（速い）',
            src: route('duo30.english.fast', { id: id }),
        });
    }

    return queue;
};
