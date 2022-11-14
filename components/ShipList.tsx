import { FC } from 'react';

import { ShipBaseModel } from '../type/interface/ship.model';
import ShipCard from './ShipCard';

interface ShipListProps {
  ships: ShipBaseModel[];
}

const ShipList: FC<ShipListProps> = ({ ships }) => {
  return (
    <ul
      role="list"
      className="mt-4 grid grid-cols-1 gap-6 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3"
    >
      {ships.map((ship) => (
        <li key={ship.id} className="relative">
          <ShipCard
            id={ship.id}
            name={ship.name}
            imgUrl={ship.image}
            type={ship.type}
          />
        </li>
      ))}
    </ul>
  );
};

export default ShipList;
