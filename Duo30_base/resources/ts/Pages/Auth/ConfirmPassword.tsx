import GuestLayout from '@/Layouts/GuestLayout';
import { useForm } from '@inertiajs/react';
import { Button, Container, Paper, TextField, Typography } from '@mui/material';

export default function ConfirmPassword() {
    const { data, setData, post, processing, errors } = useForm({
        password: '',
    });

    const submit = (e: React.FormEvent) => {
        e.preventDefault();
        post(route('password.confirm'));
    };

    return (
        <GuestLayout>
            <Container maxWidth="xs" sx={{ mt: 10 }}>
                <Paper sx={{ p: 4, borderRadius: 3 }}>
                    <Typography variant="h5" sx={{ mb: 3 }}>
                        Confirm Password
                    </Typography>

                    <Typography variant="body2" sx={{ mb: 2 }}>
                        This is a secure area. Please confirm your password
                        before continuing.
                    </Typography>

                    <form onSubmit={submit}>
                        <TextField
                            label="Password"
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

                        <Button
                            type="submit"
                            variant="contained"
                            fullWidth
                            disabled={processing}
                        >
                            Confirm
                        </Button>
                    </form>
                </Paper>
            </Container>
        </GuestLayout>
    );
}
