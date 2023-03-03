import React from 'react';
import IcomoonReact from 'icomoon-react';
import iconSet from '../../icons/selection.json';

type Props = {
  icon: string;
  color?: string;
  size?: number;
  className?: string;
};

const Icon: React.FC<Props> = ({
  color = 'black',
  size = 20,
  icon,
  className = 'icon',
}) => {
  return (
    <IcomoonReact
      className={className}
      color={color}
      icon={icon}
      iconSet={iconSet}
      size={size}
    />
  );
};

export default Icon;
