import { Container, CssBaseline } from '@mui/material';
import { Box } from '@mui/system';
import { FormProvider, useForm } from 'react-hook-form';

import SubmitButton from '../Forms/Button/SubmitButton';
import PostInput from './PostInput';

type SubmitData = {
  post: string;
};

const Editor = () => {
  const methods = useForm({
    defaultValues: {
      post: '',
    },
  });

  const submit = (data: SubmitData) => {
    console.log(data);
  };

  return (
    <Container component='main' maxWidth='xs'>
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <FormProvider {...methods}>
          <Box component='form' onSubmit={methods.handleSubmit(submit)} sx={{ mt: 3 }}>
            <PostInput />
            <SubmitButton />
          </Box>
        </FormProvider>
      </Box>
    </Container>
  );
};

export default Editor;
