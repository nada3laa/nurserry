
import React from 'react';
import { Container, Grid, Card, CardContent, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import LearningIcon from '@mui/icons-material/School';  // Use appropriate icons or custom SVGs
import GeneralIcon from '@mui/icons-material/Category';
import FoodIcon from '@mui/icons-material/Fastfood';
import ToiletIcon from '@mui/icons-material/Wc';
import NapIcon from '@mui/icons-material/AirlineSeatFlat';
import IncidentIcon from '@mui/icons-material/Healing';
import { Box } from "@mui/material";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import Sidenav from '../../components/Sidenav';


const CardContainer = styled(Card)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '150px',
    color: '#fff',
    fontSize: '1.2rem',
    [theme.breakpoints.down('sm')]: {
      height: '120px',
      
    },
  }));
  
  const learning = {
    backgroundColor: '#03A9F4',
    cursor:"pointer",
  
  };
  
  const general = {
    backgroundColor: '#FF9800',
  };
  
  const food = {
    backgroundColor: '#4CAF50',
  };
  
  const toileting = {
    backgroundColor: '#673AB7',
  };
  
  const nap = {
    backgroundColor: '#9C27B0',
  };
  const incident = {
    backgroundColor: '#E57373',
  };


const NewActivity = () => {

    const navigate = useNavigate();
    const cards = [
        { id: 1, title: 'Learning & Development', style: learning, icon: <LearningIcon />, route: '/Feed' },
        { id: 2, title: 'General', style: general, icon: <GeneralIcon /> },
        { id: 3, title: 'Food/Drink', style: food, icon: <FoodIcon /> },
        { id: 4, title: 'Toileting', style: toileting, icon: <ToiletIcon /> },
        { id: 5, title: 'Nap', style: nap, icon: <NapIcon /> },
        { id: 6, title: 'Accident/Incident', style: incident, icon: <IncidentIcon />, route: '/incident' },
      ];
    
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
      <Typography variant="h6">New Activity</Typography>
      <Container>
      <Grid container spacing={2}>
        {cards.map((card) => (
          <Grid item xs={12} sm={6} key={card.id}>
            <CardContainer style={card.style}  onClick={() => navigate(card.route)}>
              <CardContent>
                {card.icon}
                <Typography variant="h6">{card.title}</Typography>
              </CardContent>
            </CardContainer>
          </Grid>
        ))}
      </Grid>
    </Container>
    </Box>
    </form>
    </div>
  
  );
};

export default NewActivity;