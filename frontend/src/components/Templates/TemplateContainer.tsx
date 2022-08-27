import { FC } from 'react';

import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';

type ContainerProps = {
  contents: {
    content: string;
  }[];
};

export const TemplateContainer: FC<ContainerProps> = ({ contents }) => {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow></TableRow>
        </TableHead>
        <TableBody>
          {contents.map((c, i) => {
            return (
              <TableRow key={i}>
                <TableCell>{c.content}</TableCell>
                <TableCell>Use This</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
