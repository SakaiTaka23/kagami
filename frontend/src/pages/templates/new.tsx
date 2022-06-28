import React from 'react';

import { useRouter } from 'next/router';

import { SubmitData, TemplatesEditor } from '@/components/Templates';
import { useCreateTemplateMutation } from '@/graphql/generated';

const NewTemplate = () => {
  const router = useRouter();
  const [templateCreateMutation] = useCreateTemplateMutation();
  const submit = (data: SubmitData) => {
    templateCreateMutation({
      variables: {
        template: {
          content: data.post,
          detail: data.detail,
        },
      },
    }).then((res) => {
      router.replace(`${res.data?.createTemplate.id}`);
    });
  };
  return <TemplatesEditor submit={submit} />;
};

export default NewTemplate;
