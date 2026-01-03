import { usePlayerStore } from '@/store/playerStore';
import { Settings } from '@mui/icons-material';
import { AppBar, IconButton, Stack, Toolbar, Typography } from '@mui/material';
import { useState } from 'react';
import { GlobalPlaySettingDrawer } from '../GlobalPlaySettingDrawer';

export const TopHeader = () => {
    const [open, setOpen] = useState(false);

    // ★ ここで取得する
    const setting = usePlayerStore((s) => s.globalSetting);
    const setSetting = usePlayerStore((s) => s.setGlobalSetting);

    return (
        <AppBar position="sticky">
            <Toolbar>
                <Stack
                    direction="row"
                    alignItems="center"
                    spacing={1}
                    width="100%"
                >
                    <Typography variant="h6">English Listening App</Typography>
                </Stack>
                <IconButton onClick={() => setOpen(true)}>
                    <Settings />
                </IconButton>
                <GlobalPlaySettingDrawer
                    open={open}
                    onClose={() => setOpen(false)}
                    setting={setting}
                    onChange={setSetting}
                />
            </Toolbar>
        </AppBar>
    );
};
