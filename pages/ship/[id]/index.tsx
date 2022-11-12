import { FC } from 'react';

import { useRouter } from 'next/router';

const ShipDetail: FC = () => {
  const router = useRouter();
  const { id } = router.query;

  console.log('id: ', id);

  return <div>DETAIL</div>;
};

export default ShipDetail;
