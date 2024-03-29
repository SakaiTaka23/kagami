import React from 'react';

import { TextField, Typography } from '@mui/material';
import { Controller, useFormContext } from 'react-hook-form';

export const EmailInput = () => {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  return (
    <>
      <Controller
        control={control}
        defaultValue=''
        name='email'
        rules={{
          required: true,
          pattern: /^[a-zA-Z0-9_+-]+(.[a-zA-Z0-9_+-]+)*@([a-zA-Z0-9][a-zA-Z0-9-]*[a-zA-Z0-9]*\.)+[a-zA-Z]{2,}$/,
        }}
        render={({ field }) => <TextField {...field} margin='normal' placeholder='Email Address *' fullWidth />}
      />
      {errors.email && (
        <Typography color='error' variant='overline'>
          required and must be valid email
        </Typography>
      )}
    </>
  );
};
