import type { FC } from 'react';
import { cn } from '@/lib/utils';
import { Container } from '../container';
import { Categories } from '../categories';
import { SortPopup } from '../sort-popup';

import type { ITopBarProps } from './top-bar.types';
export const TopBar: FC<ITopBarProps> = ({ className }) => {
  return (
    <div
      className={cn(
        'sticky top-0 bg-white py-5 shadow-lg shadow-black/5 z-10',
        className
      )}
    >
      <Container className="mt-10">
        <Categories />
        <SortPopup />
      </Container>
    </div>
  );
};
