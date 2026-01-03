import '../css/app.css';

import { createInertiaApp } from '@inertiajs/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { createRoot } from 'react-dom/client';
import AppThemeProvider from './Theme/AppThemeProvider';
import { ThemeProviderContext } from './Theme/ThemeContext';

const appName = import.meta.env.VITE_APP_NAME || 'Laravel';
const appDebug = (import.meta.env.VITE_APP_DEBUG || 'false').toUpperCase();
const debug = appDebug.startsWith('T') || appDebug.startsWith('Y');
const appEnv = import.meta.env.VITE_APP_ENV;
const client = new QueryClient();

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) =>
        resolvePageComponent(
            `./Pages/${name}.tsx`,
            import.meta.glob('./Pages/**/*.tsx'),
        ),
    setup({ el, App, props }) {
        const root = createRoot(el);

        root.render(
            <QueryClientProvider client={client}>
                <ThemeProviderContext>
                    <AppThemeProvider>
                        <App {...props} />
                    </AppThemeProvider>
                </ThemeProviderContext>
                {debug && <ReactQueryDevtools initialIsOpen={false} />}
            </QueryClientProvider>,
        );
    },
    progress: {
        color: '#4B5563',
    },
});
