import { useForm } from '@inertiajs/react';
import { Box, Button, TextField, Typography } from '@mui/material';

export default function UpdatePasswordForm() {
    const { data, setData, errors, put, processing, reset } = useForm({
        current_password: '',
        password: '',
        password_confirmation: '',
    });

    const submit = (e: React.FormEvent) => {
        e.preventDefault();
        put(route('password.update'), {
            onSuccess: () => reset(),
        });
    };

    return (
        <Box component="section">
            <Typography variant="h6" sx={{ mb: 2 }}>
                Update Password
            </Typography>

            <form onSubmit={submit}>
                <TextField
                    label="Current Password"
                    type="password"
                    fullWidth
                    value={data.current_password}
                    onChange={(e) =>
                        setData('current_password', e.target.value)
                    }
                    error={Boolean(errors.current_password)}
                    helperText={errors.current_password}
                    sx={{ mb: 3 }}
                />

                <TextField
                    label="New Password"
                    type="password"
                    fullWidth
                    value={data.password}
                    onChange={(e) => setData('password', e.target.value)}
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

                <Button type="submit" variant="contained" disabled={processing}>
                    Update Password
                </Button>
            </form>
        </Box>
    );
}
