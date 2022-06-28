import React from 'react';

import { SubmitData, TemplatesEditor } from '@/components/Templates';
import { useCreateTemplateMutation } from '@/graphql/generated';

const NewTemplate = () => {
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
      console.log(res.data?.createTemplate?.id);
    });
  };
  return <TemplatesEditor submit={submit} />;
};

export default NewTemplate;
