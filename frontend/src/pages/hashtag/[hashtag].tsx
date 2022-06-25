import React from 'react';

import { useRouter } from 'next/router';

const HashTagPage = () => {
  const router = useRouter();
  const { hashtag } = router.query;
  return <h1>{`HashTag: ${hashtag}`}</h1>;
};

export default HashTagPage;
