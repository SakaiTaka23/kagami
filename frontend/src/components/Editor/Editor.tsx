import { FC, FormEvent, useState } from 'react';

import { LexicalComposer } from '@lexical/react/LexicalComposer';
import { Box } from '@mui/system';
import { $getRoot, EditorState } from 'lexical';

import SubmitButton from '../Button/SubmitButton';
import editorConfig from './config/editorConfig';
import PostInput from './PostInput';
import { SubmitData } from './types';

type Props = {
  submit(data: SubmitData): void;
};

const Editor: FC<Props> = ({ submit }) => {
  const [elements, setElements] = useState<string>('');

  const onChange = (editorState: EditorState) => {
    editorState.read(() => {
      setElements($getRoot()?.getTextContent());
    });
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    submit({
      post: elements,
    });
  };

  return (
    <LexicalComposer initialConfig={editorConfig}>
      <Box component='form' onSubmit={onSubmit} sx={{ mt: 3 }}>
        <PostInput onChange={onChange} />
        <SubmitButton />
      </Box>
    </LexicalComposer>
  );
};

export default Editor;
