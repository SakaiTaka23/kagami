import React from 'react';

import { Typography } from '@mui/material';
import { useRouter } from 'next/router';

import Posts from '@/components/Posts/Posts';
import { usePostsFromTagQuery } from '@/graphql/generated';

const HashTagPage = () => {
  const router = useRouter();
  const { hashtag } = router.query;
  const { data, loading, error } = usePostsFromTagQuery({
    skip: !router.isReady,
    variables: {
      take: 20,
      tag: String(hashtag),
    },
  });

  if (loading) return <p>Loading...</p>;
  if (error || data?.postsFromTag === null) {
    router.replace('/404');
  }

  return (
    <>
      <Typography variant='h6'>{`HashTag: ${hashtag}`}</Typography>
      {data?.postsFromTag && <Posts posts={data.postsFromTag} />}
    </>
  );
};

export default HashTagPage;
