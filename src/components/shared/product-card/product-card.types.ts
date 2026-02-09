import { HTMLAttributes } from 'react';

export interface ProductCardProps extends HTMLAttributes<HTMLDivElement> {
  name: string;
  price: number;
  count: number;
  imageUrl?: string;
}
