import { FC } from 'react';

import apolloClient from '../config/apollo-client.config';

import { GET_SHIP_LIST } from '../gql/ship.gql';

import ShipCard from '../components/ShipCard';
import Title from '../components/Title';

import { ShipModel } from '../type/interface/ship.model';

interface HomeProps {
  ships?: ShipModel[];
}

export async function getServerSideProps() {
  const { data, loading } = await apolloClient.query({
    query: GET_SHIP_LIST
  });

  return {
    props: {
      loading,
      ships: data.ships
    }
  };
}

const Home: FC<HomeProps> = ({ ships = [] }) => (
  <div className="flex flex-col my-4 mx-8">
    <Title text="Collections" />
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
  </div>
);

export default Home;
