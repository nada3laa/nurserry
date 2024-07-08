import * as React from 'react';

import Box from "@mui/material/Box";




import{TextField,Typography,Select,MenuItem,InputLabel,FormControl,Grid, Divider,Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Checkbox}from '@mui/material';

import { styled } from '@mui/material/styles';

import { Link } from 'react-router-dom';
import FilterListIcon from '@mui/icons-material/FilterList';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import Sidenav from '../../components/Sidenav';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));


export default function Feed() {

   


  return (
    <div>
      <div className="bgcolor"   style={{backgroundColor:"#fff"}}>

     
      <Box height={70}/>
      <Box sx={{ display: "flex" }}>

      <Sidenav/>
      <Box component="main" sx={{ flexGrow: 1, p: 3 , mb:10}} >
      
        

      <Grid container justifyContent="space-between" alignItems="center" marginTop="-80px">
        <Grid item>
        <h2 style={{fontWeight:"600", color:"#25293f"}}>Feed</h2>
          

        </Grid>
      
        <Grid item>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: '30px',color:"#12aed2" }}>
          <Link to="/Filter" style={{textDecoration:"none"}} >  
      <div className="my-day-container MyDay"  style={{backgroundColor:"#bfc4ce", borderBottom:"5px solid #12aed2",marginLeft:"200px"}}>
      <span className="my-day-text">Filter</span>
      < FilterListIcon  className="home-icon"
                                    sx={{
                                      minwidth: 0,
                                      ml:  "5",
                                      justifyContent: "center",
                                    }}
                                    >
                                    <InboxIcon /> 
                                    </ FilterListIcon >
     
      
    </div>
    </Link>  
    <Link to="/NewActivity" style={{textDecoration:"none"}} >  
      <div className="my-day-container MyDay"  style={{backgroundColor:"#bfc4ce", borderBottom:"5px solid #12aed2"}}>
      <span className="my-day-text">New Activity</span>
     
      
    </div>
    </Link>  
            
          </Box>
        </Grid>
        <Divider style={{ width: '100%', margin: '20px -25px' }} />
      </Grid>

     
    </Box>
       

      </Box>

           {/* table */}
           

           <Box sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '80vh' }}>
           <Typography variant="h5" gutterBottom component="div">
        No Observations
      </Typography>
      </Box>
    
        
      {/* </Box> */}
      </div>
    </div>
  )
}