import React from 'react';

import Login from '@/Pages/Auth/Login';
import Register from '@/Pages/Auth/Register';
import { MenuIListitem } from '@/types/MenuIListitem';
import { Box, CssBaseline } from '@mui/material';
import GuestHeader from './GuestHeader';

export default function GuestLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const menuItems: MenuIListitem[] = [
        { label: 'Login', name: 'login', path: '/login', element: Login },
        {
            label: 'Register',
            name: 'register',
            path: '/register',
            element: Register,
        },
    ];

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />

            {/* AppBar */}
            <GuestHeader menuItems={menuItems} />

            {/* Main Content */}
            <Box
                component="main"
                sx={{
                    flexGrow: 1,
                    p: 3,
                    mt: 8, // AppBar 分のスペース
                }}
            >
                {children}
            </Box>
        </Box>
    );
}
