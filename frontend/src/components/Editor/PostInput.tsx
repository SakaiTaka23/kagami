import React, { ChangeEvent, useState } from 'react';

import { TextField, Typography } from '@mui/material';
import { Controller, useFormContext } from 'react-hook-form';

const PostInput = () => {
  const {
    control,
    formState: { errors },
  } = useFormContext();
  const [count, setCount] = useState(0);
  const maxLength = 140;

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCount(e.target.value.length);
  };

  return (
    <>
      <Controller
        control={control}
        defaultValue=''
        name='post'
        rules={{
          required: true,
          maxLength,
          onChange,
        }}
        render={({ field }) => (
          <TextField {...field} margin='normal' rows={5} placeholder='How Was Your Day Today?' fullWidth multiline />
        )}
      />
      <Typography color={count > maxLength ? 'error' : 'black'}>{count}</Typography>
      {errors.post && (
        <Typography color='error' variant='overline'>
          {`required must be less than ${maxLength} characters`}
        </Typography>
      )}
    </>
  );
};

export default PostInput;
