import React from 'react';

import { TextField, Typography } from '@mui/material';
import { Controller, useFormContext } from 'react-hook-form';

const PostInput = () => {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  return (
    <>
      <Controller
        control={control}
        defaultValue=''
        name='post'
        rules={{
          required: true,
        }}
        render={({ field }) => (
          <TextField {...field} margin='normal' rows={5} placeholder='How Was Your Day Today?' fullWidth multiline />
        )}
      />
      {errors.post && (
        <Typography color='error' variant='overline'>
          {`required`}
        </Typography>
      )}
    </>
  );
};

export default PostInput;
