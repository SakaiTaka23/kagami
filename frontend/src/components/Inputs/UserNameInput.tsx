import React, { ChangeEvent } from 'react';

import { TextField, Typography } from '@mui/material';
import { Controller, useFormContext } from 'react-hook-form';

import { useUserUniqueLazyQuery } from '@/graphql/generated';

const UserNameInput = () => {
  const [UserUniqueQuery] = useUserUniqueLazyQuery();
  const {
    control,
    clearErrors,
    setError,
    trigger,
    formState: { errors },
  } = useFormContext();

  const changeName = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    UserUniqueQuery({
      variables: {
        userName: e.target.value,
      },
    }).then((res) => {
      if (res.data?.userFromUserName?.id !== undefined) {
        setError('userName', { message: 'This username is already used' });
      } else {
        trigger('userName').then((isValid) => {
          if (isValid) {
            clearErrors('userName');
          }
        });
      }
    });
  };

  return (
    <>
      <Controller
        control={control}
        defaultValue=''
        name='userName'
        rules={{
          required: 'required and must be 1 to 16 long \n only number alphabet and underscores',
          pattern: {
            value: /^[0-9a-zA-Z_]{1,15}$/,
            message: 'required and must be 1 to 16 long \n only number alphabet and underscores',
          },
        }}
        render={({ field }) => (
          <TextField
            {...field}
            onChange={(e) => {
              field.onChange(e);
              changeName(e);
            }}
            margin='normal'
            placeholder='User Name *'
            fullWidth
          />
        )}
      />
      {errors.userName && (
        <Typography color='error' variant='overline'>
          {errors.userName.message}
        </Typography>
      )}
    </>
  );
};

export default UserNameInput;
