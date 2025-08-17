'use client';

import { icons } from 'lucide-react';

interface IconProps {
  name: keyof typeof icons;
  size?: number;
  color?: string;
  className?: string;
}

const Icon = ({ name, size = 17, color, className }: IconProps) => {
  const LucideIcon = icons[name];

  return (
    <LucideIcon
      size={size}
      color={color}
      className={className}
    />
  );
};

export default Icon;