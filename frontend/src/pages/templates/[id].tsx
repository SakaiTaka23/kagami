import React, { useEffect } from 'react';

import { useRouter } from 'next/router';

import { Detail } from '@/components/Posts';
import { TemplateDetail } from '@/components/Templates/TemplateDetail';
import { useTemplateDetailQuery } from '@/graphql/generated';

const TemplateDetailPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const { data, loading, error } = useTemplateDetailQuery({
    skip: !router.isReady,
    variables: {
      templateDetailId: String(id),
    },
  });

  useEffect(() => {
    if (loading === false && data?.templateDetail === null) {
      router.replace('/404');
    }
  }, [loading, data, router]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <>
      <div>TemplateDetail</div>
      {data?.templateDetail && <Detail {...data.templateDetail} />}
      {data?.templateDetail?.detail && <TemplateDetail detail={data.templateDetail.detail} />}
    </>
  );
};

export default TemplateDetailPage;
