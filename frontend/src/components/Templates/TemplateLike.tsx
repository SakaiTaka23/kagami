import React, { FC } from 'react';

import { Button } from '@mui/material';

import { useLikeTemplateToggleMutation } from '@/graphql/generated';

type Props = {
  id: string;
};

export const TemplateLike: FC<Props> = ({ id }) => {
  const [toggle] = useLikeTemplateToggleMutation({
    variables: {
      likeTemplateToggleId: id,
    },
  });
  return <Button onClick={() => toggle()}>Like This Template</Button>;
};
