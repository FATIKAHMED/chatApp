import styled from '@emotion/styled';
import { Box, Typography } from '@mui/material';
import React from 'react';

import close from '../../Assets/close.svg';
import account from '../../Assets/user.png';
import CustomizedAccordions from '../Accordation/Accordation';

const PlaceholderSection = styled('div')((theme) => ({
  maxWidth: '21.875rem',
  width: '100%',
  '& .header': {
    borderBottom: '1px solid #E3E3E5',
    display: 'flex',
    gap: '11.688rem',
    paddingBottom: '2rem',
    alignItems: 'center',
    '& .heading': {
      paddingLeft: '1.5rem',
      fontSize: '1.5rem',
      fontWeight: '700',
      lineHeight: '5.625rem',
      color: '#000000',
    },
    '& .close': {
      cursor: 'pointer',
    },
  },
  '& .assigneeBox': {
    display: 'flex',
    gap: '2rem',
    padding: '1rem',
    '&.subBox': {
      display: 'flex',
      gap: '1rem',
      '& .imgBox': {
        width: '3rem !important',
        height: '3rem',
      },
    },
  },
}));

const PlaceHolder = () => {
  return (
    <>
      <PlaceholderSection>
        <Box className="header">
          <Typography className="heading">Details</Typography>
          <img src={close} alt="close" className="close" />
        </Box>
        <Box className="assigneeBox">
          <Typography>Assignee</Typography>
          <Box className="subBox" sx={{display:"flex", gap:"1rem",alignItems:"center"}}>
            <Box className="imgBox">
              <img src={account} alt="account" style={{ width: '2rem' }} />
            </Box>
            <Typography className="assignee">UnAssigned</Typography>
          </Box>
        </Box>
        <Box className="assigneeBox">
        <Typography>Team</Typography>
        <Box className="subBox" sx={{display:"flex", gap:"1rem",alignItems:"center"}}>
          <Box className="imgBox">
            <img src={account} alt="account" style={{ width: '2rem' }} />
          </Box>
          <Typography className="assignee">UnAssigned</Typography>
        </Box>
      </Box>
      <Box className="assigneeBox" sx={{borderBottom:"1px solid #E3E3E5"}}>
      <Typography>Link</Typography>
      <Box className="subBox" sx={{display:"flex", gap:"1rem",alignItems:"center"}}>
        <Box className="imgBox">
          <img src={account} alt="account" style={{ width: '2rem' }} />
        </Box>
        <Typography className="assignee">Create link</Typography>
      </Box>
    </Box>
    <CustomizedAccordions/>
      </PlaceholderSection>
    </>
  );
};

export default PlaceHolder;
