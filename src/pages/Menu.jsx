import React from 'react'
import Layout from '../components/Layout'
import {Menulist} from '../data/data'
import { Box, Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material'

const Menu = () => {
  return (
    <Layout>
      <Box sx={{display:'flex', flexWrap:'wrap', justifyContent:'center'}}>
        {
        Menulist.map(menu=>(
          <Card sx={{maxWidth:'400px', m:3}}>
            <CardActionArea>
              <CardMedia sx={{minHeight:'400px'}}component={'img'} src={menu.image} alt={menu.name}/>
              <CardContent>
                <Typography variant='h4'>{menu.name}</Typography>
                <Typography variant='h6'>{menu.description}</Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        ))
        }
      </Box>
    </Layout>
  )
}

export default Menu
