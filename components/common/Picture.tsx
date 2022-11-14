import { FC } from 'react';

import CameraIcon from '../icons/CameraIcon';

interface ImageProps {
  src: string;
  alt: string;
  className?: string;
}

const Picture: FC<ImageProps> = ({ src, alt, className }) => {
  if (!src) {
    return (
      <div className="h-full w-full flex justify-center items-center bg-gray-300">
        <CameraIcon className="text-xl text-gray-500 h-28 w-28" />
      </div>
    );
  }

  return <img src={src} alt={alt} className={className} />;
};

export default Picture;
