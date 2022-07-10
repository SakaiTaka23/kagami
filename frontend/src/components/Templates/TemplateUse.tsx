import React, { FC } from 'react';

import { Button } from '@mui/material';

type Props = {
  useTemplate: () => void;
};

export const TemplateUse: FC<Props> = ({ useTemplate }) => {
  return <Button onClick={useTemplate}>Use This Template</Button>;
};
