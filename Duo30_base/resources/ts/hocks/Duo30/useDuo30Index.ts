import { useQueryClient } from '@tanstack/react-query';
import { SentenceType } from 'SentenceType';

const useDuo30Index = () => {
    const queryClient = useQueryClient();
    return queryClient.getQueryData<SentenceType[]>(['duo30.index']);
};

export default useDuo30Index;
