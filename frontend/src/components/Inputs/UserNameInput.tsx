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

  const isUniqueUserName = async (userName: string) => {
    return UserUniqueQuery({
      variables: {
        userName,
      },
    }).then((res) => {
      return res.data?.userFromUserName?.id === undefined;
    });
  };

  const changeName = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    isUniqueUserName(e.target.value).then((isUnique) => {
      if (isUnique) {
        trigger('userName').then((isValid) => {
          if (isValid) {
            clearErrors('userName');
          }
        });
      } else {
        setError('userName', { message: 'This username is already used' });
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
          validate: async (v) => (await isUniqueUserName(v)) || 'This username is already used',
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
          {`${errors.userName.message}`}
        </Typography>
      )}
    </>
  );
};

export default UserNameInput;
