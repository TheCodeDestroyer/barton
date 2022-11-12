import { FC } from 'react';

import Link from 'next/link';

import ArrowRight from './icons/ArrowRight';

interface ShipCardProps {
  id: string;
  name: string;
  type: string;
  imgUrl: string;
}

const ShipCard: FC<ShipCardProps> = ({ id, name, type, imgUrl }) => {
  return (
    <div className="w-[320px] bg-white shadow-xl rounded-lg">
      <div className="block w-full h-[160px] overflow-hidden rounded-t-lg">
        <img
          src={imgUrl}
          alt={name}
          className="pointer-events-none object-cover w-full h-full"
        />
      </div>
      <div className="flex flex-row p-[20px]  justify-between">
        <div className="flex flex-col">
          <span className="pointer-events-none mt-2 block truncate font-bold text-[18px]">
            {name}
          </span>
          <span className="pointer-events-none block text-theme-blue-300/50">
            {type}
          </span>
        </div>
        <div className="flex items-center">
          <Link href={`/ship/${id}`}>
            <ArrowRight className="cursor-pointer" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ShipCard;
