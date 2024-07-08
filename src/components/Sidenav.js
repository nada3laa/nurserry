import * as React from 'react';
import { styled, useTheme, Theme, CSSObject } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
 import { GroupAdd} from '@mui/icons-material';
// import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import LogoutIcon from '@mui/icons-material/Logout';
import ListItemText from '@mui/material/ListItemText';
import AddHomeIcon from '@mui/icons-material/AddHome';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import InsertInvitationIcon from '@mui/icons-material/InsertInvitation';
import GradingIcon from '@mui/icons-material/Grading';
import BedroomParentIcon from '@mui/icons-material/BedroomParent';
import EscalatorWarningIcon from '@mui/icons-material/EscalatorWarning';
import FolderSharedIcon from '@mui/icons-material/FolderShared';
import StackedLineChartIcon from '@mui/icons-material/StackedLineChart';
import InboxIcon from '@mui/icons-material/MoveToInbox';


import FeedIcon from '@mui/icons-material/Feed';
import KeyboardCommandKeyIcon from '@mui/icons-material/KeyboardCommandKey';
import SettingsIcon from '@mui/icons-material/Settings';
import {useNavigate} from "react-router-dom";
import { useAppStore } from '../appStore';
import { Link } from 'react-router-dom';




const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));


const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

export default function Sidenav() {
  const theme = useTheme();
  // const [open, setOpen] = React.useState(true);
  const navigate = useNavigate();
  const open = useAppStore((state)=>state.dopen);

  return (
    <Box sx={{ display: 'flex' }}>
      
      <Box height={30} />
      <CssBaseline />
  
      <Drawer variant="permanent" open={open} >
        {/* <DrawerHeader> */}

            <img style={{
              width:"50%",
              margin:"auto",
              borderRadius:"50%",
              backgroundColor:"#fff"}}
               src='https://nursary-new-dashboard.vercel.app/_next/image?url=%2Fsite-logo.png&w=384&q=75' />
          
          
          
          {/* <IconButton>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton> */}
        {/* </DrawerHeader> */}

        <Divider />
        <List>

        <ListItem className='dd' disablePadding sx={{ display: "block" }} onClick={()=>{navigate("/Home")}}>
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
              }}
            >
              <AddHomeIcon
                sx={{
                  minwidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                }}
              >
                <InboxIcon /> 
              </AddHomeIcon>
              <ListItemText primary="Home" sx={{ opacity: open ? 1 : 0 }} />
            </ListItemButton>
          </ListItem>

       

          <Accordion className='accord' >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="dropdown-content"
              id="dropdown-header"

            >
                 
              <ListItemButton sx={{ display: "contents" }}>

              <LibraryBooksIcon
                sx={{
                  minwidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                }}
              >
                <InboxIcon /> 
                
              </LibraryBooksIcon>
              <ListItemText primary="Booking" sx={{ opacity: open ? 1 : 0 }} />
            </ListItemButton>
             
                
            </AccordionSummary>
            <AccordionDetails >
              <List>
                
              <ListItem className='dd' disablePadding sx={{ display: "block" }} onClick={()=>{navigate("/Invicing")}}>
            <ListItemButton
              sx={{
                minHeight: 40,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
              }}
            >
              <InsertInvitationIcon
                sx={{
                  minwidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                }}
              >
                <InboxIcon /> 
              </InsertInvitationIcon>
              <ListItemText primary="Invicing" sx={{ opacity: open ? 1 : 0 }} />
            </ListItemButton>
          </ListItem>

<ListItem className='dd' disablePadding sx={{ display: "block" }} onClick={()=>{navigate("/Setting")}}>
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
              }}
            >
              <SettingsIcon
                sx={{
                  minwidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                }}
              >
                <InboxIcon /> 
              </SettingsIcon>
              <ListItemText primary="Settings" sx={{ opacity: open ? 1 : 0 }} />
            </ListItemButton>
          </ListItem>

              </List>
            </AccordionDetails>
          </Accordion>

        <ListItem className='dd' disablePadding sx={{ display: "block" }} onClick={()=>{navigate("/Feed")}}>
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
              }}
            >
              <GradingIcon
             
                sx={{
                  minwidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                }}
              >
                <InboxIcon /> 
              </GradingIcon>
              <ListItemText primary="Feed" sx={{ opacity: open ? 1 : 0 }} />
            </ListItemButton>
          </ListItem>

        <ListItem className='dd' disablePadding sx={{ display: "block" }} onClick={()=>{navigate("/Activity")}}>
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
              }}
            >
              <StackedLineChartIcon
                sx={{
                  minwidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                }}
              >
                <InboxIcon /> 
              </StackedLineChartIcon>
              <ListItemText primary="Activity" sx={{ opacity: open ? 1 : 0 }} />
            </ListItemButton>
          </ListItem>

        <ListItem className='dd' disablePadding sx={{ display: "block" }} onClick={()=>{navigate("/Messages")}}>
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
              }}
            >
              <FeedIcon
                sx={{
                  minwidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                }}
              >
                <InboxIcon /> 
              </FeedIcon>
              <ListItemText primary="Messages" sx={{ opacity: open ? 1 : 0 }} />
            </ListItemButton>
          </ListItem>
        <ListItem className='dd' disablePadding sx={{ display: "block" }} onClick={()=>{navigate("/Room")}}>
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
              }}
            >
              <BedroomParentIcon
                sx={{
                  minwidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                }}
              >
                <InboxIcon /> 
              </BedroomParentIcon>
              <ListItemText primary="Room" sx={{ opacity: open ? 1 : 0 }} />
            </ListItemButton>
          </ListItem>
        <ListItem className='dd' disablePadding sx={{ display: "block" }} onClick={()=>{navigate("")}}>
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
              }}
            >
              <EscalatorWarningIcon
                sx={{
                  minwidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                }}
              >
                <InboxIcon /> 
              </EscalatorWarningIcon>
              <ListItemText primary="Children" sx={{ opacity: open ? 1 : 0 }} />
            </ListItemButton>
          </ListItem>


        <ListItem className='dd' disablePadding sx={{ display: "block" }} onClick={()=>{navigate("")}}>
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
              }}
            >
              <FolderSharedIcon
                sx={{
                  minwidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                }}
              >
                <InboxIcon /> 
              </FolderSharedIcon>
              <ListItemText primary="Staff" sx={{ opacity: open ? 1 : 0 }} />
            </ListItemButton>
          </ListItem>

          
    <ListItem className='dd' disablePadding sx={{ display: "block" }} onClick={()=>{navigate("/settings")}}>
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
              }}
            >
              <SettingsIcon
                sx={{
                  minwidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                }}
              >
                <InboxIcon /> 
              </SettingsIcon>
              <ListItemText primary="Settings" sx={{ opacity: open ? 1 : 0 }} />
            </ListItemButton>
          </ListItem>

       









        <ListItem className=' logout' disablePadding sx={{ display: "block" , marginTop:"70%" }} onClick={()=>{navigate("")}}>
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
              }}
            >
              <LogoutIcon
                sx={{
                  minwidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                }}
              >
                <InboxIcon /> 
              </LogoutIcon>
              <ListItemText primary="Log Out" sx={{ opacity: open ? 1 : 0 }} />
            </ListItemButton>
          </ListItem>


        </List>

      </Drawer>
      
    </Box>
  );
}