import React, {
    createContext,
    useContext,
    useEffect,
    useMemo,
    useState,
} from 'react';

type ThemeMode = 'light' | 'dark';

type ThemeContextType = {
    mode: ThemeMode;
    toggleMode: () => void;
};

const ThemeContext = createContext<ThemeContextType>({
    mode: 'light',
    toggleMode: () => {},
});

export function ThemeProviderContext({
    children,
}: {
    children: React.ReactNode;
}) {
    const [mode, setMode] = useState<ThemeMode>('light');

    // 初期化：localStorage のテーマを読み込む
    useEffect(() => {
        const saved = localStorage.getItem('themeMode');
        if (saved === 'light' || saved === 'dark') {
            setMode(saved);
        }
    }, []);

    // 切替（localStorage へ保存）
    const toggleMode = () => {
        setMode((prev) => {
            const next = prev === 'light' ? 'dark' : 'light';
            localStorage.setItem('themeMode', next);
            return next;
        });
    };

    const value = useMemo(() => ({ mode, toggleMode }), [mode]);

    return (
        <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
    );
}

export const useThemeMode = () => useContext(ThemeContext);
