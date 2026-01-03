import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { SentenceType } from 'SentenceType';

const getGetDuo30Index = async (): Promise<SentenceType[]> => {
    const response = await axios.request<SentenceType[]>({
        url: route('duo30.index'),
        method: 'GET',
        withCredentials: true,
        withXSRFToken: true,
    });
    return response.data;
};

const useGetGetDuo30Index = () => {
    const { data, error, isLoading } = useQuery<SentenceType[]>({
        queryKey: ['duo30.index'],
        queryFn: getGetDuo30Index,
    });
    return { data, isLoading, error };
};

export default useGetGetDuo30Index;
