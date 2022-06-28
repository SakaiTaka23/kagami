import React, { FC } from 'react';

import { Typography } from '@mui/material';

type Props = {
  detail: string;
};

export const TemplateDetail: FC<Props> = ({ detail }) => {
  return (
    <Typography>
      {detail.split('\n').map((v, i) => {
        return <div key={i}>{v}</div>;
      })}
    </Typography>
  );
};
