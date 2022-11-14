import { FC } from 'react';

import { ShipModel } from '../type/interface/ship.model';
import ProfileCard from './common/ProfileCard';
import ProfileSectionTitle from './common/ProfileSectionTitle';

interface BasicInfoModel {
  key: keyof ShipModel;
  label: string;
}

const basicInfo: BasicInfoModel[] = [
  { key: 'year_built', label: 'Year built' },
  { key: 'weight_kg', label: 'Weight' },
  { key: 'class', label: 'Class' },
  { key: 'home_port', label: 'Home port' }
];

interface ShipBasicInfoProps {
  ship: ShipModel;
}

const ShipBasicInfo: FC<ShipBasicInfoProps> = ({ ship }) => {
  return (
    <>
      <ProfileSectionTitle title="Basic info" />

      <div className="flex flex-col">
        {basicInfo.map(({ key, label }) => {
          const value = ship[key];

          return (
            <ProfileCard
              key={key}
              label={label}
              value={value ?? '/'}
              suffix={key === 'weight_kg' && value ? 'kg' : ''}
            />
          );
        })}
      </div>
    </>
  );
};

export default ShipBasicInfo;
