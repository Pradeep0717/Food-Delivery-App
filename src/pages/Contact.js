import React from 'react';
import Layout from '../components/Layout/Layout';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import EmailIcon from '@mui/icons-material/Email';
import CallIcon from '@mui/icons-material/Call';
import { Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';

const Contact = () => {
  return (
    <Layout>
       <Box sx={{my:5, ml:10, "& h4":{fontWeight:'bold',mb:2},}}>
        <Typography variant='h4'>Contact of My Resturant</Typography>
          <p>
          Contact is the act of establishing communication or interaction between individuals or entities. 
          It can occur through various means, such as face-to-face conversations, phone calls, emails, or virtual communication platforms.
           Effective and clear contact is crucial for building relationships, sharing information, and facilitating collaboration in 
           personal and professional settings.
          </p>
        
       </Box>
       <Box sx={{m:3, width:"600px", ml:10,"@media(max-width:600px)":{
        width:'300px',
       },}} >
       <TableContainer component={Paper}>
        <Table aria-label="contact table">
        <TableHead>
          <TableRow>
            <TableCell sx={{bgcolor:'black',color:'white',}} align='center'>Contact Details</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell>
              <SupportAgentIcon sx={{color:'red', pt: 1,}}/> 1800-00-00-1(tollfree)
            </TableCell>
           
          </TableRow>
          <TableRow>
          <TableCell>
              <EmailIcon sx={{color:'skyblue', pt: 1,}}/> pradeep96061@gmail.com
            </TableCell>
          </TableRow>
          <TableRow>
          <TableCell>
              <CallIcon sx={{color:'green', pt: 1,}}/> 9606150483
            </TableCell>
          </TableRow>
        </TableBody>

        </Table>

        </TableContainer>
       </Box>
    </Layout>
  );
};

export default Contact ;
