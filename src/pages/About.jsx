import React from 'react'
import Layout from '../components/Layout'
import { Box, Typography } from '@mui/material'

const Login = () => {
  return (
    <Layout>
      <Box sx={{
        my:11,
        textAlign:'center',
        p:2,
        '& h4':{
            my:2,
            fontSize:'3rem',
        },
        '& p':{
          textAlign:'justify'
        },
        '@media (max-width:600px)':{
            m:0,
            "& h4": {
              fontSize:'2rem'
            }
        }
      }}>
        <Typography variant='h4'>
          Welcome To My Page
        </Typography>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit, laboriosam dolore. Nam molestiae natus vitae vero earum, possimus minima, doloribus sapiente iure sunt hic ipsam et quasi, laborum suscipit impedit velit. Impedit aperiam magni id dicta, nobis et iste voluptatibus vel corporis veniam tempore iure reiciendis atque maiores quia laborum molestiae ratione fuga dolor provident incidunt sint voluptatem blanditiis? Possimus nihil id natus alias labore repudiandae odit nobis quaerat blanditiis velit ipsum, quas magni obcaecati, non totam accusamus fuga atque similique. Odio aliquam expedita, nemo exercitationem tenetur est sequi quas molestiae alias mollitia facere vitae quos rerum repudiandae reprehenderit molestias.</p>
        <br/>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit facere animi minima quaerat veniam optio dolores modi natus molestiae ipsum est quis sit omnis illum, quam nobis totam consequatur officiis nihil? Laudantium, distinctio nihil officia placeat perspiciatis pariatur qui, libero temporibus cupiditate nisi dignissimos iure possimus aliquid voluptas dolorem in harum doloremque doloribus eum itaque. Facilis doloribus deserunt fugiat, aut, molestiae ad iure quae consequatur quisquam optio porro nisi maiores deleniti sequi vel error similique fugit, ex perferendis aperiam veritatis saepe obcaecati. Voluptas voluptate alias hic tempore qui commodi eos, non illum eaque delectus quod ab, error, eius placeat. Delectus!</p>

      </Box>
    </Layout>
  )
}

export default Login
