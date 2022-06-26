import React, { FC } from 'react';

import { Grid, Typography } from '@mui/material';

type Props = {
  count: number;
  maxLength: number;
};

const Counter: FC<Props> = ({ count, maxLength }) => {
  return (
    <Grid container justifyContent='flex-end'>
      <Typography color={count > maxLength ? 'error' : 'black'} variant='body1'>
        {count}
      </Typography>
    </Grid>
  );
};

export default Counter;
