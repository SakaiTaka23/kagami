import React from 'react';

import dynamic from 'next/dynamic';

const Editor = dynamic(import('@/components/Editor/Editor'), { ssr: false });

const NewPost = () => {
  return (
    <>
      NewPost
      <Editor />
    </>
  );
};

export default NewPost;
