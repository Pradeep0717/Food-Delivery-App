import React from 'react';
import Layout from '../components/Layout/Layout';
import { Box, Typography } from '@mui/material';

const About = () => {
  return (
    <Layout>
   <Box sx={{
    my:15,
    textAlign:"center",
    p:2,
    "& h4":{
      fontWeight:'bold',
      my:2,
      fontSize:"2rem",
    },
    "& p":{
      textAlign:'justify',
    },
    "@media (max-width:600px)": {
      mt:0,
      "& h4":{
        fontSize:"1.5rem",
      },
    },
   }}>
    <Typography variant='h4'>
      Welcome To My Resturant
    </Typography>
    <p>Food delivery has become an integral part of modern lifestyles, offering convenience and accessibility to a 
    wide range of culinary options.With the advent of technology, online platforms and mobile apps have revolutionized the way people
     order and receive
   food at their doorstepsThe food delivery industry has witnessed significant growth, fueled by the increasing demand for quick and 
    hassle-free 
   dining experiences.Restaurants and eateries have embraced food delivery services as a means to expand their customer reach and boost
  evenue streams.
  Customers enjoy the flexibility of choosing from diverse menus, ranging from local favorites to international 
  cuisines, all delivered with just a few clicks.
  Delivery logistics and tracking systems have enhanced the efficiency of food delivery, providing real-time updates
 on the status of orders.
The COVID-19 pandemic further accelerated the adoption of food delivery, as people sought safer alternatives to 
dine-in options.
Various food delivery platforms compete in a dynamic market, offering discounts, promotions, and loyalty programs t
o attract and retain customers.
Challenges in the industry include maintaining food quality during transit, ensuring timely deliveries, and addressing
 environmental concerns related to packaging waste.
Despite challenges, food delivery continues to thrive, reshaping the dining experience and contributing to the evo
lving landscape of the global food industry.
    </p>
    <br/>
    <p>
    Food delivery has become an integral part of modern lifestyles, offering convenience and accessibility to a 
    wide range of culinary options.With the advent of technology, online platforms and mobile apps have revolutionized the way people
     order and receive
   food at their doorstepsThe food delivery industry has witnessed significant growth, fueled by the increasing demand for quick and 
    hassle-free 
   dining experiences.Restaurants and eateries have embraced food delivery services as a means to expand their customer reach and boost
  evenue streams.
  Customers enjoy the flexibility of choosing from diverse menus, ranging from local favorites to international 
  cuisines, all delivered with just a few clicks.
  Delivery logistics and tracking systems have enhanced the efficiency of food delivery, providing real-time updates
 on the status of orders.
The COVID-19 pandemic further accelerated the adoption of food delivery, as people sought safer alternatives to 
dine-in options.
Various food delivery platforms compete in a dynamic market, offering discounts, promotions, and loyalty programs t
o attract and retain customers.
Challenges in the industry include maintaining food quality during transit, ensuring timely deliveries, and addressing
 environmental concerns related to packaging waste.
Despite challenges, food delivery continues to thrive, reshaping the dining experience and contributing to the evo
lving landscape of the global food industry.
    </p>
   </Box>
    </Layout>
  );
};

export default About;