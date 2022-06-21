import React, { FC } from 'react';

import { ContentEditable } from '@lexical/react/LexicalContentEditable';
import { HashtagPlugin } from '@lexical/react/LexicalHashtagPlugin';
import { OnChangePlugin } from '@lexical/react/LexicalOnChangePlugin';
import { PlainTextPlugin } from '@lexical/react/LexicalPlainTextPlugin';
import { EditorState } from 'lexical';

type Props = {
  onChange: (editorState: EditorState) => void;
};

const PostInput: FC<Props> = ({ onChange }) => {
  return (
    <div className='editor-container'>
      <PlainTextPlugin
        contentEditable={<ContentEditable className='editor-input' />}
        placeholder={<div className='editor-placeholder'>Enter some plain text...</div>}
      />
      <OnChangePlugin ignoreSelectionChange={true} onChange={onChange} />
      <HashtagPlugin />
    </div>
  );
};

export default PostInput;
