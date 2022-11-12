import { FC, useMemo } from 'react';

import { useQuery } from '@apollo/client';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { GET_SHIP_DETAIL } from '../../../gql/ship.gql';

import LoadingIndicator from '../../../components/LoadingIndicator';
import ProfileCard from '../../../components/ProfileCard';
import ProfileSectionTitle from '../../../components/ProfileSectionTitle';
import SubTitle from '../../../components/SubTitle';
import Title from '../../../components/Title';
import ArrowDown from '../../../components/icons/ArrowDown';
import ArrowLeft from '../../../components/icons/ArrowLeft';

import {
  ShipModel,
  ShipMissionModel
} from '../../../type/interface/ship.model';

interface QueryResult {
  ship: ShipModel;
}

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

const ShipDetail: FC = () => {
  const router = useRouter();
  const { id } = router.query;

  const { loading, data } = useQuery<QueryResult>(GET_SHIP_DETAIL, {
    variables: { id }
  });

  console.log('id: ', id);

  const ship: ShipModel | undefined = useMemo(() => {
    if (data && data.ship) {
      return data.ship as ShipModel;
    }

    return undefined;
  }, [data]);

  if (loading || !ship) {
    return <LoadingIndicator heightClassName="h-20" widthClassName="w-20" />;
  }

  return (
    <div className="m-0 md:mx-auto md:mt-8 m-full min-w-[450px] md:max-w-2xl p-0 md:px-6 lg:max-w-7xl lg:px-8">
      <div className="lg:grid lg:auto-rows-min lg:grid-cols-12 lg:gap-x-8">
        <div className="relative lg:col-span-7 lg:col-start-1 lg:row-span-3 lg:row-start-1">
          <Link href={'/'} className="absolute top-5 left-6">
            <ArrowLeft className="cursor-pointer" />
          </Link>
          <img
            src={'https://i.imgur.com/MtEgYbY.jpg'}
            alt={'aa'}
            className="lg:col-span-2 lg:row-span-2 "
          />
        </div>
        <div className="mt-8 md:mt-0 lg:col-span-5">
          <div className="flex flex-col items-center p-[20px] bg-white rounded-b-xl md:rounded-xl shadow-md">
            <Title text={ship.name} />
            <span className=" text-theme-blue-300/50 text-[18px]">
              {ship.type}
            </span>
          </div>

          <div className="p-[23px] flex flex-col">
            <ProfileSectionTitle title="Basic info" />

            <div className="flex flex-col">
              {basicInfo.map(({ key, label }) => {
                const value = ship[key];

                return (
                  <ProfileCard
                    key={key}
                    label={label}
                    value={value}
                    suffix={key === 'weight_kg' ? 'kg' : ''}
                  />
                );
              })}
            </div>

            <ProfileSectionTitle title="Missions" className="mt-[55px]" />

            <div className="flex flex-col">
              {ship.missions.map(({ name, flight }) => {
                return (
                  <div key={name} className="flex flex-col mt-[15px]">
                    <SubTitle text={name} />
                    <span className="text-[14px]">{`Flight: ${flight}`}</span>
                  </div>
                );
              })}
            </div>

            <div className="mt-[155px]">
              <Link href={'/'} className=" flex flex-row items-center">
                <ArrowLeft className="cursor-pointer mr-5" />
                <h3 className="font-indie text-[18px] text-theme-blue-300">
                  Back to the list
                </h3>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShipDetail;
