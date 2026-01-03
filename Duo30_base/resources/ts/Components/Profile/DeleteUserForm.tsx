import { useForm } from '@inertiajs/react';
import { Box, Button, TextField, Typography } from '@mui/material';

export default function DeleteUserForm() {
    const {
        data,
        setData,
        delete: destroy,
        processing,
        errors,
    } = useForm({
        password: '',
    });

    const submit = (e: React.FormEvent) => {
        e.preventDefault();
        destroy(route('profile.destroy'));
    };

    return (
        <Box component="section">
            <Typography variant="h6" sx={{ mb: 2 }}>
                Delete Account
            </Typography>

            <Typography variant="body2" sx={{ mb: 2 }}>
                Once your account is deleted, all of its resources and data will
                be permanently deleted.
            </Typography>

            <form onSubmit={submit}>
                <TextField
                    label="Password"
                    type="password"
                    fullWidth
                    value={data.password}
                    onChange={(e) => setData('password', e.target.value)}
                    error={Boolean(errors.password)}
                    helperText={errors.password}
                    sx={{ mb: 3 }}
                />

                <Button
                    type="submit"
                    variant="contained"
                    color="error"
                    disabled={processing}
                >
                    Delete Account
                </Button>
            </form>
        </Box>
    );
}
