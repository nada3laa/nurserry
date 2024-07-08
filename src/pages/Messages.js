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




export default function Messages() {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleClearSearch = () => {
    setSearchQuery('');
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
        <Typography variant="h6" gutterBottom >
          Search
        </Typography>
        <TextField 
          fullWidth
          placeholder="All Rooms"
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
