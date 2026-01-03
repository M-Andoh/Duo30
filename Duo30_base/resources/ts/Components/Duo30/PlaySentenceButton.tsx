// src/components/PlaySentenceButton.tsx
import { audioEngine } from '@/audio/AudioEngine';
import { buildQueue } from '@/audio/buildQueue';
import { usePlayerStore } from '@/store/playerStore';
import { Button } from '@mui/material';

type Props = {
    id: number;
};

export const PlaySentenceButton = ({ id }: Props) => {
    const setting = usePlayerStore((s) => s.globalSetting);

    const handlePlay = () => {
        const queue = buildQueue(id, setting);

        audioEngine.playSequence(queue, undefined, () => {
            console.log('Sentence complete');
        });
    };

    return (
        <Button variant="contained" onClick={handlePlay}>
            自動再生
        </Button>
    );
};
