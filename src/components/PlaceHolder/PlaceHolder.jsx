import styled from '@emotion/styled'
import { Box, Typography } from '@mui/material'
import React from 'react'

import close from "../../Assets/close.svg"

const PlaceholderSection = styled("div")((theme)=>({
    maxWidth:"21.875rem",
    width:"100%",
    "& .header":{
        borderBottom:"1px solid #E3E3E5",
        display:"flex",
        gap:"11.688rem",
        alignItems:"center",
        '& .heading': {
            paddingLeft: '1.5rem',
            fontSize: '1.5rem',
            fontWeight: '700',
            lineHeight: '5.625rem',
            color: '#000000',
          },
          "& .close":{
            cursor:"pointer",
          }
    }
    
}))

const PlaceHolder =()=> {
  return (
    <>
      <PlaceholderSection>
      <Box className="header">
      <Typography className='heading'>Details</Typography>
      <img src={close} alt="close" className='close'/>
      </Box>
      </PlaceholderSection>
    </>
  )
}

export default PlaceHolder
