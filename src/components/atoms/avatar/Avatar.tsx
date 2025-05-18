import type { AvatarProps } from './avatar.types';

const Avatar = ({ src, alt, size = 'medium' }: AvatarProps) => {
  const sizeClasses = {
    small: 'w-8 h-8',
    medium: 'w-12 h-12',
    large: 'w-16 h-16',
  };

  return (
    <img
      src={src}
      alt={alt}
      className={`rounded-full object-cover ${sizeClasses[size]}`}
    />
  );
};

export default Avatar;