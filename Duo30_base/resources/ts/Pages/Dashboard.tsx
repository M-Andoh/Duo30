import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';

export default function Dashboard() {
    const appName = import.meta.env.VITE_APP_NAME || 'Laravel';
    
    return (
        <AuthenticatedLayout>
            <h1>Dashboard</h1>
            <p>Welcome to your dashboard!</p>
        </AuthenticatedLayout>
    );
}
