export type AudioItemType =
    | 'Title'
    | 'Words'
    | 'Japanese'
    | 'English'
    | 'EnglishFast';

export type AudioItem = {
    id: number;
    type: AudioItemType;
    url: string; // ← API URL
};
