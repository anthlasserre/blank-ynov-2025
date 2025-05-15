const BASE_URL = 'https://fake-coffee-brand-api.vercel.app/api';

type Product = {
  id: number;
  title: string;
  price: string;
  description: string;
  category: string;
  image: string;
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
    return fetch(`${BASE_URL}/${id}`).then((res) => res.json());
  };
}
