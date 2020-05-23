import React from 'react';

import { Image } from './styles';

interface AvatarProps {
  name: string;
  size: number;
}

const Avatar: React.FC<AvatarProps> = ({ name, size }) => (
  <Image
    src={`https://api.adorable.io/avatars/${size}/${name}.png`}
    alt={name}
    size={size}
  />
);

export default Avatar;
