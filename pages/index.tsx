import { FC, useMemo } from 'react';

import { useQuery } from '@apollo/client';

import { GET_SHIP_LIST } from '../gql/ship.gql';

import ShipList from '../components/ShipList';
import LoadingIndicator from '../components/common/LoadingIndicator';
import Title from '../components/common/Title';

import { ShipBaseModel } from '../type/interface/ship.model';

interface QueryResult {
  ships: ShipBaseModel[];
}

interface HomeProps {
  ships?: ShipBaseModel[];
}

const Home: FC<HomeProps> = () => {
  const { data, loading } = useQuery<QueryResult>(GET_SHIP_LIST);

  const ships = useMemo<ShipBaseModel[]>(() => {
    if (!data || !data.ships) {
      return [];
    }

    return data.ships;
  }, [data]);

  return (
    <div className="flex flex-col container mt-8 pb-20 mx-auto px-4 sm:px-6 lg:px-8">
      <Title text="Collections" />
      {loading && <LoadingIndicator marginTopClassName="mt-24" />}
      {!loading && <ShipList ships={ships} />}
    </div>
  );
};

export default Home;
