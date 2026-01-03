import { useThemeMode } from '@/Theme/ThemeContext';
import { MenuIListitem } from '@/types/MenuIListitem';
import { Link, router, usePage } from '@inertiajs/react';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import WarehouseIcon from '@mui/icons-material/Warehouse';
import {
    AppBar,
    Avatar,
    Box,
    Button,
    IconButton,
    Menu,
    MenuItem,
    Toolbar,
    Typography,
    useTheme,
} from '@mui/material';
import React from 'react';

type Props = {
    menuItems: MenuIListitem[];
};

const AuthenticatedHeader: React.FC<Props> = ({ menuItems }) => {
    const theme = useTheme();
    const { url } = usePage();

    const { toggleMode } = useThemeMode();

    // Avatar メニュー
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);

    const handleAvatarClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleMenuClose = () => setAnchorEl(null);

    // Dashboard
    const handleDashboard = () => {
        handleMenuClose();
        router.visit(route('dashboard'));
    };

    // profile
    const handleProfile = () => {
        handleMenuClose();
        router.visit(route('profile.edit'));
    };

    // logout
    const handleLogout = () => {
        handleMenuClose();
        router.post(route('logout'));
    };

    ////
    const [anchorEl1, setAnchorEl1] = React.useState<null | HTMLElement>(null);
    const open1 = Boolean(anchorEl1);

    // ボタンをクリックしたときにメニューを開く
    const handleClick1 = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl1(event.currentTarget);
    };

    // メニューを閉じる
    const handleClose1 = () => {
        setAnchorEl1(null);
    };

    // 項目をクリックしたときの処理
    const handleSelect1 = (value: string) => {
        router.visit(route(value));
        handleClose1(); // 選択後にメニューを閉じる
    };

    ////
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
                        const active = url.endsWith(item.path);
                        return (
                            <Button
                                key={item.name}
                                component={Link}
                                href={route(item.name)}
                                color={active ? 'primary' : 'inherit'}
                                variant={active ? 'contained' : 'text'}
                                sx={{
                                    display: { xs: 'none', sm: 'flex' },
                                    ...(active && {
                                        bgcolor:
                                            theme.palette.mode === 'dark'
                                                ? 'primary.light'
                                                : 'primary.dark',
                                        color:
                                            theme.palette.mode === 'dark'
                                                ? 'primary.contrastText'
                                                : '#fff',
                                        '&:hover': {
                                            bgcolor:
                                                theme.palette.mode === 'dark'
                                                    ? 'primary.main'
                                                    : 'primary.dark',
                                        },
                                    }),
                                }}
                            >
                                {item.label}
                            </Button>
                        );
                    })}

                    <Button
                        id="dropdown-button"
                        aria-controls={open1 ? 'dropdown-menu1' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open1 ? 'true' : undefined}
                        onClick={handleClick1}
                        variant="contained"
                        sx={{ display: { xs: 'flex', sm: 'none' } }}
                    >
                        メニュー
                    </Button>
                    <Menu
                        id="dropdown-menu1"
                        anchorEl={anchorEl1}
                        open={open1}
                        onClose={handleClose1}
                    >
                        {menuItems.map((item) => {
                            const active = url.endsWith(item.path);
                            return (
                                <MenuItem
                                    key={item.name}
                                    sx={(theme) => ({
                                        backgroundColor: active
                                            ? (theme.palette.mode === 'dark'
                                                ? 'primary.dark'
                                                : 'primary.light')
                                            : 'inherit',
                                    })}
                                    onClick={() => handleSelect1(item.name)}
                                >
                                    {item.label}
                                </MenuItem>
                            );
                        })}
                    </Menu>
                </Box>

                {/* Avatar */}
                <IconButton onClick={handleAvatarClick} sx={{ ml: 1 }}>
                    <Avatar />
                </IconButton>

                {/* Avatar メニュー */}
                <Menu anchorEl={anchorEl} open={open} onClose={handleMenuClose}>
                    <MenuItem onClick={handleProfile}>Profile</MenuItem>
                    <MenuItem onClick={handleLogout}>Logout</MenuItem>
                </Menu>

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

export default AuthenticatedHeader;
