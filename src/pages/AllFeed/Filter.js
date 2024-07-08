
import { Box } from "@mui/material";

import React, { useState } from "react";
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import { Link } from "react-router-dom";
import Sidenav from '../../components/Sidenav';


const Filter = () => {

    const [dateRange, setDateRange] = useState('');
    const [author, setAuthor] = useState('');
    const [room, setRoom] = useState('');
    const [visibility, setVisibility] = useState('');
  
    const handleDateRangeChange = (event) => {
      setDateRange(event.target.value);
    };
  
    const handleAuthorChange = (event) => {
      setAuthor(event.target.value);
    };
  
    const handleRoomChange = (event) => {
      setRoom(event.target.value);
    };
  
    const handleVisibilityChange = (event) => {
      setVisibility(event.target.value);
    };
  
    const handleSubmit = () => {
      // Implement your filtering logic here
      console.log('Filter applied with:', {
        dateRange,
        author,
        room,
        visibility,
      });
    };
  
    const handleReset = () => {
      setDateRange('');
      setAuthor('');
      setRoom('');
      setVisibility('');
    };

    
  return (
    <div>
    <Sidenav/>
    <Box height={65} sx={{ direction: "rtl" }} />
<div>
<Link to='/Feed'>
  <button className='btn btn-primary add-button' style={{marginLeft:"1200px", marginTop:"-120px"}}>Back</button>
</Link>
</div>
<form style={{width:"70%", marginLeft:"280px", marginTop:"-90px"}}>
<Box sx={{ padding: 2 }} >
      <Typography variant="h6">Filter</Typography>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, mt: 2 }}>
        <TextField
          label="Date Range"
          type="date"
          value={dateRange}
          onChange={handleDateRangeChange}
          InputLabelProps={{ shrink: true }}
        />
        <InputLabel id="author-select-label">Author</InputLabel>
        <Select
          labelId="author-select-label"
          id="author-select"
          placeholder="All Staff"
          value={author}
          onChange={handleAuthorChange}
        >
          <MenuItem value="all">All Staff</MenuItem>
          <MenuItem value="Nada">Nada Alaa</MenuItem>
        
        </Select>
        <InputLabel id="room-select-label">Room</InputLabel>
        <Select
          labelId="room-select-label"
          id="room-select"
          value={room}
          onChange={handleRoomChange}
        >
          <MenuItem value="all">All Rooms</MenuItem>
         
        </Select>
        <InputLabel id="visibility-select-label">Visibility</InputLabel>
        <Select
          labelId="visibility-select-label"
          id="visibility-select"
          value={visibility}
          onChange={handleVisibilityChange}
        >
          <MenuItem value="all">All</MenuItem>
          <MenuItem value="parent">Parent Feed View</MenuItem>
          <MenuItem value="staff">Staff Only View</MenuItem>
        </Select>
        <Box sx={{ display: 'flex', gap: 2 }}>
          <Button variant="contained" onClick={handleSubmit}>
            Filter
          </Button>
          <Button variant="outlined" onClick={handleReset}>
            Reset filters
          </Button>
        </Box>
      </Box>
    </Box>
    </form>
    </div>
  
  );
};

export default Filter;