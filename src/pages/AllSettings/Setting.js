import React, { useState } from 'react';

import Box from "@mui/material/Box";

import AddIcon from '@mui/icons-material/Add';


import{TextField,Button,Tabs,Tab,Typography,Select,MenuItem,InputLabel,FormControl,Grid, Divider,Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Checkbox, Stack}from '@mui/material';

import { styled } from '@mui/material/styles';

import { Link } from 'react-router-dom';
import Sidenav from '../../components/Sidenav';


const StyledSelect = styled(Select)(({ theme }) => ({
  '.MuiOutlinedInput-notchedOutline': {
    borderColor: "#b3b9c5", // Light gray border
  },
  '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
    borderColor: '#25293f', // Blue border on focus
  },
}));

const StyledTypography = styled(Typography)(({ theme }) => ({
  fontWeight: 600,
  color: '#1070C9', // Blue text color
}));


export default function Setting() {

  const [selectedTab, setSelectedTab] = useState('active');
  const [sessionData, setSessionData] = useState([
    { id: 1, name: 'Session 1', isActive: true },
    { id: 2, name: 'Session 2', isActive: false },
  ]);

  const handleChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  const handleAddSession = () => {
    // Logic to add a new session
  };

  const handleSearch = (event) => {
    // Logic to search sessions
  };

  const filteredSessions = sessionData.filter(
    (session) =>
      selectedTab === 'all' ||
      (selectedTab === 'active' && session.isActive) ||
      (selectedTab === 'inactive' && !session.isActive)
  );

  return (
    <div>
      <div className="bgcolor" style={{backgroundColor:"#fff"}}>

     
      <Box height={70}/>
      <Box sx={{ display: "flex" }}>

      <Sidenav/>
      <Box component="main" sx={{ flexGrow: 1, p: 3 , mb:10}}>
      
        

      <Grid container justifyContent="space-between" alignItems="center" marginTop="-80px">
        <Grid item>
        <h2 style={{fontWeight:"600", color:"#25293f"}}>Settings</h2>
          

        </Grid>
        <Divider style={{ width: '100%', margin: '20px -25px' }} />
      </Grid>
  <Box  bgcolor="#fff" component="main" sx={{ flexGrow: 1, pt: 3, pl:3 , mr:5, ml:5  }} >

      <Stack direction="row" spacing={2} height={50} >
      <Link to="/Setting" style={{textDecoration:"none"}} >  
      <div className="my-day-container MyDay"  style={{backgroundColor:"#bfc4ce", borderBottom:"5px solid #12aed2",marginLeft:"200px"}}>
      <span className="my-day-text">Sessions</span>
     
      
    </div>
    </Link>  

    <Link to="/Extras" style={{textDecoration:"none"}}> 
    <div className="my-day-container Due" style={{backgroundColor:"#bfc4ce", borderBottom:"5px solid rgb(217 221 228)", marginLeft:"20px" }}>
      <div className="icon-container">
     
      </div>
      <span className="my-day-text">Extras</span>
     
    </div>
    </Link>
        

    <Link to="/Funding" style={{textDecoration:"none"}} > 
    <div className="my-day-container In" style={{backgroundColor:"#bfc4ce",borderBottom:"5px solid rgb(217 221 228) " , marginLeft:"20px" }}>
      <div className="icon-container">
      
      </div>
      <span className="my-day-text">Funding</span>
     
     
    </div>
    </Link>
    <Link to="/Setting" style={{textDecoration:"none"}} >
    <div className="my-day-container Out" style={{backgroundColor:"#bfc4ce", borderBottom:"5px solid rgb(217 221 228)" , marginLeft:"20px" }}>
      <div className="icon-container">
    
      </div>
      <span className="my-day-text">Layout</span>
      
    </div>
    </Link>
   
                   </Stack>
                   </Box>
    </Box>
   



   
</Box>
<Grid container spacing={2} style={{ marginLeft:"300px", width:"300px",height:"350px",border:"3px solid #d9dde4"}}>
<Grid item xs={12}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        {/* <Button variant="contained" onClick={handleAddSession} >
            Add Session
          </Button> */}
          <Link to='/AddSession'>
          <AddIcon  onClick={handleAddSession} className="home-icon"
                                    sx={{
                                      minwidth: 0,
                                      mr:  "5",
                                      justifyContent: "center",
                                    }}
                                    >
                                    {/* <InboxIcon />  */}
                                    </AddIcon >
                                    </Link>
        <Typography variant="h5" style={{marginRight:"20px"}}>Add Children Session</Typography> 
        </Box>
       
      </Grid>
      <Grid item xs={12}  style={{marginBottom:"300px"}}>
      <TextField
            placeholder="Search session..."
            onChange={handleSearch}
            sx={{ ml: 2 }}
          />
      </Grid>
   

      <Grid item xs={12}  style={{marginTop:"-300px"}}>
        <Tabs value={selectedTab} onChange={handleChange} >
          <Tab value="active" label="Active" />
          <Tab value="inactive" label="Inactive" />
          <Tab value="all" label="All" />
        </Tabs>
      </Grid>
     
    </Grid>
    


    
           {/* table */}
           
  
      {/* </Box> */}
      </div>
    </div>
  )
}