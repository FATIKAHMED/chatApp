import styled from '@emotion/styled';
import { Box, TextField, Typography } from '@mui/material';
import React from 'react';
import btnlogo from '../Assets/btnlogo.svg';

import inbox from '../Assets/inbox.svg';

const InboxSection = styled('div')((theme) => ({
  maxWidth: '25rem',
  borderRight: '1px solid #E3E3E5',
  display: 'flex',
  flexDirection: 'column',
  '& .heading': {
    maxWidth: '100%',
    paddingLeft: '1.5rem',
    fontsize: '1.5rem',
    fontWeight: '700',
    lineHeight: '5.625rem',
    borderBottom: '1px solid #E3E3E5',
  },
  '& .search': {
    paddingTop: '1.5rem',
    paddingLeft: '1.5rem',
    marginRight: '1.5rem',
    paddingBottom: '2.375rem',
  },
  '& .btnContainer': {
    paddingLeft: '1.5rem',
    display: 'flex',
    gap: '0.563rem',
    alignItems: 'center',
    paddingBottom: '1.625rem',
    '& .name': {
      fontSize: '1rem',
      fontWeight: '400',
      lineHeight: '0.965rem',
      color: '#909090',
    },
  },
  '& .nameplate': {
    border: '1px solid transparent',
    backgroundColor: '#FFCC9D',
    padding: '0.438rem',
    borderRadius: '100%',
    maxWidth: '1.875rem',
    '& .names': {
      fontSize: '0.75rem',
      fontWeight: '700',
      lineHeight: '0.971rem',
      color: '#000000',
      opacity: '50%',
    },
  },
  '& .msgContent': {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5rem',
    '& .recipentName': {
      fontSize: '1rem',
      fontWeight: '500',
      lineHeight: '1.21rem',
      color: '#000000',
    },
    '& .recipentmsg': {
      fontSize: '1rem',
      fontWeight: '400',
      lineHeight: '1.21rem',
      color: '#51545E',
    },
  },
  '& .time': {
    fontSize: '0.75rem',
    fontWeight: '400',
    lineHeight: '0.908rem',
    color: '#51545E',
    marginRight: '1.5rem',
  },
  '& .InboxMessages': {
    borderTop: '1px solid #E3E3E5',
    paddingTop: '2.25rem',
    '& .inboxes': {
      width: '1rem',
    },
    '& .all': {
      fontSize: '1rem',
      fontWeight: '400',
      lineHeight: '1.21rem',
      color: '#51545E',
    },
  },
}));

const Inbox = () => {
  return (
    <>
      <InboxSection>
        <Typography className="heading">Inbox</Typography>
        <TextField id="outlined-search" type="search" className="search" />
        <Box className="btnContainer">
          <img src={btnlogo} alt="btn logo" className="btnlogo" />
          <Typography className="name">Manual</Typography>
        </Box>

        <Box
          sx={{
            display: 'flex',
            gap: '1.188rem',
            alignItems: 'center',
            paddingLeft: '1.5rem',
            paddingBottom: '2.25rem',
          }}
        >
          <Box sx={{ display: 'flex', flexDirection: 'row', gap: '1.188rem', alignItems: 'center' }}>
            <Box className="nameplate">
              <Typography className="names">RF</Typography>
            </Box>
            <Box className="msgContent">
              <Typography className="recipentName">Robert Fox</Typography>
              <Typography className="recipentmsg">Hello, I need help with my sett...</Typography>
            </Box>
          </Box>
          <Typography className="time">1m</Typography>
        </Box>
        <Box
          sx={{
            display: 'flex',
            gap: '1.188rem',
            alignItems: 'center',
            paddingLeft: '1.5rem',
            paddingBottom: '2.25rem',
          }}
        >
          <Box sx={{ display: 'flex', flexDirection: 'row', gap: '1.188rem', alignItems: 'center' }}>
            <Box className="nameplate">
              <Typography className="names">RF</Typography>
            </Box>
            <Box className="msgContent">
              <Typography className="recipentName">Robert Fox</Typography>
              <Typography className="recipentmsg">Hello, I need help with my sett...</Typography>
            </Box>
          </Box>
          <Typography className="time">1m</Typography>
        </Box>
        <Box className="InboxMessages">
          <Box
            sx={{
              display: 'flex',
              gap: '0.688rem',
              alignItems: 'center',
              paddingLeft: '1.5rem',
              paddingBottom: '1.5rem',
            }}
          >
            <img src={inbox} alt="inbox" className="inboxes" />
            <Typography className="all">All</Typography>
          </Box>
          <Box
          sx={{
            display: 'flex',
            gap: '1.188rem',
            alignItems: 'center',
            paddingLeft: '1.5rem',
            paddingBottom: '2.25rem',
          }}
        >
          <Box sx={{ display: 'flex', flexDirection: 'row', gap: '1.188rem', alignItems: 'center' }}>
            <Box className="nameplate">
              <Typography className="names">RF</Typography>
            </Box>
            <Box className="msgContent">
              <Typography className="recipentName">Robert Fox</Typography>
              <Typography className="recipentmsg">Hello, I need help with my sett...</Typography>
            </Box>
          </Box>
          <Typography className="time">1m</Typography>
        </Box>
        <Box
        sx={{
          display: 'flex',
          gap: '1.188rem',
          alignItems: 'center',
          paddingLeft: '1.5rem',
          paddingBottom: '2.25rem',
        }}
      >
        <Box sx={{ display: 'flex', flexDirection: 'row', gap: '1.188rem', alignItems: 'center' }}>
          <Box className="nameplate">
            <Typography className="names">RF</Typography>
          </Box>
          <Box className="msgContent">
            <Typography className="recipentName">Robert Fox</Typography>
            <Typography className="recipentmsg">Hello, I need help with my sett...</Typography>
          </Box>
        </Box>
        <Typography className="time">1m</Typography>
      </Box>
      <Box
      sx={{
        display: 'flex',
        gap: '1.188rem',
        alignItems: 'center',
        paddingLeft: '1.5rem',
        paddingBottom: '2.25rem',
      }}
    >
      <Box sx={{ display: 'flex', flexDirection: 'row', gap: '1.188rem', alignItems: 'center' }}>
        <Box className="nameplate">
          <Typography className="names">RF</Typography>
        </Box>
        <Box className="msgContent">
          <Typography className="recipentName">Robert Fox</Typography>
          <Typography className="recipentmsg">Hello, I need help with my sett...</Typography>
        </Box>
      </Box>
      <Typography className="time">1m</Typography>
    </Box>
    <Box
    sx={{
      display: 'flex',
      gap: '1.188rem',
      alignItems: 'center',
      paddingLeft: '1.5rem',
      paddingBottom: '2.25rem',
    }}
  >
    <Box sx={{ display: 'flex', flexDirection: 'row', gap: '1.188rem', alignItems: 'center' }}>
      <Box className="nameplate">
        <Typography className="names">RF</Typography>
      </Box>
      <Box className="msgContent">
        <Typography className="recipentName">Robert Fox</Typography>
        <Typography className="recipentmsg">Hello, I need help with my sett...</Typography>
      </Box>
    </Box>
    <Typography className="time">1m</Typography>
  </Box>
        </Box>
      </InboxSection>
    </>
  );
};

export default Inbox;
