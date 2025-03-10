const BASE_URL = 'https://fakestoreapi.com';

type Product = {
  id: number;
  title: string;
  price: string;
  description: string;
  category: string;
  image: string;
};

export class ApiClient {
  // https://fakestoreapi.com/products
  static getProducts = async (): Promise<Product[]> => {
    // Sleep 5s
    // await new Promise((resolve) => setTimeout(resolve, 5000));
    return fetch(`${BASE_URL}/products`).then((res) => res.json());
  };
  // https://fakestoreapi.com/products/:id
  static getProductById = async (id: number): Promise<Product> => {
    // await new Promise((resolve) => setTimeout(resolve, 5000));
    return fetch(`${BASE_URL}/products/${id}`).then((res) => res.json());
  };
}
