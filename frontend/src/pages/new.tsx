import React from 'react';

import { useRouter } from 'next/router';

import { PostEditor, SubmitData } from '@/components/PostEditor';
import { usePostCreateMutation, useTemplateUseQuery } from '@/graphql/generated';

const NewPost = () => {
  const router = useRouter();
  const [postCreateMutation] = usePostCreateMutation();
  const { data, loading } = useTemplateUseQuery({
    skip: !router.isReady,
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

  if (loading) return <p>Loading...</p>;

  return <PostEditor content={data?.templateDetail?.content} submit={submit} />;
};

export default NewPost;
