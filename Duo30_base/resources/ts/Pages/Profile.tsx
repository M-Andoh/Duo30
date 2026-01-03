import { PageProps } from '@/types';
import { Head } from '@inertiajs/react';
import { Box, Container, Paper, Typography } from '@mui/material';

import DeleteUserForm from '@/Components/Profile/DeleteUserForm';
import UpdatePasswordForm from '@/Components/Profile/UpdatePasswordForm';
import UpdateProfileInformation from '@/Components/Profile/UpdateProfileInformationForm';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';

interface Props extends PageProps {
    mustVerifyEmail: boolean;
    status?: string;
}

export default function Edit({ mustVerifyEmail, status }: Props) {
    return (
        <AuthenticatedLayout>
            <Head title="Profile" />

            <Container maxWidth="sm">
                <Paper elevation={3} sx={{ p: 4, mt: 8, borderRadius: 3 }}>
                    <Box sx={{ maxWidth: 720, mx: 'auto', mt: 4, mb: 6 }}>
                        <Typography variant="h4" sx={{ mb: 3 }}>
                            Profile
                        </Typography>

                        {/* ▼ プロフィール更新フォーム */}
                        <Paper sx={{ p: 4, mb: 4, borderRadius: 3 }}>
                            <UpdateProfileInformation
                                mustVerifyEmail={mustVerifyEmail}
                                status={status}
                            />
                        </Paper>

                        {/* ▼ パスワード更新フォーム */}
                        <Paper sx={{ p: 4, mb: 4, borderRadius: 3 }}>
                            <UpdatePasswordForm />
                        </Paper>

                        {/* ▼ アカウント削除フォーム */}
                        <Paper sx={{ p: 4, borderRadius: 3 }}>
                            <DeleteUserForm />
                        </Paper>
                    </Box>
                </Paper>
            </Container>
        </AuthenticatedLayout>
    );
}
