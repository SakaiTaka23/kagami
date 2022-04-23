import React, { FC } from 'react';

import Post from './Post';

type Props = {
  posts: {
    id: string;
    content: string;
    user: {
      accountName: string;
      userName: string;
    };
  }[];
};

const Posts: FC<Props> = (props) => {
  return (
    <>
      {props.posts?.map((post, i) => {
        return <Post key={i} {...post} />;
      })}
    </>
  );
};

export default Posts;
