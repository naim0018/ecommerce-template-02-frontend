export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  discount?: number;
  category?: string;
  rating?: number;
  reviews?: number;
}

export interface Category {
  id: string;
  name: string;
  image: string;
  itemCount: number;
} 