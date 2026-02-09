'use client';
import { Title } from '../title';
import { ProductCard } from '../product-card';
import { useRef, useState, useEffect, type FC } from 'react';
import type { IProductsGroupListProps } from './products-group-list.types';
import { cn } from '@/src/lib/utils';
import { useIntersectionObserver } from '@reactuses/core';
import { useCategoryStore } from '@/src/store/category';

export const ProductsGroupList: FC<IProductsGroupListProps> = ({
  title,
  items,
  className,
  listClassName,
  categoryId,
}) => {
  const intersectionRef = useRef<HTMLDivElement>(null);
  const [entry, setEntry] = useState<IntersectionObserverEntry[]>([]);
  const setActiveCategoryId = useCategoryStore((state) => state.setActiveId);

  const stop = useIntersectionObserver(
    intersectionRef,
    (entry) => {
      setEntry(entry);

      if (entry[0]?.isIntersecting) {
        setActiveCategoryId(categoryId);
      }
    },
    {
      threshold: 0.3,
    },
  );

  useEffect(() => {
    return () => {
      stop?.();
    };
  }, [stop]);

  return (
    <div className={className}>
      <Title
        text={title}
        id={title}
        ref={intersectionRef}
        size="lg"
        className="font-extrabold mb-5"
      />
      <div className={cn('grid grid-cols-3 gap-[50px]', listClassName)}>
        {items.map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            name={product.name}
            imageUrl={product.imageUrl}
            price={product.items[0].price}
            count={product.count}
          />
        ))}
      </div>
    </div>
  );
};
