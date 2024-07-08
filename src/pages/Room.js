import React, { useState } from 'react';
import {
  TextField,
  InputAdornment,
  IconButton,
  Typography,
  Box,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import Sidenav from "../components/Sidenav";
import AddIcon from '@mui/icons-material/Add';
import { Link } from 'react-router-dom';



export default function Room() {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleClearSearch = () => {
    setSearchQuery('');
  };

  const handleAddSession = () => {
    // Logic to add a new session
  }; 

  return (
    <div>
      <div className="bgcolor" style={{ backgroundColor: "#fff" }}>
        <Box height={70} />
        <Box sx={{ display: "flex" }}>
          <Sidenav />
   
    </Box>

    <Box
      sx={{
        display: 'flex',
        height: '100vh',
        marginLeft:"250px",
        marginTop:"-100px"
       
       
      }}
    >
      <Box
        sx={{
          width: '300px',
          backgroundColor: '#fff',
          borderRight: '1px solid #eee',
          padding: '20px',
          marginRight:"200px",
        }}
      >
         <Link to='/AddRoom'>
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
        <Typography variant="h5" style={{marginRight:"30px"}}>Add Room</Typography> 
        <TextField 
          fullWidth
          placeholder="Type..."
          value={searchQuery}
          onChange={handleSearchChange}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end" >
                {searchQuery && (
                  <IconButton onClick={handleClearSearch}>
                    <CloseIcon />
                  </IconButton>
                )}
                <IconButton>
                  <SearchIcon />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </Box>
      <Box
        sx={{
          flex: 1,
          padding: '20px',
        }}
      >
        <Typography variant="body1" style={{marginTop:"300px"}}>No chat group selected</Typography>
      </Box>
    </Box>

       
      </div>
    </div>
  );
}
