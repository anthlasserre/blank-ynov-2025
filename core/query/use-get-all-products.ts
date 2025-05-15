import { useQuery } from '@tanstack/react-query';

import { BASE_URL } from './index';

export type Product = {
  id: number;
  name: string;
  description: string;
  price: number;
  region: string;
  weight: number;
  flavor_profile: string[];
  grind_option: string[];
  roast_level: number;
  image_url: string;
};

const getAllProducts = async (): Promise<Product[]> => {
  const response = await fetch(BASE_URL);
  return response.json();
};

export const useGetAllProducts = () => {
  return useQuery({
    queryKey: ['products'],
    queryFn: getAllProducts,
  });
};
