import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import React from 'react';
import { useThemeMode } from './ThemeContext';

export default function AppThemeProvider({
    children,
}: {
    children: React.ReactNode;
}) {
    const { mode } = useThemeMode();

    const theme = createTheme({
        palette: {
            mode,
            primary: {
                main: '#3f51b5',
            },
        },

        components: {
            MuiTableCell: {
                styleOverrides: {
                    root: {
                        padding: '4px',
                        whiteSpace: 'nowrap', // ← 自動改行を防止して横スクロールも防ぐ
                    },
                },
            },

            MuiTableRow: {
                styleOverrides: {
                    root: {
                        height: 32,
                    },
                },
            },

            MuiTable: {
                styleOverrides: {
                    root: {
                        tableLayout: 'fixed', // ← 幅を安定させる
                    },
                },
            },
        },
    });

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            {children}
        </ThemeProvider>
    );
}
