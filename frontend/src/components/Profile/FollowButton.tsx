import React, { useState } from 'react';

import { Button, Modal } from '@mui/material';
import { Box } from '@mui/system';

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

const FollowButton = () => {
  const [following, setFollowing] = useState(false);
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleFollow = () => {
    setFollowing(!following);
    setOpen(false);
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
