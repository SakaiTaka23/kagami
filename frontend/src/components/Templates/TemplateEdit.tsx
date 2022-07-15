import React, { FC } from 'react';

import { Button } from '@mui/material';
import { useRouter } from 'next/router';

type Props = {
  id: string;
};

export const TemplateEdit: FC<Props> = ({ id }) => {
  const router = useRouter();
  const editPage = () => {
    router.replace(`/templates/${id}/edit`);
  };
  return <Button onClick={() => editPage()}>Edit This Template</Button>;
};
