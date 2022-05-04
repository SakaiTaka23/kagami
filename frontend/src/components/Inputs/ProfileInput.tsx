import React from 'react';

import { TextField, Typography } from '@mui/material';
import { Controller, useFormContext } from 'react-hook-form';

const ProfileInput = () => {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  return (
    <>
      <Controller
        control={control}
        defaultValue=''
        name='profile'
        rules={{
          required: true,
          minLength: 1,
          maxLength: 140,
        }}
        render={({ field }) => <TextField {...field} margin='normal' placeholder='Profile *' fullWidth />}
      />
      {errors.profile && (
        <Typography color='error' variant='overline'>
          required and must be less than 140 words
        </Typography>
      )}
    </>
  );
};

export default ProfileInput;
