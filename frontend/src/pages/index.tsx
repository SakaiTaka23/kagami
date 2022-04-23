import type { NextPage } from 'next';

import Posts from '@/components/Posts/Posts';
import { useTimeLineQuery } from '@/graphql/generated';

const Home: NextPage = () => {
  const { data, loading, error } = useTimeLineQuery({
    variables: {
      take: 20,
    },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return <div>{data && <Posts posts={data.timeline} />}</div>;
};

export default Home;
