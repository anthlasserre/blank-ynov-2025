import { useQuery } from '@tanstack/react-query';

import { ApiClient } from '~/api';

export const useFetchProducts = () => {
  return useQuery({
    queryKey: ['products'],
    queryFn: ApiClient.getProducts,
  });
};

export const useFetchProductById = (id: number) => {
  return useQuery({
    queryKey: ['product', id],
    queryFn: () => ApiClient.getProductById(id),
    refetchOnMount: 'always',
  });
};
