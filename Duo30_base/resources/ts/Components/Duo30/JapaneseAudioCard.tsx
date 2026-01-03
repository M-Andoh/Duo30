import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import { Button, Card, CardContent, Stack, Typography } from '@mui/material';

type Props = {
    text: string;
    onPlay: () => void;
};

export const JapaneseAudioCard = ({ text, onPlay }: Props) => {
    return (
        <Card variant="outlined">
            <CardContent sx={{ p: 2 }}>
                <Stack direction="row" spacing={2} alignItems="center">
                    {/* ===== テキスト ===== */}
                    <Typography sx={{ flexGrow: 1 }}>{text}</Typography>

                    {/* ===== 再生ボタン ===== */}
                    <Stack spacing={1}>
                        <Button
                            size="small"
                            variant="contained"
                            startIcon={<VolumeUpIcon />}
                            onClick={onPlay}
                            sx={{ width: 90 }}
                        >
                            日本語
                        </Button>
                    </Stack>
                </Stack>
            </CardContent>
        </Card>
    );
};
