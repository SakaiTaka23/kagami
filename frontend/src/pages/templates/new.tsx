import React from 'react';

import { useRouter } from 'next/router';

import { SubmitData, TemplatesEditor } from '@/components/Templates';
import { useCreateTemplateMutation, useTemplateCountQuery } from '@/graphql/generated';

const NewTemplate = () => {
  const router = useRouter();
  const { data, loading } = useTemplateCountQuery();
  const [templateCreateMutation] = useCreateTemplateMutation();

  if (loading) return <p>Loading...</p>;

  const submit = (submitData: SubmitData) => {
    templateCreateMutation({
      variables: {
        template: {
          content: submitData.post,
          detail: submitData.detail,
        },
      },
    }).then((res) => {
      router.replace(`${res.data?.createTemplate.id}`);
    });
  };
  return <>{data && data.templateCount > 10 ? '' : <TemplatesEditor submit={submit} />}</>;
};

export default NewTemplate;
