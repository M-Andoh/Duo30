import { AudioItem, AudioItemType } from '@/types/AudioItem';
import { GlobalPlaySetting } from '@/types/GlobalPlaySetting';

export const getAudioItem = (id: number, type: AudioItemType) => {
    switch (type) {
        case 'title':
            return {
                id: id,
                type: type,
                url: route('duo30.title', { id: id }),
            };

        case 'words':
            return {
                id: id,
                type: type,
                url: route('duo30.word', { id: id }),
            };

        case 'japanese':
            return {
                id: id,
                type: type,
                url: route('duo30.japanese', { id: id }),
            };

        case 'english':
            return {
                id: id,
                type: type,
                url: route('duo30.english', { id: id }),
            };

        case 'englishfast':
            return {
                id: id,
                type: type,
                url: route('duo30.english.fast', { id: id }),
            };
    }
};

export const buildQueue = (
    id: number,
    setting: GlobalPlaySetting,
): AudioItem[] => {
    const queue: AudioItem[] = [];

    if (setting.playTitle) {
        queue.push(getAudioItem(id, 'title'));
    }

    if (setting.playKeywords) {
        queue.push(getAudioItem(id, 'words'));
    }

    if (setting.playJapanese) {
        queue.push(getAudioItem(id, 'japanese'));
    }

    if (setting.playEnglishNormal) {
        queue.push(getAudioItem(id, 'english'));
    }

    if (setting.playEnglishFast) {
        queue.push(getAudioItem(id, 'englishfast'));
    }

    return queue;
};
