import React, { useEffect } from 'react';

import { Typography } from '@mui/material';
import { useRouter } from 'next/router';

import { SubmitData, TemplatesEditor } from '@/components/Templates';
import { useTemplateEditQuery, useUpdateTemplateMutation } from '@/graphql/generated';

const EditTemplate = () => {
  const router = useRouter();
  const { id } = router.query;
  const { data, loading, error } = useTemplateEditQuery({
    skip: !router.query,
    variables: {
      templateEditId: String(id),
    },
  });

  const [update] = useUpdateTemplateMutation();

  const submit = (newData: SubmitData) => {
    update({
      variables: {
        updateTemplateId: String(id),
        content: newData.post,
        detail: newData.detail,
      },
    }).then((res) => {
      router.replace(`/templates/${res.data?.updateTemplate}`);
    });
  };

  useEffect(() => {
    if (loading === false && data?.templateEdit === null) {
      router.replace('/404');
    }
  }, [loading, data, router]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <>
      <Typography variant='h2'>Edit Template</Typography>
      <TemplatesEditor
        submit={submit}
        detailDefault={data?.templateEdit.detail}
        postDefault={data?.templateEdit.content}
      />
    </>
  );
};

export default EditTemplate;
