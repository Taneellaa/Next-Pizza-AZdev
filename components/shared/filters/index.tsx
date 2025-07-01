import { Title } from '../title';
import type { FC } from 'react';
import { FilterCheckbox } from '../filter-checkbox';

import type { IFiltersProps } from './filters.types';
import { Input, RangeSlider } from '@/components/ui';

export const Filters: FC<IFiltersProps> = ({ className }) => {
  return (
    <div className={className}>
      <Title text="Фильтрация" className="mb-5 font-bold" />

      <div className="flex flex-col gap-4">
        <FilterCheckbox text="Можно собирать" value="1" />
        <FilterCheckbox text="Новинки" value="2" />
      </div>

      <div className="mt-5 border-y border-y-neutral-100 py-6 pb-7">
        <p className="font-bold mb-3">Цена</p>

        <div className="flex gap-3 mb-5">
          <Input type="number" placeholder="от 0" min={0} max={2100} />
          <Input type="number" min={100} max={2100} placeholder="до 2100" />
        </div>

        <RangeSlider min={0} max={5000} step={10} value={[0, 5000]} />
      </div>
    </div>
  );
};
