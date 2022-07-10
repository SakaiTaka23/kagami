import React, { FC } from 'react';

import { Typography } from '@mui/material';

type Props = {
  detail: string;
};

export const TemplateDetail: FC<Props> = ({ detail }) => {
  return (
    <>
      {detail.split('\n').map((v, i) => {
        return <Typography key={i}>{v}</Typography>;
      })}
    </>
  );
};
