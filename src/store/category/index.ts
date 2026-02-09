import { create } from 'zustand';
import type { ICategoryState } from './category.types';

export const useCategoryStore = create<ICategoryState>()((set) => ({
  activeId: 1,
  setActiveId: (activeId?) => set({ activeId }),
}));
