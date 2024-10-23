import React from 'react'
import Layout from '../components/Layout'
import { Box, Table,TableContainer, TableCell, TableHead, Typography, TableRow, TableBody } from '@mui/material'
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import EmailIcon from '@mui/icons-material/Email';
import TwitterIcon from '@mui/icons-material/Twitter';

const Register = () => {
  return (
    <Layout>
      <Box sx={{
        ml:5,
        mt:10,
        "& h4" : {
          fontSize:'3rem',
          mb:2,
        }
        }}>
        <Typography variant='h4'>
          Contact Our Restaurant
        </Typography>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, iste repellat? Dolores sunt quam cum nesciunt natus quisquam beatae laudantium rerum error sed modi, eaque sequi, eveniet illum officia! Nostrum officia voluptatibus alias praesentium, saepe recusandae laudantium tempore ullam eligendi qui ea placeat repellat sed! Quis facere possimus quae obcaecati aspernatur asperiores iste consequatur enim molestias corporis. Atque, voluptates. Officia voluptatibus dolores, temporibus ea voluptatum nam qui nihil repudiandae vel deserunt impedit ad, possimus inventore iure obcaecati sequi autem eligendi facilis maxime sed velit minus voluptates eveniet quaerat? Modi natus tempora aliquid eligendi laudantium tenetur consectetur est. Dolor, earum qui?
          </p>
      </Box>
      <Box sx={{m:5,ml:10,'@media (max-width:600px)':{
          width:'300px'
      }}}>
        <TableContainer>
          <Table aria-label='contact table'>
            <TableHead>
              <TableRow>
                <TableCell sx={{fontSize:'1.5rem', textDecoration:'underline', width:500, textAlign:'center',mx:50, border:'none', backgroundColor:'black',color:'white'
                }}
                >Contact Details</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>
                  <SupportAgentIcon sx={{pt:1}}/> 8054119428 (Tollfree)
                  </TableCell>
                <TableCell>
                  <EmailIcon sx={{color:'brown',pt:1}}/> priyanchuchoudharypc789@gmail.com
                  </TableCell>
                <TableCell>
                  <TwitterIcon sx={{pt:1, color:'skyblue'}}/> priyanshu@twitter.com (Tollfree)
                  </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Layout>
  )
}

export default Register
