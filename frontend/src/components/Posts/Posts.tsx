import React, { VFC } from 'react';

import Post from './Post';

type Props = {
  timeline: {
    content: string;
    user: {
      name: string;
    };
  }[];
};

const Posts: VFC<Props> = (props) => {
  return (
    <>
      {props.timeline?.map((post, i) => {
        return <Post key={i} {...post} />;
      })}
    </>
  );
};

export default Posts;
