import React, { useState } from 'react';
import './style.css'
import Sidenav from '../components/Sidenav';
import NAvbar from '../components/Navbar';
import Accordion from '../components/Accordion';

import Box from "@mui/material/Box";
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import Typography from "@mui/material/Typography";
import { Stack } from '@mui/material';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import "../dash.css";



import {useNavigate} from "react-router-dom";

import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import AddTaskIcon from '@mui/icons-material/AddTask';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import InboxIcon from '@mui/icons-material/MoveToInbox';

import NoChildrenIcon from '@mui/icons-material/FolderOpen';




export default function Home() {

  const [showBoxes, setShowBoxes] = useState(true); // State to track visibility of boxes

  // Function to toggle visibility of boxes
  const toggleBoxes = () => {
    setShowBoxes(prevState => !prevState);
  };

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

  const navigate = useNavigate();

  const [displayText, setDisplayText] = useState('');

  const handleClick = (sentence) => {
    setDisplayText(sentence);


    // active menu 
    

  };
  return (
    <div>


      
      <NAvbar />

    

    
         
         

      <div className="bgcolor" >
        <Box height={70}  bgcolor="#fff" />
        <Box sx={{ display: "flex"}} >
          <Sidenav />

        

           <Box  bgcolor="#fff" component="main" sx={{ flexGrow: 1, pt: 3, pl:3}}>

          
           <Stack direction="row" spacing={2} style={{marginTop:"20px", marginRight:"-20px"}} height={50}>
             

              {/* <nav className="nav-link ">
                    <Link to="/" className='navbar-links nav-one button_one' >
                    <AddHomeIcon className='button_icon'
                                    sx={{
                                      minwidth: 0,
                                      mr:  "3",
                                      justifyContent: "center",
                                    }}
                                    >
                                    <InboxIcon /> 
                                    </AddHomeIcon>
                                    <span className='text'>My Day 0/</span>0
                    </Link>

                    <Link to="Due" className='navbar-links' href="#Due">

                    <FormatListBulletedIcon className='button_icon'
                                    sx={{
                                      minwidth: 0,
                                      mr:  "3",
                                      justifyContent: "center",
                                    }}
                                    >
                                    <InboxIcon /> 
                                    </FormatListBulletedIcon>
                                    <span className='text'>Due 0</span>

                    </Link>

                    <Link to= '/In'className='navbar-links' href="#In">
                    
                    <AddTaskIcon className='button_icon'
                                    sx={{
                                      minwidth: 0,
                                      mr:  "3",
                                      justifyContent: "center",
                                    }}
                                    >
                                    <InboxIcon /> 
                                    </AddTaskIcon>
                                    <span className='text'>In 0/</span>0


                    </Link>

                    <Link to="/Out" className='navbar-links' href="#Out">
                  
                    < ArrowCircleRightIcon className='button_icon'
                                    sx={{
                                      minwidth: 0,
                                      mr:  "3",
                                      justifyContent: "center",
                                    }}
                                    >
                                    <InboxIcon /> 
                                    </ ArrowCircleRightIcon>
                                    <span className='text'>Out 0</span>


                    </Link>

                    <Link to="/Absent" className="navbar-links" href="#Absent">
                    
                    < DeleteForeverIcon className='button_icon'
                                    sx={{
                                      minwidth: 0,
                                      mr:  "3",
                                      justifyContent: "center",
                                    }}
                                    >
                                    <InboxIcon /> 
                                    </ DeleteForeverIcon>
                                    <span className='text'>Absent 0</span>
                    </Link>
                    <p className="display-text">{displayText}</p>
                    </nav> */}

<div className="my-day-container MyDay"  style={{backgroundColor:"#bfc4ce", borderBottom:"5px solid #12aed2"}}>
      <div className="icon-container">
       
        <svg className="home-icon" viewBox="0 0 24 24">
          <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
        </svg>
      </div>
      <span className="my-day-text">My Day</span>
      <span className="my-day-count">0/0</span>
      
    </div>
    
    <div className="my-day-container Due" style={{backgroundColor:"#bfc4ce", borderBottom:"5px solid #3a5e6d"}}>
      <div className="icon-container">
      <FormatListBulletedIcon className="home-icon"
                                    sx={{
                                      minwidth: 0,
                                      mr:  "3",
                                      justifyContent: "center",
                                    }}
                                    >
                                    <InboxIcon /> 
                                    </FormatListBulletedIcon>
      </div>
      <span className="my-day-text">Due</span>
      <span className="my-day-count">0</span>
    </div>


    <div className="my-day-container In" style={{backgroundColor:"#bfc4ce",borderBottom:"5px solid #afdc5c "}}>
      <div className="icon-container">
      <AddTaskIcon className="home-icon"
                                    sx={{
                                      minwidth: 0,
                                      mr:  "3",
                                      justifyContent: "center",
                                    }}
                                    >
                                    <InboxIcon /> 
                                    </AddTaskIcon>
      </div>
      <span className="my-day-text">In</span>
      <span className="my-day-count">0/0</span>
     
    </div>

    <div className="my-day-container Out" style={{backgroundColor:"#bfc4ce", borderBottom:"5px solid #ff9f8a"}}>
      <div className="icon-container">
      < ArrowCircleRightIcon className="home-icon"
                                    sx={{
                                      minwidth: 0,
                                      mr:  "3",
                                      justifyContent: "center",
                                    }}
                                    >
                                    <InboxIcon /> 
                                    </ ArrowCircleRightIcon>
      </div>
      <span className="my-day-text">Out</span>
      <span className="my-day-count">0</span>
    </div>

    <div className="my-day-container Absent" style={{backgroundColor:"#bfc4ce" , borderBottom:"5px solid #fff282"}}>
      <div className="icon-container">
      < DeleteForeverIcon className="home-icon"
                                    sx={{
                                      minwidth: 0,
                                      mr:  "3",
                                      justifyContent: "center",
                                    }}
                                    >
                                    <InboxIcon /> 
                                    </ DeleteForeverIcon>
      </div>
      <span className="my-day-text">Absent</span>
      <span className="my-day-count">0</span>
    </div>
    </Stack>
           
            


            <Grid container spacing={2}  justifyContent="center" alignItems="center">
            <Grid item md={8} xs={10}>

            <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="100vh"
      bgcolor="#fff"
    >
      {/* <Paper
        elevation={3}
        style={{ padding: '20px', textAlign: 'center', maxWidth: '300px' }}
      > */}
        <NoChildrenIcon style={{ fontSize: '4rem', color: '#90caf9', marginBottom:"300px" }} />
        <Typography variant="h6" gutterBottom style={{ marginBottom:"300px"}}>
          No children profiles available
        </Typography>
      {/* </Paper> */}
    </Box>
         
       

              {/* <Stack spacing={2} direction={"row"}>

              <Card sx={{ maxWidth: 400 }}  style={{backgroundColor:"#f1f3f8" , marginTop:"30px", width:"900px"}}>
              <CardActionArea>
                <div className='logoo' >
                  <img  style={{
                    marginBottom:"40px",
                    marginTop:"20px",
                    marginLeft:"10px",
                    width:"60px",
                    height:"60px",
                    borderRadius:"50%",
                    border:"5px solid #c5c7c9",
                    backgroundColor:"#fff"}}
                    src='	https://nursary-new-dashboard.vercel.app/_next/image?url=%2Fsidebar%2Flogo.png&w=128&q=75' />
                    <p>
                    body
                    <br></br>
                  </p>
                  <span>month, week</span>

                
                  
               </div>
               <hr class="separator"/>

                <CardContent>
                  
                  <p variant="body2"  style={{color:"#6b7280"}} >
                  No Bookings Available
                  </p>
                </CardContent>
              </CardActionArea>

            </Card>

            <Card sx={{ maxWidth: 400 }}   style={{backgroundColor:"#f1f3f8" ,marginTop:"30px" , width:"900px"}}>
              <CardActionArea>
                <div className='logoo' >
                  <img  style={{
                    marginBottom:"40px",
                    marginTop:"20px",
                    marginLeft:"10px",
                    width:"60px",
                    height:"60px",
                    borderRadius:"50%",
                    border:"5px solid #c5c7c9",
                    backgroundColor:"#fff"}}
                    src='	https://nursary-new-dashboard.vercel.app/_next/image?url=%2Fsidebar%2Flogo.png&w=128&q=75' />
                    <p >
                    mohamed
                    <br></br>
                  </p>
                  <span style={{marginLeft: "-70px"}}>month, week</span>

                
                  
               </div>
               <hr class="separator"/>

                <CardContent>
                  
                  <p variant="body2"  style={{color:"#6b7280"}} >
                  No Bookings Available
                  </p>
                </CardContent>
              </CardActionArea>

            </Card>

                
              </Stack>

              <Stack spacing={2} direction={{xs : "row"}} sx={{ flexGrow: 1, pt: 3 }}>
              <Card sx={{ maxWidth: 400 }}   style={{backgroundColor:"#f1f3f8" , width:"900px"}}>
              <CardActionArea>
                <div className='logoo' >
                  <img  style={{
                    marginBottom:"40px",
                    marginTop:"20px",
                    marginLeft:"10px",
                    width:"60px",
                    height:"60px",
                    borderRadius:"50%",
                    border:"5px solid #c5c7c9",
                    backgroundColor:"#fff"}}
                    src='	https://nursary-new-dashboard.vercel.app/_next/image?url=%2Fsidebar%2Flogo.png&w=128&q=75' />
                    <p >
                    mohsen
                    <br></br>
                  </p>
                  <span style={{marginLeft: "-70px"}}>month, week</span>

                
                  
               </div>
               <hr class="separator"/>

                <CardContent>
                  
                  <p variant="body2"  style={{color:"#6b7280"}} >
                  No Bookings Available
                  </p>
                </CardContent>
              </CardActionArea>

            </Card>

            <Card sx={{ maxWidth: 400 }}   style={{backgroundColor:"#f1f3f8" , width:"900px"}}>
              <CardActionArea>
                <div className='logoo' >
                  <img  style={{
                    marginBottom:"40px",
                    marginTop:"20px",
                    marginLeft:"10px",
                    width:"60px",
                    height:"60px",
                    borderRadius:"50%",
                    border:"5px solid #c5c7c9",
                    backgroundColor:"#fff"}}
                    src='	https://nursary-new-dashboard.vercel.app/_next/image?url=%2Fsidebar%2Flogo.png&w=128&q=75' />
                    <p >
                    said
                    <br></br>
                  </p>
                  <span >month, week</span>

                
                  
               </div>
               <hr class="separator"/>

                <CardContent>
                  
                  <p variant="body2"  style={{color:"#6b7280"}} >
                  No Bookings Available
                  </p>
                </CardContent>
              </CardActionArea>

            </Card>

            


              </Stack> */}

{/* <Grid container spacing={2} justifyContent="center" alignItems="center">
        <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
         
        </Grid>
      </Grid> */}



            </Grid>



        <Grid item md={4} xs={12} sx={{ width: '90%' }}>
      {/* <Card sx={{ height: '80vh' }}>
        <CardContent>
          <h5 className='head-text'>Active Menu</h5>
          {showBoxes && (
            <div className="box-container">
              Small boxes
              <div className="box">Select All</div>
              <div className="box">nada</div>
              <div className="box">nada</div>
            </div>
          )}
          Toggle icon
          <div className="toggle-icon" onClick={toggleBoxes}>
            {showBoxes ? <RemoveCircleOutlineIcon  /> : <AddIcon/>}
            
          </div>
        </CardContent>
      </Card> */}
    </Grid>

            
          </Grid>


            

            <Box height={20} />


            
           

          </Box> 
        </Box>
      </div>

    </div>
  )
}


  