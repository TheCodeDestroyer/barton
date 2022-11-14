import { FC, useMemo } from 'react';

import Link from 'next/link';

import Picture from './common/Picture';
import ArrowRightIcon from './icons/ArrowRightIcon';

interface ShipCardProps {
  id: string;
  name: string;
  type: string;
  imgUrl: string;
}

const ShipCard: FC<ShipCardProps> = function ({ id, name, type, imgUrl }) {
  const detailPath = useMemo<string>(() => `/ship/${id}`, [id]);

  return (
    <div className="w-full bg-white shadow-xl rounded-lg">
      <Link href={detailPath}>
        <div className="block w-full h-[160px] overflow-hidden rounded-t-lg">
          <Picture
            src={imgUrl}
            alt={name}
            className="object-cover w-full h-full"
          />
        </div>
      </Link>
      <div className="flex flex-row p-[20px] justify-between">
        <div className="flex flex-col">
          <Link href={detailPath}>
            <span className="mt-2 block truncate font-bold text-[18px] hover:underline">
              {name}
            </span>
          </Link>
          <span className="block text-theme-blue-300/50">{type}</span>
        </div>
        <div className="flex items-center">
          <Link href={detailPath}>
            <ArrowRightIcon className="cursor-pointer" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ShipCard;
