import React, { ChangeEvent, useState } from 'react';

import { TextField, Typography } from '@mui/material';
import { Controller, useFormContext } from 'react-hook-form';

export const ProfileInput = () => {
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
        name='profile'
        rules={{
          required: true,
          maxLength,
          onChange,
        }}
        render={({ field }) => (
          <TextField {...field} margin='normal' rows={5} placeholder='Profile *' fullWidth multiline />
        )}
      />
      <Typography color={count > maxLength ? 'error' : 'black'}>{count}</Typography>
      {errors.profile && (
        <Typography color='error' variant='overline'>
          {`required and must be less than ${maxLength} characters`}
        </Typography>
      )}
    </>
  );
};
