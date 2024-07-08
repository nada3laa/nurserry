import { TextField, Typography, Grid,  InputAdornment, OutlinedInput, FormControl, InputLabel, FormHelperText, Button, Divider } from '@mui/material';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { Box } from "@mui/material";

import React, { useState } from "react";

import { Link } from "react-router-dom";

import Sidenav from "../../components/Sidenav";
const AddSession = () => {
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
<Link to='/Setting'>
  <button className='btn btn-primary add-button' style={{marginLeft:"1200px", marginTop:"-120px"}}>Back</button>
</Link>
</div>
<form onSubmit={handleSubmit} style={{width:"70%", marginLeft:"280px", marginTop:"-90px"}}>
      <Typography variant="h4" gutterBottom>
        Session Details
      </Typography>

      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <TextField
            fullWidth
            label="Session Name"
            value={sessionName}
            onChange={(e) => setSessionName(e.target.value)}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            fullWidth
            label="Acronym"
            value={acronym}
            onChange={(e) => setAcronym(e.target.value)}
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <FormControl fullWidth>
            <InputLabel htmlFor="start-time"></InputLabel>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <TimePicker
                views={['hours', 'minutes']}
                label="Start Time"
                value={startTime}
                onChange={(newValue) => setStartTime(newValue)}
                renderInput={(params) => <TextField {...params} />}
              />
            </LocalizationProvider>
          </FormControl>
        </Grid>
        <Grid item xs={12} md={6}>
          <FormControl fullWidth>
            <InputLabel htmlFor="end-time"></InputLabel>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <TimePicker
                views={['hours', 'minutes']}
                label="End Time"
                value={endTime}
                onChange={(newValue) => setEndTime(newValue)}
                renderInput={(params) => <TextField {...params} />}
              />
            </LocalizationProvider>
          </FormControl>
        </Grid>
      </Grid>

      <Typography variant="h4" gutterBottom mt={4}>
        Session Fees
      </Typography>

      <Typography variant="body1" gutterBottom>
        Set your pricing by age category and set your charge for any additional hours. Don't know your hourly rate?
      </Typography>
      <Typography variant="body1" gutterBottom>
        Price per hour = Session Cost / Hours
      </Typography>

      <Grid container spacing={2} mt={2}>
        <Grid item xs={12} md={6}>
          <Typography variant="subtitle1" gutterBottom>
            Up to 1 years old
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
            From 1 up to 2 years old
          </Typography>
          <FormControl fullWidth>
            <OutlinedInput
              id="price-per-hour-2"
              value={pricePerHour2}
              onChange={(e) => setPricePerHour2(e.target.value)}
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

export default AddSession;