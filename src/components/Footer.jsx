import React from 'react'
// import Layout from './Layout'
import { Box, Typography } from '@mui/material'
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import XIcon from '@mui/icons-material/X';
import GitHubIcon from '@mui/icons-material/GitHub';
const Footer = () => {
  return (
    <>
      <Box sx={{textAlign:'center', bgcolor:'black', color:'white'}}>
        <Box sx={{my:0.5, "& svg": {
            cursor:'pointer',
            mr:2,
            fontSize: 28
        },
        "& svg:hover":{
            transform: 'translateY(3px)',
            transition: 'all 250ms',
            color:'goldenrod',
        }}}>
            <InstagramIcon/>
            <GitHubIcon/>
            <XIcon/>
            <YouTubeIcon/>
        </Box>
        <Typography>
            All rights Reserved &copy; Techinfo YT
        </Typography>
      </Box>
    </>
  )
}

export default Footer
