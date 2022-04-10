import React, { useEffect } from 'react';

import { useRouter } from 'next/router';

import Detail from '@/components/Posts/Detail';
import { usePostDetailQuery } from '@/graphql/generated';

const PostDetail = () => {
  const router = useRouter();
  const { id, username } = router.query;
  const { data, loading, error } = usePostDetailQuery({
    skip: !router.isReady,
    variables: {
      postDetailId: String(id),
      userName: String(username),
    },
  });

  useEffect(() => {
    if (loading === false && data?.postDetail === null) {
      router.replace('/404');
    }
  }, [loading, data, router]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return <>{data?.postDetail && <Detail {...data.postDetail} />}</>;
};

export default PostDetail;
