import { TextField , IconButton, Typography, Grid,  InputAdornment, OutlinedInput, FormControl, InputLabel, FormHelperText, Button, Divider } from '@mui/material';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { Box } from "@mui/material";
import { Add as AddIcon, Close as CloseIcon } from '@mui/icons-material';
import React, { useState } from "react";

import { Link } from "react-router-dom";
import Sidenav from '../components/Sidenav';


const AddRoom = () => {
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

</div>

  <Box
      sx={{
        width: '100%',  // Set the form width to 100%
        maxWidth: '800px',  // Optionally, set a max width
        padding: '16px',
        backgroundColor: '#fff',
        borderRadius: '8px',
        boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
        margin: '0 auto'  // Center the form horizontally
      }}
    >
      <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
        <Typography variant="h6">Room Details</Typography>
        {/* <IconButton> */}
        <Link to='/Room'>
  <button className='btn btn-primary add-button' style={{ marginTop:"-10px"}}>Back</button>
</Link>
          {/* <CloseIcon /> */}
        {/* </IconButton> */}
      </Box>

      <Box mb={2}>
        <Grid container spacing={2}>
          <Grid item xs={8}>
            <TextField
              label="Name"
              variant="outlined"
              fullWidth
              defaultValue="New Room 2"
            />
          </Grid>
          <Grid item xs={4}>
            <TextField
              label="Capacity"
              variant="outlined"
              fullWidth
              placeholder='eg "9"'
            />
          </Grid>
        </Grid>
      </Box>

      <Box mt={2}>
        <Typography variant="subtitle1" gutterBottom>
          Assign Staff
        </Typography>
        <Box display="flex" alignItems="center">
          <TextField
            variant="outlined"
            placeholder="Type to search..."
            fullWidth
            margin="normal"
          />
          <IconButton color="primary">
            <AddIcon />
          </IconButton>
        </Box>
      </Box>

      <Box mt={2}>
        <Typography variant="subtitle1" gutterBottom>
          Assign Children
        </Typography>
        <Box display="flex" alignItems="center">
          <TextField
            variant="outlined"
            placeholder="Type to search..."
            fullWidth
            margin="normal"
          />
          <IconButton color="primary">
            <AddIcon />
          </IconButton>
        </Box>
      </Box>

      <Box mt={3} textAlign="right">
        <Button variant="contained" color="primary">
          Save
        </Button>
      </Box>
    </Box>
    </div>
  
  );
};

export default AddRoom;