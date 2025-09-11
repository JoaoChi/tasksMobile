import { IconSymbol } from '@/components/ui/IconSymbol';
import React from 'react';

export interface IconProps {
  name: string;
  size?: number;
  color?: string;
}

export const Icon: React.FC<IconProps> = ({ 
  name, 
  size = 24, 
  color = '#333' 
}) => {
  return <IconSymbol name={name} size={size} color={color} />;
};
