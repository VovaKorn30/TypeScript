import { BaseContent } from './BaseContent';

export interface Product extends BaseContent {
  name: string;
  description: string;
  price: number;
  categoryId: string;
  stock: number;
}
