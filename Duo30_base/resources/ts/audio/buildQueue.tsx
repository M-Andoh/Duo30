import { AudioItem, AudioItemType } from '@/types/AudioItem';
import { GlobalPlaySetting } from '@/types/GlobalPlaySetting';

export const getAudioItem = (id: number, type: AudioItemType) => {
    switch (type) {
        case 'Title':
            return {
                id: id,
                type: type,
                url: route('duo30.title', { id: id }),
            };

        case 'Words':
            return {
                id: id,
                type: type,
                url: route('duo30.word', { id: id }),
            };

        case 'Japanese':
            return {
                id: id,
                type: type,
                url: route('duo30.japanese', { id: id }),
            };

        case 'English':
            return {
                id: id,
                type: type,
                url: route('duo30.english', { id: id }),
            };

        case 'EnglishFast':
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
        queue.push(getAudioItem(id, 'Title'));
    }

    if (setting.playKeywords) {
        queue.push(getAudioItem(id, 'Words'));
    }

    if (setting.playJapanese) {
        queue.push(getAudioItem(id, 'Japanese'));
    }

    if (setting.playEnglishNormal) {
        queue.push(getAudioItem(id, 'English'));
    }

    if (setting.playEnglishFast) {
        queue.push(getAudioItem(id, 'EnglishFast'));
    }

    return queue;
};
