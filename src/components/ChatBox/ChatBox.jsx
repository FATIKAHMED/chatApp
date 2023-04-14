import styled from '@emotion/styled';
import { Box, Button, Typography } from '@mui/material';
import React from 'react';

import msg from "../../Assets/btnlogo.svg"

const Chatbox = styled('div')((theme) => ({
  maxWidth: '56.125rem',
  borderRight: '1px solid #E3E3E5',
  width:"100%",
  '& .header': {
    display: 'flex',
    gap: '32.5rem',
    borderBottom: '1px solid #E3E3E5',
    alignItems:"center",
    '& .heading': {
      paddingLeft: '1.5rem',
      fontSize: '1.5rem',
      fontWeight: '700',
      lineHeight: '5.625rem',
      color: '#000000',
    },
    "& .btn":{
        backgroundColor:"black",
        paddingLeft:"0.5rem",
        paddingRight:"0.5rem",
        paddingTop:"0.75rem",
        paddingBottom:"0.75rem",
        width:"11.25rem",
        height:"2.75rem",
        "& .switch":{
            color:"#FFFFFF"
        },
        "& .btnlogo":{
            marginRight:"0.5rem"

        }
    },

  },
}));

const ChatBox = () => {
  return (
    <>
      <Chatbox>
        <Box className="header">
          <Typography className="heading">Robert Fox</Typography>
          <Button className='btn'>
          <img src={msg} alt='btnlogo' className='btnlogo'/>
          <Typography className='switch'>Switch to manual</Typography>
          </Button>
        </Box>
      </Chatbox>
    </>
  );
};

export default ChatBox;
