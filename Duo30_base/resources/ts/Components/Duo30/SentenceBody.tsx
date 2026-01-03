import { audioEngine } from '@/audio/AudioEngine';
import { getAudioItem } from '@/audio/buildQueue';
import { usePlayerStore } from '@/store/playerStore';
import { Container, Stack } from '@mui/material';
import { EnglishAudioCard } from './EnglishAudioCard';
import { JapaneseAudioCard } from './JapaneseAudioCard';
import { PlayerTransport } from './PlayerTransport';
import { PlaySentenceButton } from './PlaySentenceButton';

getAudioItem;
export const SentenceBody = () => {
    const { sentenceNo, sentences, globalSetting: settings } = usePlayerStore();

    const play = (src: string) => {
        new Audio(src).play();
    };

    const sentence = sentences.find((s) => s.id === sentenceNo);
    return (
        <Container sx={{ mt: 2 }}>
            {/* 以下は再生ボタンのみ */}

            <JapaneseAudioCard
                text={sentence?.japanese ?? ''}
                onPlay={() =>
                    audioEngine.playOne(getAudioItem(sentenceNo, 'japanese'))
                }
            />

            <EnglishAudioCard
                text={sentence?.english ?? ''}
                onPlayNormal={() =>
                    audioEngine.playOne(getAudioItem(sentenceNo, 'english'))
                }
                onPlayFast={() =>
                    audioEngine.playOne(getAudioItem(sentenceNo, 'englishfast'))
                }
            />

            <Stack direction="row" spacing={2} alignItems="center">
                <PlaySentenceButton id={sentenceNo} />
                <PlayerTransport />
            </Stack>
        </Container>
    );
};
