import GuestLayout from '@/Layouts/GuestLayout';
import { Head, useForm } from '@inertiajs/react';
import {
    Alert,
    Button,
    Container,
    Paper,
    Stack,
    TextField,
    Typography,
} from '@mui/material';
import React from 'react';

type ForgotPasswordProps = {
    status?: string;
};

export default function ForgotPassword({ status }: ForgotPasswordProps) {
    const { data, setData, post, processing, errors } = useForm({
        email: '',
    });

    const submit = (e: React.FormEvent) => {
        e.preventDefault();
        post(route('password.email'));
    };

    return (
        <GuestLayout>
            <Head title="Log in" />

            <Container maxWidth="sm">
                <Paper elevation={3} sx={{ p: 4, mt: 8, borderRadius: 3 }}>
                    <Typography variant="h5" mb={2} textAlign="center">
                        Forgot Password
                    </Typography>

                    {status && <Alert severity="success">{status}</Alert>}

                    <form onSubmit={submit}>
                        <Stack spacing={2}>
                            <TextField
                                label="Email"
                                fullWidth
                                value={data.email}
                                onChange={(e) =>
                                    setData('email', e.target.value)
                                }
                                error={!!errors.email}
                                helperText={errors.email}
                            />

                            <Button
                                type="submit"
                                variant="contained"
                                fullWidth
                                disabled={processing}
                            >
                                Send Reset Email
                            </Button>
                        </Stack>
                    </form>
                </Paper>
            </Container>
        </GuestLayout>
    );
}
