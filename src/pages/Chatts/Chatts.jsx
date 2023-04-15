import React from 'react';
import styled from '@emotion/styled';
import SideBar from '../../components/SideBar/SideBar';
import Inbox from '../../Inbox/Inbox';
import ChatBox from '../../components/ChatBox/ChatBox';
import PlaceHolder from '../../components/PlaceHolder/PlaceHolder';
import Chat from '../../components/chatscreen/Chatbox';
import CustomizedAccordions from '../../components/Accordation/Accordation';

const Section = styled('div')((theme) => ({
  display: 'flex',
  flexDirection: 'row',
}));

const Chatts = () => {
  return (
    <>
      <Section>
        <SideBar />
        <Inbox/>
        <ChatBox/>
        <Chat/>
        <PlaceHolder/>
      </Section>
    </>
  );
};

export default Chatts;
