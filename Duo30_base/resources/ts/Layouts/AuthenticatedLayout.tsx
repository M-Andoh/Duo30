import React from 'react';

import { Box, CssBaseline } from '@mui/material';

import Dashboard from '@/Pages/Dashboard';
import Duo30Index from '@/Pages/Duo30';
import { MenuIListitem } from '@/types/MenuIListitem';
import { usePage } from '@inertiajs/react';
import AuthenticatedHeader from './AuthenticatedHeader';

export default function AuthenticatedLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const user = usePage().props.auth.user;

    const menuItems: MenuIListitem[] = [
        {
            label: 'Dash',
            name: 'dashboard',
            path: '/dashboard',
            element: Dashboard,
        },
        { label: 'Duo30', name: 'duo30', path: '/duo30', element: Duo30Index },
    ];

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />

            {/* AppBar */}
            <AuthenticatedHeader menuItems={menuItems} />

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
