import { FC } from 'react';

import { Box } from '@mui/system';
import { FormProvider, useForm } from 'react-hook-form';

import SubmitButton from '../Button/SubmitButton';
import PostInput from './PostInput';
import { SubmitData } from './types';

type Props = {
  submit(data: SubmitData): void;
};

const Editor: FC<Props> = ({ submit }) => {
  const methods = useForm({
    defaultValues: {
      post: '',
    },
  });

  return (
    <>
      <FormProvider {...methods}>
        <Box component='form' onSubmit={methods.handleSubmit(submit)} sx={{ mt: 3 }}>
          <PostInput />
          <SubmitButton />
        </Box>
      </FormProvider>
    </>
  );
};

export default Editor;
