import React, { FC } from 'react';

import { List } from '@mui/material';

import { Template } from './Template';

type Props = {
  templates: {
    id: string;
    content: string;
    createdAt: string;
    updatedAt: string;
    user: {
      accountName: string;
      userName: string;
    };
  }[];
};

export const Templates: FC<Props> = (props) => {
  return (
    <List sx={{ width: '100%', bgcolor: 'background.color' }}>
      {props.templates?.map((template, i) => {
        return <Template key={i} {...template} />;
      })}
    </List>
  );
};
