export type AudioItemType =
    | 'title'
    | 'words'
    | 'japanese'
    | 'english'
    | 'english.fast';

export type AudioItem = {
    id: number;
    type: AudioItemType;
    url: string; // ← API URL
};
