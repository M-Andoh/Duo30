import GuestLayout from '@/Layouts/GuestLayout';
import { Head, useForm } from '@inertiajs/react';
import {
    Button,
    Container,
    Link,
    Paper,
    Stack,
    TextField,
    Typography,
} from '@mui/material';
import React from 'react';

export default function Register() {
    const { data, setData, post, errors, processing } = useForm({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
    });

    const submit = (e: React.FormEvent) => {
        e.preventDefault();
        post(route('register'));
    };

    return (
        <GuestLayout>
            <Head title="Register" />

            <Container maxWidth="sm">
                <Paper elevation={3} sx={{ p: 4, mt: 8, borderRadius: 3 }}>
                    <Typography variant="h5" mb={2} textAlign="center">
                        Create Account
                    </Typography>

                    <form onSubmit={submit}>
                        <Stack spacing={2}>
                            <TextField
                                label="Name"
                                fullWidth
                                value={data.name}
                                onChange={(e) =>
                                    setData('name', e.target.value)
                                }
                                error={!!errors.name}
                                helperText={errors.name}
                            />
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
                            <TextField
                                label="Password"
                                type="password"
                                fullWidth
                                value={data.password}
                                onChange={(e) =>
                                    setData('password', e.target.value)
                                }
                                error={!!errors.password}
                                helperText={errors.password}
                            />
                            <TextField
                                label="Confirm Password"
                                type="password"
                                fullWidth
                                value={data.password_confirmation}
                                onChange={(e) =>
                                    setData(
                                        'password_confirmation',
                                        e.target.value,
                                    )
                                }
                            />

                            <Button
                                type="submit"
                                variant="contained"
                                fullWidth
                                disabled={processing}
                            >
                                Register
                            </Button>

                            <Link
                                href={route('login')}
                                underline="hover"
                                variant="body2"
                                textAlign="center"
                            >
                                Already registered?
                            </Link>
                        </Stack>
                    </form>
                </Paper>
            </Container>
        </GuestLayout>
    );
}
