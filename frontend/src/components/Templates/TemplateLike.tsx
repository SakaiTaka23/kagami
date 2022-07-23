import React, { FC, useState } from 'react';

import { Button } from '@mui/material';

import { useLikeTemplateToggleMutation } from '@/graphql/generated';

type Props = {
  id: string;
  isLikedDefault: boolean;
};

export const TemplateLike: FC<Props> = ({ id, isLikedDefault }) => {
  const [isLiked, setIsLiked] = useState(isLikedDefault);
  const [toggle] = useLikeTemplateToggleMutation({
    variables: {
      likeTemplateToggleId: id,
    },
  });
  const handleClick = () => {
    toggle();
    setIsLiked(!isLiked);
  };
  return <Button onClick={() => handleClick()}>{isLiked ? `UnLike This Template` : `Like This Template`}</Button>;
};
