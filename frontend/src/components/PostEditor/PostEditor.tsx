import { FC, FormEvent, useState } from 'react';

import { Box } from '@mui/system';
import { $getRoot, EditorState } from 'lexical';

import { SubmitButton } from '../Button';
import { PostInput } from '../Inputs';
import { SubmitData } from './types';

type Props = {
  content?: string;
  submit(data: SubmitData): void;
};
const maxLength = 140;

export const PostEditor: FC<Props> = ({ content, submit }) => {
  const [elements, setElements] = useState<string>(content ?? '');
  const [count, setCount] = useState(content?.length ?? 0);

  const onChange = (editorState: EditorState) => {
    editorState.read(() => {
      const text = $getRoot()?.getTextContent();
      setElements($getRoot()?.getTextContent());
      setCount(text.length);
    });
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!(count > maxLength)) {
      submit({
        post: elements,
      });
    }
  };

  return (
    <Box component='form' onSubmit={onSubmit} sx={{ mt: 3 }}>
      <PostInput content={content} count={count} onChange={onChange} />
      <SubmitButton />
    </Box>
  );
};
