import GuestLayout from '@/Layouts/GuestLayout';
import { Head, useForm } from '@inertiajs/react';
import {
    Alert,
    Box,
    Button,
    Checkbox,
    Container,
    FormControlLabel,
    Link,
    Paper,
    TextField,
    Typography,
} from '@mui/material';
import React from 'react';

export default function Login() {
    const { data, setData, post, processing, errors } = useForm({
        //email: '',
        login: '',
        password: '',
        remember: false,
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const token = document.querySelector('meta[name="csrf-token"]')?.getAttribute('content');
        post(route('login'), {
            headers: {
                'X-CSRF-TOKEN': token || '',
            },
        });
    };

    return (
        <GuestLayout>
            <Head title="Log in" />

            <Container maxWidth="sm">
                <Paper elevation={3} sx={{ p: 4, mt: 8, borderRadius: 3 }}>
                    <Typography
                        variant="h5"
                        sx={{ mb: 3, textAlign: 'center' }}
                    >
                        Login
                    </Typography>

                    {errors.login && (
                        <Alert severity="error">{errors.login}</Alert>
                    )}
                    {errors.password && (
                        <Alert severity="error">{errors.password}</Alert>
                    )}

                    <Box
                        component="form"
                        onSubmit={handleSubmit}
                        sx={{ mt: 2 }}
                    >
                        <TextField
                            label="Login"
                            fullWidth
                            type="text"
                            value={data.login}
                            onChange={(e) => setData('login', e.target.value)}
                            margin="normal"
                            autoComplete="username" // ← 追加
                        />

                        <TextField
                            label="Password"
                            fullWidth
                            type="password"
                            value={data.password}
                            onChange={(e) =>
                                setData('password', e.target.value)
                            }
                            margin="normal"
                            autoComplete="current-password"
                        />

                        {/* Remember me */}
                        <FormControlLabel
                            control={
                                <Checkbox
                                    checked={data.remember}
                                    onChange={(e) =>
                                        setData('remember', e.target.checked)
                                    }
                                />
                            }
                            label="Remember me"
                            sx={{ mt: 1 }}
                        />

                        <Button
                            type="submit"
                            variant="contained"
                            fullWidth
                            disabled={processing}
                            sx={{ mt: 3, py: 1.2 }}
                        >
                            Log In
                        </Button>

                        {/* Forgot password link */}
                        <Box textAlign="right" sx={{ mt: 1, mb: 2 }}>
                            <Link
                                href={route('password.request')}
                                style={{
                                    fontSize: 14,
                                    textDecoration: 'underline',
                                    color: '#1976d2',
                                }}
                            >
                                Forgot your password?
                            </Link>
                        </Box>

                        {/* Register link */}
                        <Box textAlign="right" sx={{ mt: 1, mb: 2 }}>
                            <Link
                                href={route('register')}
                                style={{
                                    fontSize: 14,
                                    textDecoration: 'underline',
                                    color: '#1976d2',
                                }}
                            >
                                Create new account
                            </Link>
                        </Box>
                    </Box>
                </Paper>
            </Container>
        </GuestLayout>
    );
}
