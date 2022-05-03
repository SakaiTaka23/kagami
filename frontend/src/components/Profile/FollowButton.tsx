import React, { FC, useContext, useState } from 'react';

import { Button, Modal } from '@mui/material';
import { Box } from '@mui/system';
import { useRouter } from 'next/router';

import { AuthContext } from '@/firebase/authContext';
import { useFollowToggleMutation } from '@/graphql/generated';

type Props = {
  isFollowing: boolean;
  userName: string;
};

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const FollowButton: FC<Props> = ({ isFollowing, userName }) => {
  const { userID } = useContext(AuthContext);
  const router = useRouter();
  const [followToggleMutation] = useFollowToggleMutation();
  const [following, setFollowing] = useState(isFollowing);
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleFollow = () => {
    if (userID === '') {
      router.push('/signin');
      return;
    }
    setFollowing(!following);
    setOpen(false);
    followToggleMutation({
      variables: {
        userName,
      },
    });
  };

  return (
    <>
      <Button onClick={following ? handleOpen : handleFollow}>{following ? 'Following' : 'Follow'}</Button>
      <Modal open={open} onClose={handleClose}>
        <Box sx={style}>
          <Button onClick={handleFollow}>Un Follow</Button>
        </Box>
      </Modal>
    </>
  );
};

export default FollowButton;
