import type { FC } from 'react';
import { cn } from '@/lib/utils';
import { ArrowUpDown } from 'lucide-react';
import type { ISortPopupProps } from './sort-popup.types';

export const SortPopup: FC<ISortPopupProps> = ({ className }) => {
  return (
    <div
      className={cn(
        'inline-flex items-center gap-1 bg-gray-50 px-5 h-[52px] rounded-2xl cursor-pointer',
        className
      )}
    >
      <ArrowUpDown size={16} />
      <b>Сортировка: </b>
      <b className="text-primary">популярное</b>
    </div>
  );
};
