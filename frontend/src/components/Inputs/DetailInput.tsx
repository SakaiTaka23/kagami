import React, { ChangeEvent, FC } from 'react';

import { TextField } from '@mui/material';

import Counter from './assets/Counter';

type Props = {
  count: number;
  detail: string;
  onChange(e: ChangeEvent<HTMLInputElement>): void;
};

const maxLength = 140;

export const DetailInput: FC<Props> = ({ count, detail, onChange }) => {
  return (
    <>
      <TextField
        value={detail}
        rows={5}
        placeholder='Details of your template'
        onChange={onChange}
        fullWidth
        multiline
      />
      <Counter count={count} maxLength={maxLength} />
    </>
  );
};
