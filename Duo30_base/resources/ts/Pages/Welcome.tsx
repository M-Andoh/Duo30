import GuestLayout from '@/Layouts/GuestLayout';

export default function Dashboard() {
    const appName = import.meta.env.VITE_APP_NAME || 'Laravel';
    
    return (
        <GuestLayout>
            <h1>Welcome</h1>
            <p>Welcome to {appName} !</p>
        </GuestLayout>
    );
}
