import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Logo from "../../Assets/logo/Logo.png";
import "./navbar.css";
import Hamburger from 'hamburger-react';
import zIndex from '@mui/material/styles/zIndex';

const navItems = ['About Us', 'Past Event', 'Team', 'FAQ'];

function DrawerAppBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const [isOpen, setOpen] = React.useState(false)
  
  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <div className="ham-head" style={{ display: "flex" }}>
        <Typography variant="h6" sx={{ my: 2, marginLeft: "auto", marginRight:"auto", fontFamily:"Cinzel" }}>
          MUN
        </Typography>
      </div>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }} href={`#${item}`} onClick={()=>setOpen(prev=>!prev)}>
              <ListItemText primary={item} disableTypography={true}  sx={{fontFamily:"Cinzel" }}/>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  const [backgroundColor, setBackgroundColor] = React.useState("transparent");
 
  const handleScroll = (event) => {
      const { scrollTop, scrollHeight, clientHeight } = event.target;
      const scrollRatio = scrollTop / (scrollHeight - clientHeight);

      if (scrollRatio > 0.5) {
          setBackgroundColor("gray");
      } else {
          setBackgroundColor("transparent");
      }
  };

  return (
    <div className="nav">
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <AppBar component="nav" sx={{
          height: "8vh",
          background: "transparent",
          display: "flex",
          justifyContent: "center",
          boxShadow: "0",
          zIndex: "1201",
        }}>
          <Toolbar>
            <div className="ham">
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{ mr: 2, display: { sm: 'none' }, zIndex: "1201" }}
              >
                <Hamburger toggled={isOpen} toggle={setOpen}
                  aria-label="open drawer"
                  edge="start"
                  onClick={handleDrawerToggle}
                  className="hamburger-icon" 
                  sx={{zIndex:"1201"}}
                />
              </IconButton>
            </div>
            <div className="nav-logo">
              <img src={Logo} alt="" />
            </div>
            <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
              {navItems.map((item) => (
                <Button key={item} sx={{ color: '#fff', fontFamily:"Cinzel", background: backgroundColor }} href={`#${item}`}  onScroll={handleScroll}>
                  {item}
                </Button>
              ))}
            </Box>
            <button className='nav-button'>Contact Us</button>
          </Toolbar>
        </AppBar>
        <nav>
          <Drawer
            container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            anchor="right"
            ModalProps={{
              keepMounted: false, 
            }}
            sx={{
              display: { xs: 'block', sm: 'none' },
              '& .MuiDrawer-paper': {
                boxSizing: 'border-box',
                width: "100%",
                background: "rgba(88, 0, 140, 0.6)",
                boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
                backdropFilter: "blur(6px)",
                webkitBackdropFilter: "blur(6px)",
                border: "1px solid rgba(88, 0, 140, 0.3)",
                color: "white",
               zIndex:"1"
              }
            }}
          >
            {drawer}
          </Drawer>
        </nav>
      </Box>
    </div>
  );
}

export default DrawerAppBar;
