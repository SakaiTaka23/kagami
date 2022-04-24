import { convertToRaw, ContentState } from 'draft-js';
import { useForm, Controller } from 'react-hook-form';

import DraftEditor from './DraftEditor';

const styles = {
  editor: {
    border: '1px solid #ddd',
    cursor: 'text',
    fontSize: 16,
    minHeight: 40,
    padding: 10,
  },
};

const Editor: React.FC = () => {
  const { control, handleSubmit } = useForm();

  const onSubmit = async (data: any) => {
    const contentState: ContentState = data.body.getCurrentContent();
    console.log(JSON.stringify(convertToRaw(contentState)));
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div style={styles.editor}>
          <Controller
            name='body'
            control={control}
            render={({ field: { onChange } }) => {
              return <DraftEditor onChange={onChange} />;
            }}
          />
        </div>
        <button type='submit'>submit</button>
      </form>
    </>
  );
};

export default Editor;
