import type { ReactNode } from 'react';

export interface IFilterChecboxProps {
  text: string;
  value: string;
  endAdornment?: ReactNode;
  onCheckedChange?: (checked: boolean) => void;
  checked?: boolean;
}
