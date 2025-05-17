import type { ReactNode } from 'react';

export interface LabelProps {
  children: ReactNode;
  htmlFor?: string;
  className?: string;
  style?: React.CSSProperties;
  id?: string;
  required?: boolean;
  disabled?: boolean;
  error?: boolean;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'default' | 'bold' | 'italic';
}