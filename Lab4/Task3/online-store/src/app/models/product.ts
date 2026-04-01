export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  rating: number;
  image: string;
  images: string[];
  categoryId: number;
  link: string;
  likes: number;
}
