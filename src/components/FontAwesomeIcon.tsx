import React from 'react';
import { FontAwesomeIcon as FAIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

interface FontAwesomeIconProps {
  icon: IconDefinition;
  className?: string;
  size?: 'xs' | 'sm' | 'lg' | '1x' | '2x' | '3x' | '4x' | '5x' | '6x' | '7x' | '8x' | '9x' | '10x';
  color?: string;
  onClick?: () => void;
}

export const FontAwesomeIcon: React.FC<FontAwesomeIconProps> = ({
  icon,
  className = '',
  size = '1x',
  color,
  onClick,
  ...props
}) => {
  return (
    <FAIcon
      icon={icon}
      className={className}
      size={size}
      color={color}
      onClick={onClick}
      {...props}
    />
  );
};

export default FontAwesomeIcon;
