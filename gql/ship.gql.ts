import { gql } from '@apollo/client';

export const SHIP_FRAGMENT = gql`
  fragment ShipFragment on Ship {
    id
    name
    image
    type
  }
`;

export const GET_SHIP_LIST = gql`
  query shipsListQuery {
    ships {
      ...ShipFragment
    }
  }

  ${SHIP_FRAGMENT}
`;

export const GET_SHIP_DETAIL = gql`
  query shipDetailQuery($id: ID!) {
    ship(id: $id) {
      ...ShipFragment
      type
      weight_kg
      year_built
      class
      missions {
        flight
        name
      }
      home_port
    }
  }

  ${SHIP_FRAGMENT}
`;
