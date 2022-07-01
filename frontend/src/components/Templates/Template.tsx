import React, { FC } from 'react';

import { Grid, ListItem, ListItemText, Typography } from '@mui/material';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import Link from 'next/link';

type Props = {
  id: string;
  content: string;
  createdAt: string;
  updatedAt: string;
  user: {
    accountName: string;
    userName: string;
  };
};

export const Template: FC<Props> = (template) => {
  dayjs.extend(relativeTime);

  const { accountName, userName } = template.user;
  return (
    <ListItem>
      <ListItemText
        primary={
          <Link href={`/${userName}`} passHref>
            <Grid container>
              <Typography component='span' variant='subtitle1' sx={{ fontWeight: 'bold' }}>
                {`${accountName} `}
              </Typography>
              <Typography component='span' variant='subtitle1' color='gray'>{`@${userName}`}</Typography>
            </Grid>
          </Link>
        }
        secondary={
          <Link href={`/templates/${template.id}`} passHref>
            <Typography component='span'>{template.content}</Typography>
          </Link>
        }
      />
    </ListItem>
  );
};
