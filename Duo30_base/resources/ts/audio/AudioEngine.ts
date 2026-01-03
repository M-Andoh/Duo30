// src/player/AudioEngine.ts

import { AudioItem } from '@/types/AudioItem';

class AudioEngine {
    private audio: HTMLAudioElement | null = null;
    private stopped = false;

    /* ========= 単発再生 ========= */
    playOne(item: AudioItem): Promise<void> {
        this.stop();

        return new Promise((resolve) => {
            this.audio = new Audio(item.src);
            this.stopped = false;

            this.audio.onended = () => {
                resolve();
            };

            this.audio.play();
        });
    }

    /* ========= シーケンス再生 ========= */
    async playSequence(
        queue: AudioItem[],
        onItemEnd?: (item: AudioItem, index: number) => void,
        onComplete?: () => void,
    ) {
        this.stopped = false;

        for (let i = 0; i < queue.length; i++) {
            if (this.stopped) break;

            const item = queue[i];
            await this.playOne(item);
            onItemEnd?.(item, i);
        }

        if (!this.stopped) {
            onComplete?.();
        }
    }

    /* ========= 停止 ========= */
    stop() {
        console.log(this.isPlaying());
        if (this.audio) {
            this.audio.pause();
            this.audio.currentTime = 0;
        }
        this.stopped = true;
        console.log(this.isPlaying());
    }

    /* ========= 一時停止 ========= */
    pause() {
        console.log(this.isPlaying());
        this.audio?.pause();
        console.log(this.isPlaying());
    }

    /* ========= 再開 ========= */
    resume() {
        console.log(this.isPlaying());
        this.audio?.play();
        console.log(this.isPlaying());
    }

    /* ========= 状態 ========= */
    isPlaying() {
        return !!this.audio && !this.audio.paused;
    }
}

export const audioEngine = new AudioEngine();
