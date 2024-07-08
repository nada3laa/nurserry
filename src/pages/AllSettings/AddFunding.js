import { TextField, Typography, Grid,  InputAdornment, OutlinedInput, FormControl, InputLabel, FormHelperText, Button, Divider } from '@mui/material';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { Box } from "@mui/material";


import React, { useState } from "react";

import { Link } from "react-router-dom";

import Sidenav from "../../components/Sidenav";
const AddFunding = () => {
    const [sessionName, setSessionName] = useState('');
    const [acronym, setAcronym] = useState('');
    const [startTime, setStartTime] = useState(null);
    const [endTime, setEndTime] = useState(null);
    const [pricePerHour1, setPricePerHour1] = useState('');
    const [pricePerHour2, setPricePerHour2] = useState('');
    const [pricePerHour3, setPricePerHour3] = useState('');
  
    const handleSubmit = (event) => {
      event.preventDefault();
      // Handle form submission here
      console.log('Form submitted with data:', {
        sessionName,
        acronym,
        startTime,
        endTime,
        pricePerHour1,
        pricePerHour2,
        pricePerHour3,
      });
    };
    
  return (
    <div>
    <Sidenav/>
    <Box height={65} sx={{ direction: "rtl" }} />
<div>
<Link to='/Funding'>
  <button className='btn btn-primary add-button' style={{marginLeft:"1200px", marginTop:"-120px"}}>Back</button>
</Link>
</div>
<form onSubmit={handleSubmit} style={{width:"70%", marginLeft:"280px", marginTop:"-90px"}}>
      <Typography variant="h4" gutterBottom>
      Funding Grant
      </Typography>

      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <TextField
            fullWidth
            label="Title"
            placeholder='e.g."Universal 15 hours 3 & 4 years old"'
            value={sessionName}
            onChange={(e) => setSessionName(e.target.value)}
          />
        </Grid>
        

       
      </Grid>

      <Typography variant="h4" gutterBottom mt={4}>
      Funding Rate
      </Typography>

    

      <Grid container spacing={2} mt={2}>
        <Grid item xs={12} md={6}>
          <Typography variant="subtitle1" gutterBottom>
            From
          </Typography>
          <FormControl fullWidth>
            <OutlinedInput
              id="price-per-hour-1"
              value={pricePerHour1}
              onChange={(e) => setPricePerHour1(e.target.value)}
              startAdornment={<InputAdornment position="start">£</InputAdornment>}
            />
            <FormHelperText>e.g. "8"</FormHelperText>
          </FormControl>
        </Grid>
       
   
        <Grid item xs={12} md={6}>
          <Typography variant="subtitle1" gutterBottom>
            From 2 up to 3 years old
          </Typography>
          <FormControl fullWidth>
            <OutlinedInput
              id="price-per-hour-3"
              value={pricePerHour3}
              onChange={(e) => setPricePerHour3(e.target.value)}
              startAdornment={<InputAdornment position="start">£</InputAdornment>}
            />
            <FormHelperText>e.g. "8"</FormHelperText>
          </FormControl>

          
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="subtitle1" gutterBottom>
            +3 years old
          </Typography>
          <FormControl fullWidth>
            <OutlinedInput
              id="price-per-hour-3"
              value={pricePerHour3}
              onChange={(e) => setPricePerHour3(e.target.value)}
              startAdornment={<InputAdornment position="start">£</InputAdornment>}
            />
            <FormHelperText>e.g. "8"</FormHelperText>
          </FormControl>

          
        </Grid>
      </Grid>

      {/* <Box mt={4} display="flex" justifyContent="center">
        <Button variant="contained" type="submit">
          Save Session
        </Button>
      </Box> */}
    </form>
    </div>
  
  );
};

export default AddFunding;