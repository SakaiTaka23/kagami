import React, { useContext, useEffect } from 'react';

import { useRouter } from 'next/router';

import { Detail } from '@/components/Posts';
import { TemplateDetail, TemplateEdit, TemplateLike, TemplateUse } from '@/components/Templates';
import { AuthContext } from '@/firebase/authContext';
import { useTemplateDetailQuery } from '@/graphql/generated';

const TemplateDetailPage = () => {
  const { userID } = useContext(AuthContext);
  const router = useRouter();
  const { id } = router.query;
  const { data, loading, error } = useTemplateDetailQuery({
    skip: !router.isReady,
    variables: {
      templateDetailId: String(id),
    },
  });

  const useTemplate = () => {
    router.replace(`/new?template=${id}`);
  };

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
      {userID && <TemplateUse useTemplate={useTemplate} />}
      {userID && <TemplateLike id={String(id)} />}
      {data?.templateDetail?.userId === userID && <TemplateEdit id={String(id)} />}
      {data?.templateDetail && <Detail {...data.templateDetail} />}
      {data?.templateDetail?.detail && <TemplateDetail detail={data.templateDetail.detail} />}
    </>
  );
};

export default TemplateDetailPage;
