import { cn } from '@/lib/utils';
import type { FC } from 'react';
import { createElement } from 'react';
import type { ITitleProps } from './title.types';
import { mapTagBySize, mapClassNameBySize } from './title.constants';

export const Title: FC<ITitleProps> = ({ text, size = 'sm', className }) => {
  return createElement(
    mapTagBySize[size],
    { className: cn(mapClassNameBySize[size], className) },
    text
  );
};
