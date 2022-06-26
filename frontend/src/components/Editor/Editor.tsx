import { FC, FormEvent, useState } from 'react';

import { Box } from '@mui/system';
import { $getRoot, EditorState } from 'lexical';

import SubmitButton from '../Button/SubmitButton';
import PostInput from '../Inputs/PostInput';

type SubmitData = {
  post: string;
};

type Props = {
  submit(data: SubmitData): void;
};
const maxLength = 140;

const Editor: FC<Props> = ({ submit }) => {
  const [elements, setElements] = useState<string>('');
  const [count, setCount] = useState(0);

  const onChange = (editorState: EditorState) => {
    editorState.read(() => {
      const content = $getRoot()?.getTextContent();
      setElements($getRoot()?.getTextContent());
      setCount(content.length);
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
      <PostInput count={count} onChange={onChange} />
      <SubmitButton />
    </Box>
  );
};

export default Editor;
