import React from 'react';
import { Box, Typography, List, ListItem, ListItemIcon, ListItemText, Paper,Grid,Divider } from '@mui/material';
import HourglassEmptyIcon from '@mui/icons-material/HourglassEmpty';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import Sidenav from "../components/Sidenav";




export default function Activity() {

    const items = [
        { text: 'Pending Approval',icon: <HourglassEmptyIcon style={{borderRadius:"50%",color:"rgb(255 255 255)", backgroundColor:"rgb(238, 142, 54)",height:"40px", width:"70%",}} />, count: 0 },
        { text: 'Approved', icon: <CheckCircleIcon style={{borderRadius:"50%",color:"rgb(255 255 255)", backgroundColor:"rgb(32 179 38)",height:"40px", width:"70%",}}/>, count: 0 },
        { text: 'Drafts', icon: <EditIcon style={{borderRadius:"50%",color:"rgb(255 255 255)", backgroundColor:"rgb(37 41 63)",height:"40px", width:"70%",}} />, count: 0 },
        { text: 'Deleted', icon: <DeleteIcon  style={{borderRadius:"50%",color:"rgb(255 255 255)", backgroundColor:"rgb(228 97 105)",height:"40px", width:"70%",}}/>, count: 0 },
      ];

  return (
    <div>
      <div className="bgcolor" style={{ backgroundColor: "#fff" }}>
        <Box height={70} />
        <Box sx={{ display: "flex" }}>
          <Sidenav />
          <Box component="main" sx={{ flexGrow: 1, p: 3 , mb:10}}>
      
        

      <Grid container justifyContent="space-between" alignItems="center" marginTop="-80px">
        <Grid item>
        <h2 style={{fontWeight:"600", color:"#25293f"}}>Activity</h2>
          

        </Grid>
        <Divider style={{ width: '100%', margin: '20px -25px' }} />
      </Grid>
      <Box flex={1} maxWidth={200}>
        <List>
          {items.map((item, index) => (
            <ListItem key={index} button style={{fontWeight:"bold"}}>
              
              <ListItemIcon >{item.icon}</ListItemIcon>
              <ListItemText primary={`${item.text}`} />
             
              <Typography variant="caption" style={{marginTop:"50px", marginLeft:"-300px", marginRight:"70px"}}>{item.count} Items</Typography>
            </ListItem>
          ))}
        </List>
      </Box>
      <Box flex={3} display="flex" justifyContent="center" alignItems="center">
        {/* <Paper elevation={1} style={{ padding: 20, textAlign: 'center' }}> */}
          {/* <InsertDriveFileIcon style={{ fontSize: 60, color: '#1976d2' }} /> */}
          <Typography variant="h6" gutterBottom style={{marginLeft:"300px", marginTop:"-300px"}}>
            There are currently no pending observations
          </Typography>
        {/* </Paper> */}
      </Box>
    </Box>
    </Box>

       
      </div>
    </div>
  );
}
