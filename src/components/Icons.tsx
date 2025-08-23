'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

interface IconProps {
  icon: IconDefinition;
  size?: number;
  color?: string;
  className?: string;
}

const Icon = ({ icon, size = 17, color, className }: IconProps) => {
  return (
    <FontAwesomeIcon
      icon={icon}
      style={{ fontSize: size, color }}
      className={className}
    />
  );
};

export default Icon;