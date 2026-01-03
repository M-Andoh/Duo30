import { PageProps } from '@/types';
import { Link, useForm, usePage } from '@inertiajs/react';
import { Box, Button, TextField, Typography } from '@mui/material';

interface Props {
    mustVerifyEmail: boolean;
    status?: string;
}

export default function UpdateProfileInformation({
    mustVerifyEmail,
    status,
}: Props) {
    const user = usePage<PageProps>().props.auth.user;

    const initName: string = user?.name ?? '';
    const initEMail: string = user.email ?? '';
    const { data, setData, patch, errors, processing } = useForm({
        name: initName,
        email: initEMail,
    });

    const submit = (e: React.FormEvent) => {
        e.preventDefault();
        patch(route('profile.update'));
    };

    return (
        <Box component="section">
            <Typography variant="h6" sx={{ mb: 2 }}>
                Profile Information
            </Typography>

            <form onSubmit={submit}>
                <TextField
                    label="Name"
                    fullWidth
                    value={data.name}
                    onChange={(e) => setData('name', e.target.value)}
                    error={Boolean(errors.name)}
                    helperText={errors.name}
                    sx={{ mb: 3 }}
                />

                <TextField
                    label="Email"
                    fullWidth
                    value={data.email}
                    onChange={(e) => setData('email', e.target.value)}
                    error={Boolean(errors.email)}
                    helperText={errors.email}
                    sx={{ mb: 3 }}
                />

                {/* 未確認メールの案内 */}
                {mustVerifyEmail && user.email_verified_at === null && (
                    <Box sx={{ mb: 2 }}>
                        <Typography variant="body2" sx={{ mb: 1 }}>
                            Your email address is unverified.
                        </Typography>

                        <Link
                            href={route('verification.send')}
                            method="post"
                            as="button"
                            className="underline text-sm"
                        >
                            Click here to re-send the verification email.
                        </Link>

                        {status === 'verification-link-sent' && (
                            <Typography
                                variant="body2"
                                color="success.main"
                                sx={{ mt: 1 }}
                            >
                                A new verification link has been sent!
                            </Typography>
                        )}
                    </Box>
                )}

                <Button type="submit" variant="contained" disabled={processing}>
                    Save
                </Button>
            </form>
        </Box>
    );
}
