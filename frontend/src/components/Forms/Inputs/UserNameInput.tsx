import React from 'react';

import { TextField, Typography } from '@mui/material';
import { Controller, useFormContext } from 'react-hook-form';

const UserNameInput = () => {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  return (
    <>
      <Controller
        control={control}
        defaultValue=''
        name='userName'
        rules={{
          required: true,
          pattern: /^[0-9a-zA-Z_]{1,15}$/,
        }}
        render={({ field }) => <TextField {...field} margin='normal' placeholder='User Name *' fullWidth />}
      />
      {errors.userName && (
        <Typography color='error' variant='overline'>
          {`required and must be 1 to 16 long \n only number alphabet and underscores`}
        </Typography>
      )}
    </>
  );
};

export default UserNameInput;
