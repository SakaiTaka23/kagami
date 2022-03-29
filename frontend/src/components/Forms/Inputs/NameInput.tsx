import React from 'react';

import { TextField, Typography } from '@mui/material';
import { Controller, useFormContext } from 'react-hook-form';

const NameInput = () => {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  return (
    <>
      <Controller
        control={control}
        defaultValue=''
        name='name'
        rules={{
          required: true,
          minLength: 4,
          maxLength: 16,
        }}
        render={({ field }) => <TextField {...field} margin='normal' placeholder='Name *' fullWidth />}
      />
      {errors.name && (
        <Typography color='error' variant='overline'>
          required and must be 4 to 16 long
        </Typography>
      )}
    </>
  );
};

export default NameInput;
