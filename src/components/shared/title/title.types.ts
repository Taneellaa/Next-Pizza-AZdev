export type TitleSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';

export interface ITitleProps {
  size?: TitleSize;
  id?: string;
  className?: string;
  text: string;
  ref?: React.Ref<HTMLDivElement>;
}
