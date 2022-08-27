import { FC } from 'react';

import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import { useRouter } from 'next/router';

type ContainerProps = {
  contents: {
    id: string;
    content: string;
  }[];
};

export const TemplateContainer: FC<ContainerProps> = ({ contents }) => {
  const router = useRouter();
  const redirectTemplate = (id: string) => {
    router.replace(`/new?template=${id}`);
  };

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
                <TableCell onClick={() => redirectTemplate(c.id)}>Use This</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
