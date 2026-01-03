// src/components/PlayerTransport.tsx
import { audioEngine } from '@/audio/AudioEngine';
import NotStartedIcon from '@mui/icons-material/NotStarted';
import PauseCircleIcon from '@mui/icons-material/PauseCircle';
import StopCircleIcon from '@mui/icons-material/StopCircle';
import { IconButton, Stack } from '@mui/material';

export const PlayerTransport = () => {
    return (
        <Stack direction="row" spacing={1}>
            <IconButton onClick={() => audioEngine.pause()}>
                <PauseCircleIcon />
            </IconButton>

            <IconButton onClick={() => audioEngine.resume()}>
                <NotStartedIcon />
            </IconButton>

            <IconButton onClick={() => audioEngine.stop()}>
                <StopCircleIcon />
            </IconButton>
        </Stack>
    );
};
