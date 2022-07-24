import React, { useEffect, useState } from 'react';

import { useRouter } from 'next/router';

import { PostEditor, SubmitData } from '@/components/PostEditor';
import { TemplateSelector } from '@/components/Templates';
import { usePostCreateMutation, useTemplateUseLazyQuery } from '@/graphql/generated';

const NewPost = () => {
  const router = useRouter();
  const [templateId, setTemplateId] = useState<string | undefined>('');
  const [postCreateMutation] = usePostCreateMutation();
  const [getTemplate, { data, loading }] = useTemplateUseLazyQuery({
    variables: {
      templateDetailId: String(router.query?.template),
    },
  });

  const submit = (submitData: SubmitData) => {
    postCreateMutation({
      variables: {
        content: submitData.post,
      },
    }).then((res) => {
      router.replace(`${res.data?.postCreate.user.userName}/${res.data?.postCreate.id}`);
    });
  };

  useEffect(() => {
    if (router.isReady) {
      setTemplateId(String(router.query?.template));
    }
    if (templateId !== 'undefined') {
      console.log(`get template`);
      getTemplate();
    }
  }, [router, templateId, getTemplate]);

  if (loading) return <p>Loading...</p>;

  console.log(data?.templateDetail?.content);

  return (
    <>
      {templateId === 'undefined' ? (
        <TemplateSelector />
      ) : (
        <PostEditor content={data?.templateDetail?.content} submit={submit} />
      )}
    </>
  );
};

export default NewPost;
