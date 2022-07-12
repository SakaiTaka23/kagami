import React, { useEffect } from 'react';

import { useRouter } from 'next/router';

import { SubmitData, TemplatesEditor } from '@/components/Templates';
import { useTemplateEditQuery } from '@/graphql/generated';

const EditTemplate = () => {
  const router = useRouter();
  const { id } = router.query;
  const { data, loading, error } = useTemplateEditQuery({
    skip: !router.query,
    variables: {
      templateEditId: String(id),
    },
  });

  const submit = (newData: SubmitData) => {
    console.log(newData);
  };

  useEffect(() => {
    if (loading === false && data?.templateEdit === null) {
      router.replace('/404');
    }
  }, [loading, data, router]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <TemplatesEditor
      submit={submit}
      detailDefault={data?.templateEdit.detail}
      postDefault={data?.templateEdit.content}
    />
  );
};

export default EditTemplate;
