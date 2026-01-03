import WarehouseIcon from '@mui/icons-material/Warehouse';
import {
    AppBar,
    Box,
    Button,
    IconButton,
    Toolbar,
    Typography,
    useTheme,
} from '@mui/material';
import React from 'react';
//import PersonOffIcon from '@mui/icons-material/PersonOff';
import { useThemeMode } from '@/Theme/ThemeContext';
import { MenuIListitem } from '@/types/MenuIListitem';
import { Link, router, usePage } from '@inertiajs/react';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import NoAccountsIcon from '@mui/icons-material/NoAccounts';

type Props = {
    menuItems: MenuIListitem[];
};

const GuestHeader: React.FC<Props> = ({ menuItems }) => {
    const theme = useTheme();
    const { url } = usePage();

    const { toggleMode } = useThemeMode();

    // Avatar メニュー
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

    const handleMenuClose = () => setAnchorEl(null);

    // Dashboard
    const handleDashboard = () => {
        handleMenuClose();
        router.visit(route('dashboard'));
    };

    const appName = import.meta.env.VITE_APP_NAME || 'Laravel';
   
    return (
        <AppBar position="fixed" sx={{ zIndex: 1300 }}>
            <Toolbar>
                {/* 左側のアイコン */}
                <IconButton
                    edge="start" // 左端に配置
                    color="inherit"
                    aria-label="menu"
                    sx={{ mr: 2 }} // 右側にマージン
                    onClick={() => handleDashboard()}
                >
                    <WarehouseIcon />
                </IconButton>
                {/* 左側タイトル */}
                <Typography variant="h6" sx={{ flexGrow: 1 }}>
                    {appName}
                </Typography>

                {/* 表示切替メニュー */}
                <Box sx={{ display: 'flex', gap: 1, mr: 2 }}>
                    {menuItems.map((item) => {
                        const active = url.startsWith(item.path);
                        return (
                            <Button
                                key={item.name}
                                component={Link}
                                href={route(item.name)}
                                color={active ? 'secondary' : 'inherit'}
                                variant={active ? 'contained' : 'text'}
                            >
                                {item.label}
                            </Button>
                        );
                    })}
                </Box>

                {/* Avatar */}
                <IconButton sx={{ ml: 1 }}>
                    <NoAccountsIcon />
                </IconButton>

                {/* テーマ切替 */}
                <IconButton color="inherit" onClick={toggleMode}>
                    {theme.palette.mode === 'dark' ? (
                        <Brightness7Icon />
                    ) : (
                        <Brightness4Icon />
                    )}
                </IconButton>
            </Toolbar>
        </AppBar>
    );
};

export default GuestHeader;
