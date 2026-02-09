'use client';
import { cn } from '@/src/lib/utils';
import type { FC } from 'react';
import type { ICategoriesProps } from './categories.types';
import { useCategoryStore } from '@/src/store/category';
import Link from 'next/link';

const cats = [
  { id: 1, name: 'Пиццы' },
  { id: 2, name: 'Комбо' },
  { id: 3, name: 'Закуски' },
  { id: 4, name: 'Коктейли' },
  { id: 5, name: 'Кофе' },
  { id: 6, name: 'Напитки' },
  { id: 7, name: 'Десерты' },
];

export const Categories: FC<ICategoriesProps> = ({ className }) => {
  const categoryActiveId = useCategoryStore((state) => state.activeId);

  return (
    <div
      className={cn('inline-flex gap-1 bg-gray-50 p-1 rounded-2xl', className)}
    >
      {cats.map(({ name, id }, index) => (
        <Link
          className={cn(
            'flex items-center font-bold h-11 rounded-2xl px-5',
            categoryActiveId === id &&
              'bg-white shadow-md shadow-gray-200 text-primary',
          )}
          href={`/#${name}`}
          key={index}
        >
          <button type="button">{name}</button>
        </Link>
      ))}
    </div>
  );
};
