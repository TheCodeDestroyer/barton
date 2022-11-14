import { FC, useMemo } from 'react';

import { useQuery } from '@apollo/client';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { GET_SHIP_DETAIL } from '../../../gql/ship.gql';

import ShipBasicInfo from '../../../components/ShipBasicInfo';
import ShipMissions from '../../../components/ShipMissions';
import LoadingIndicator from '../../../components/common/LoadingIndicator';
import Picture from '../../../components/common/Picture';
import Title from '../../../components/common/Title';
import ArrowLeftIcon from '../../../components/icons/ArrowLeftIcon';

import { ShipModel } from '../../../type/interface/ship.model';

interface QueryResult {
  ship: ShipModel;
}

const ShipDetail: FC = () => {
  const router = useRouter();
  const { id } = router.query;

  const { loading, data } = useQuery<QueryResult>(GET_SHIP_DETAIL, {
    variables: { id }
  });

  const ship: ShipModel | undefined = useMemo(() => {
    if (data && data.ship) {
      return data.ship as ShipModel;
    }

    return undefined;
  }, [data]);

  if (loading || !ship) {
    return (
      <div className="flex">
        <LoadingIndicator />
      </div>
    );
  }

  return (
    <div className="m-0 md:mx-auto md:mt-8 w-full md:max-w-2xl p-0 md:px-6 lg:max-w-7xl lg:px-8">
      <div className="lg:grid lg:auto-rows-min lg:grid-cols-12 lg:gap-x-8">
        <div className="relative lg:col-span-7 lg:col-start-1 lg:row-span-3 lg:row-start-1">
          <Link href={'/'} className="absolute top-5 left-6">
            <ArrowLeftIcon className="cursor-pointer" />
          </Link>
          <Picture
            src={ship.image}
            alt={ship.name}
            className="lg:col-span-2 lg:row-span-2"
          />
        </div>
        <div className="mt-8 md:mt-0 lg:col-span-5">
          <div className="flex flex-col items-center p-[20px] bg-white rounded-b-xl md:rounded-xl shadow-md">
            <Title text={ship.name} />
            <span className=" text-theme-blue-300/50 text-[18px]">
              {ship.type}
            </span>
          </div>

          <div className="flex flex-col p-[20px]">
            <ShipBasicInfo ship={ship} />

            <ShipMissions missions={ship.missions} />
          </div>
        </div>
      </div>
      <div className="mt-[155px] pb-[173px]">
        <div className="p-[20px]">
          <Link href={'/'} className="flex flex-row items-center">
            <ArrowLeftIcon className="cursor-pointer mr-5" />
            <h3 className="font-indie text-[18px] text-theme-blue-300">
              Back to the list
            </h3>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ShipDetail;
