import { gql } from '@apollo/client';

export const GET_SHIP_LIST = gql`
  query shipsQuery {
    ships {
      id
      name
      image
      type
    }
  }
`;
