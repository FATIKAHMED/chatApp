import styled from '@emotion/styled';
import React from 'react';
import { Box } from '@mui/system';

import avatar from '../../Assets/avatar.svg';
import inbox from '../../Assets/inbox.svg';
import tool from '../../Assets/tool.svg';
import setting from '../../Assets/setting.svg';
import exit from '../../Assets/exit.svg';

const SideBars = styled('div')((theme) => ({
  maxWidth: '5rem',
  backgroundColor: '#F2F4F5',
  '& .Avatar': {
    maxWidth: '3.125rem',
    marginLeft: '0.938rem',
    marginRight: '0.938rem',
    paddingTop: '1.313rem',
    marginBottom: '3.188rem',
  },
  '& .cover': {
    display: 'flex',
    flexDirection: 'column',
  },
  '& .icons': {
    maxWidth: '1.875rem',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: '3.125rem',
  },
  '& .lastIcon': {
    maxWidth: '1.875rem',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: '52.813rem',
  },
  '& .exit': {
    maxWidth: '1.875rem',
    marginLeft: 'auto',
    marginRight: 'auto',
    paddingBottom: '2.188rem',
  },
}));

const SideBar = () => {
  return (
    <>
      <SideBars>
        <img src={avatar} alt="avatar" className="Avatar" />
        <Box sx={{display:"flex",flexDirection:"column",justifyContent:"space-between"}}>
          <Box className="cover">
            <img src={inbox} alt="inbox" className="icons" />
            <img src={tool} alt="tool" className="icons" />
            <img src={setting} alt="setting" className="lastIcon" />
          </Box>
          <Box>
            <img src={exit} alt="exit" className="exit" />
          </Box>
        </Box>
      </SideBars>
    </>
  );
};

export default SideBar;
