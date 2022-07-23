import React, { FC, SyntheticEvent, useState } from 'react';

import DynamicFeedIcon from '@mui/icons-material/DynamicFeed';
import NoteAltIcon from '@mui/icons-material/NoteAlt';
import { TabContext, TabPanel } from '@mui/lab';
import { Box, Tab, Tabs } from '@mui/material';

import { Posts } from '../Posts';
import { Templates } from '../Templates';

type Props = {
  posts: {
    id: string;
    content: string;
    createdAt: string;
    user: {
      accountName: string;
      userName: string;
    };
  }[];
  templates: {
    id: string;
    content: string;
    createdAt: string;
    updatedAt: string;
    user: {
      accountName: string;
      userName: string;
    };
  }[];
  likeList: {
    id: string;
    content: string;
    createdAt: string;
    updatedAt: string;
    user: {
      accountName: string;
      userName: string;
    };
  }[];
};

const tabs = { POSTS: 'posts', TEMPLATES: 'templates', LIKES: 'likes' } as const;
type TabKeys = keyof typeof tabs;

export const ProfileTabs: FC<Props> = ({ posts, templates, likeList }) => {
  const [value, setValue] = useState<string>(tabs.POSTS);

  const handleChange = (e: SyntheticEvent, newValue: TabKeys) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs value={value} onChange={handleChange} textColor='secondary' indicatorColor='secondary'>
            <Tab icon={<DynamicFeedIcon />} iconPosition='start' value={tabs.POSTS} label='Posts' />
            <Tab icon={<NoteAltIcon />} iconPosition='start' value={tabs.TEMPLATES} label='Templates' />
            <Tab value={tabs.LIKES} label='Likes' />
          </Tabs>
        </Box>
        <TabPanel value={tabs.POSTS}>
          <Posts posts={posts} />
        </TabPanel>
        <TabPanel value={tabs.TEMPLATES}>
          <Templates templates={templates} />
        </TabPanel>
        <TabPanel value={tabs.LIKES}>
          <Templates templates={likeList} />
        </TabPanel>
      </TabContext>
    </Box>
  );
};
