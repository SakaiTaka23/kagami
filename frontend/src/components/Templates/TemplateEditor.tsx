import React, { ChangeEvent, FC, FormEvent, useState } from 'react';

import { Box } from '@mui/system';
import { $getRoot, EditorState } from 'lexical';

import { SubmitButton } from '../Button';
import { DetailInput, PostInput } from '../Inputs';
import { SubmitData } from './types';

type Props = {
  submit(data: SubmitData): void;
};

type PostState = {
  post: string;
  postCount: number;
};

type DetailState = {
  detail: string;
  detailCount: number;
};

const maxLength = 140;

export const TemplatesEditor: FC<Props> = ({ submit }) => {
  const [post, setPost] = useState<PostState>({
    post: '',
    postCount: 0,
  });
  const [detail, setDetail] = useState<DetailState>({
    detail: '',
    detailCount: 0,
  });

  const onChangePost = (editorState: EditorState) => {
    editorState.read(() => {
      const content = $getRoot()?.getTextContent();
      setPost({
        post: content,
        postCount: content.length,
      });
    });
  };

  const onChangeDetail = (e: ChangeEvent<HTMLInputElement>) => {
    const content = e.target.value;
    setDetail({
      detail: content,
      detailCount: content.length,
    });
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!(post.postCount > maxLength && detail.detailCount)) {
      submit({
        post: post.post,
        detail: detail.detail,
      });
    }
  };

  return (
    <Box component='form' onSubmit={onSubmit} sx={{ mt: 3 }}>
      <PostInput count={post.postCount} onChange={onChangePost} />
      <DetailInput count={detail.detailCount} detail={detail.detail} onChange={onChangeDetail} />
      <SubmitButton />
    </Box>
  );
};
