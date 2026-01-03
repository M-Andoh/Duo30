import GuestLayout from '@/Layouts/GuestLayout';
import { Head, useForm, usePage } from '@inertiajs/react';
import {
    Alert,
    Box,
    Button,
    Container,
    Paper,
    Typography,
} from '@mui/material';

export default function VerifyEmail() {
    const { status } = usePage<any>().props;
    const { post, processing } = useForm({});

    const resend = (e: React.MouseEvent) => {
        e.preventDefault();
        post(route('verification.send'));
    };

    return (
        <GuestLayout>
            <Head title="Verify Email " />

            <Container maxWidth="sm">
                <Paper elevation={3} sx={{ p: 4, mt: 8, borderRadius: 3 }}>
                    <Typography variant="h5" sx={{ mb: 2 }}>
                        Verify Your Email Address
                    </Typography>

                    <Typography variant="body2" sx={{ mb: 2 }}>
                        Thanks for signing up! Before getting started, could you
                        verify your email address by clicking on the link we
                        just emailed to you?
                    </Typography>

                    {status === 'verification-link-sent' && (
                        <Alert severity="success" sx={{ mb: 2 }}>
                            A new verification link has been sent to your email
                            address.
                        </Alert>
                    )}

                    <Box sx={{ display: 'flex', gap: 2 }}>
                        <Button
                            variant="contained"
                            onClick={resend}
                            disabled={processing}
                        >
                            Resend Verification Email
                        </Button>

                        <form method="POST" action={route('logout')}>
                            <Button variant="outlined" type="submit">
                                Logout
                            </Button>
                        </form>
                    </Box>
                </Paper>
            </Container>
        </GuestLayout>
    );
}
