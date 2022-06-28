import React from 'react';

import { useRouter } from 'next/router';

import { PostEditor, SubmitData } from '@/components/PostEditor';
import { usePostCreateMutation } from '@/graphql/generated';

const NewPost = () => {
  const router = useRouter();
  const [postCreateMutation] = usePostCreateMutation();
  const submit = (data: SubmitData) => {
    postCreateMutation({
      variables: {
        content: data.post,
      },
    }).then((res) => {
      router.replace(`${res.data?.postCreate.user.userName}/${res.data?.postCreate.id}`);
    });
  };

  return <PostEditor submit={submit} />;
};

export default NewPost;
