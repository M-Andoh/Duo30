import { usePlayerStore } from '@/store/playerStore';
import { Container, Stack } from '@mui/material';
import { EnglishAudioCard } from './EnglishAudioCard';
import { JapaneseAudioCard } from './JapaneseAudioCard';
import { PlayerTransport } from './PlayerTransport';
import { PlaySentenceButton } from './PlaySentenceButton';

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
                onPlay={() => play(route('duo30.japanese', { id: sentenceNo }))}
            />

            <EnglishAudioCard
                text={sentence?.english ?? ''}
                onPlayNormal={() =>
                    play(route('duo30.english', { id: sentenceNo }))
                }
                onPlayFast={() =>
                    play(route('duo30.english', { id: sentenceNo }))
                }
            />

            <Stack direction="row" spacing={2} alignItems="center">
                <PlaySentenceButton id={sentenceNo} />
                <PlayerTransport />
            </Stack>
        </Container>
    );
};
