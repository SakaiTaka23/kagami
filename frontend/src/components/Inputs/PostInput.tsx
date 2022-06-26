import React, { FC } from 'react';

import { LexicalComposer } from '@lexical/react/LexicalComposer';
import { ContentEditable } from '@lexical/react/LexicalContentEditable';
import { HashtagPlugin } from '@lexical/react/LexicalHashtagPlugin';
import { OnChangePlugin } from '@lexical/react/LexicalOnChangePlugin';
import { PlainTextPlugin } from '@lexical/react/LexicalPlainTextPlugin';
import { EditorState } from 'lexical';

import Counter from './assets/Counter';
import editorConfig from './config/editorConfig';

type Props = {
  count: number;
  onChange: (editorState: EditorState) => void;
};

const maxLength = 140;

const PostInput: FC<Props> = ({ count, onChange }) => {
  return (
    <LexicalComposer initialConfig={editorConfig}>
      <div className='editor-container'>
        <PlainTextPlugin
          contentEditable={<ContentEditable className='editor-input' />}
          placeholder={<div className='editor-placeholder'>Enter some plain text...</div>}
        />
        <OnChangePlugin ignoreSelectionChange={true} onChange={onChange} />
        <HashtagPlugin />
      </div>
      <Counter count={count} maxLength={maxLength} />
    </LexicalComposer>
  );
};

export default PostInput;
