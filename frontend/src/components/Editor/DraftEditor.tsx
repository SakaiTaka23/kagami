import { useState } from 'react';

import { Editor, EditorState } from 'draft-js';

type DraftEditorProps = {
  onChange: (value: EditorState) => void;
};

const DraftEditor: React.FC<DraftEditorProps> = ({ onChange }: DraftEditorProps) => {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());

  const onChangeEditor = (editor: EditorState) => {
    setEditorState(editor);
    onChange(editor);
  };

  return <Editor editorKey='editor' editorState={editorState} onChange={onChangeEditor} readOnly={false} />;
};

export default DraftEditor;
