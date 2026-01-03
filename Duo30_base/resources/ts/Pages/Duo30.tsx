import { SectionHeader } from '@/Components/Duo30/header/SectionHeader';
import { SentenceHeader } from '@/Components/Duo30/header/SentenceHeader';
import { TopHeader } from '@/Components/Duo30/header/TopHeader';
import { SentenceBody } from '@/Components/Duo30/SentenceBody';
import useDuo30Index from '@/hocks/Duo30/useDuo30Index';
import useGetGetDuo30Index from '@/hocks/Duo30/useGetDuo30Index';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { usePlayerStore } from '@/store/playerStore';
import { Head } from '@inertiajs/react';
import { useEffect, useState } from 'react';
import { SentenceType } from 'SentenceType';

export default function Duo30Index() {
    const sentences = useDuo30Index();
    const [sentenceNo, setSentenceNo] = useState(1);
    const [sentence, setSentence] = useState<SentenceType | null>(null);

    const { setSections, setSentences } = usePlayerStore();
    const sections = new Set<number>();
    sentences?.map((s) => sections.add(s.section_id));

    useEffect(() => {
        setSections(Array.from(sections));
        setSentences(sentences ?? []);
    }, [sentences]);

    useEffect(() => {
        setSentence(sentences?.find((s) => s.id == sentenceNo) ?? null);
    }, [sentenceNo]);

    const { isLoading, error } = useGetGetDuo30Index();

    if (isLoading) {
        return <p>Now Loading...</p>;
    }

    if (error instanceof Error) {
        return <p>エラー: {error.message}</p>;
    }

    return (
        <AuthenticatedLayout>
            <Head title="Duo30" />
            <TopHeader />
            <SectionHeader />
            <SentenceHeader />
            <SentenceBody />
        </AuthenticatedLayout>
    );
}
