import { HashtagNode } from '@lexical/hashtag';
import type { EditorThemeClasses } from 'lexical';

const theme: EditorThemeClasses = {
  hashtag: 'editor-hashtag',
};

const editorConfig = {
  namespace: 'editor',
  onError(error: Error) {
    throw error;
  },
  theme,
  nodes: [HashtagNode],
};

export default editorConfig;
