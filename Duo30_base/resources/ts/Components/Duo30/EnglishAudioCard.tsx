import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import { Button, Card, CardContent, Stack, Typography } from '@mui/material';

type Props = {
    text: string;
    onPlayNormal: () => void;
    onPlayFast: () => void;
};

export const EnglishAudioCard = ({ text, onPlayNormal, onPlayFast }: Props) => {
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
                            onClick={onPlayNormal}
                            sx={{ width: 90 }}
                        >
                            英語
                        </Button>

                        <Button
                            size="small"
                            variant="outlined"
                            startIcon={<VolumeUpIcon />}
                            onClick={onPlayFast}
                            sx={{ width: 90 }}
                        >
                            速い
                        </Button>
                    </Stack>
                </Stack>
            </CardContent>
        </Card>
    );
};
