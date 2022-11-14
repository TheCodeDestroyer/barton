import { FC } from 'react';

import { ShipMissionModel } from '../type/interface/ship.model';
import ProfileSectionTitle from './common/ProfileSectionTitle';
import SubTitle from './common/SubTitle';

interface ShipMissionsProps {
  missions: ShipMissionModel[];
}

const ShipMissions: FC<ShipMissionsProps> = ({ missions }) => {
  return (
    <>
      <ProfileSectionTitle title="Missions" className="mt-[55px]" />

      <div className="flex flex-col">
        {missions.map(({ name, flight }) => (
          <div key={name} className="flex flex-col mt-[15px]">
            <SubTitle text={name} />
            <span className="text-[14px]">{`Flight: ${flight}`}</span>
          </div>
        ))}
      </div>
    </>
  );
};

export default ShipMissions;
