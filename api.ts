const BASE_URL = 'https://fake-coffee-brand-api.vercel.app/api';

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

export class ApiClient {
  // https://fake-coffee-brand-api.vercel.app/api
  static getProducts = async (): Promise<Product[]> => {
    // Sleep 5s
    // await new Promise((resolve) => setTimeout(resolve, 5000));
    return fetch(`${BASE_URL}`).then((res) => res.json());
  };
  // https://fake-coffee-brand-api.vercel.app/api/:id
  static getProductById = async (id: number): Promise<Product> => {
    // await new Promise((resolve) => setTimeout(resolve, 5000));
    return fetch(`${BASE_URL}/${id}`).then((res) => res.json().then((data) => data?.[0]));
  };
}
