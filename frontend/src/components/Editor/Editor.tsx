import { FC, FormEvent, useState } from 'react';

import { LexicalComposer } from '@lexical/react/LexicalComposer';
import { Box } from '@mui/system';
import { $getRoot, EditorState } from 'lexical';

import SubmitButton from '../Button/SubmitButton';
import editorConfig from './config/editorConfig';
import Counter from './Counter';
import PostInput from './PostInput';
import { SubmitData } from './types';

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
      <LexicalComposer initialConfig={editorConfig}>
        <PostInput onChange={onChange} />
        <Counter count={count} maxLength={maxLength} />
      </LexicalComposer>
      <SubmitButton />
    </Box>
  );
};

export default Editor;
