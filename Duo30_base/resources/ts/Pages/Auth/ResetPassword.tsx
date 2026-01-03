import GuestLayout from '@/Layouts/GuestLayout';
import { Head, useForm } from '@inertiajs/react';
import { Button, Container, Paper, TextField, Typography } from '@mui/material';

interface Props {
    token: string;
    email: string;
}

export default function ResetPassword({ token, email }: Props) {
    const { data, setData, post, errors, processing } = useForm({
        token: token,
        email: email,
        password: '',
        password_confirmation: '',
    });

    const submit = (e: React.FormEvent) => {
        e.preventDefault();
        post(route('password.store'));
    };

    return (
        <GuestLayout>
            <Head title="Reset Password" />

            <Container maxWidth="sm">
                <Paper elevation={3} sx={{ p: 4, mt: 8, borderRadius: 3 }}>
                    <Typography variant="h5" sx={{ mb: 3 }}>
                        Reset Password
                    </Typography>

                    <form onSubmit={submit}>
                        <TextField
                            label="Email"
                            type="email"
                            fullWidth
                            value={data.email}
                            onChange={(e) => setData('email', e.target.value)}
                            error={Boolean(errors.email)}
                            helperText={errors.email}
                            sx={{ mb: 3 }}
                        />

                        <TextField
                            label="New Password"
                            type="password"
                            fullWidth
                            value={data.password}
                            onChange={(e) =>
                                setData('password', e.target.value)
                            }
                            error={Boolean(errors.password)}
                            helperText={errors.password}
                            sx={{ mb: 3 }}
                        />

                        <TextField
                            label="Confirm Password"
                            type="password"
                            fullWidth
                            value={data.password_confirmation}
                            onChange={(e) =>
                                setData('password_confirmation', e.target.value)
                            }
                            error={Boolean(errors.password_confirmation)}
                            helperText={errors.password_confirmation}
                            sx={{ mb: 3 }}
                        />

                        <Button
                            type="submit"
                            variant="contained"
                            fullWidth
                            disabled={processing}
                        >
                            Reset Password
                        </Button>
                    </form>
                </Paper>
            </Container>
        </GuestLayout>
    );
}
