import { AppBar, Box, Divider, Drawer, IconButton, Toolbar, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import "../../styles/HeaderStyles.css"
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';

const Header = () => {
 const [mobileOpen, setMobileOpen] = useState(false);
 
 //Handle Menu Click
 const handleDrawerToggle = () => {
  setMobileOpen(!mobileOpen);
 }

 //Menu Drawer
const drawer = (
  <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
    <Typography
      component="div"
      sx={{ flexGrow: 1 , bgcolor:"#3d3836", height: "120px"}}
    >
      <img src="/logo_tt.png" alt="Logo" width={180} height={150}/>
        </Typography>
        <Divider/>
            <ul className='mobile-navigation'>
              <li>
                <Link to={'/'}>Home</Link>
              </li>
              <li>
                <Link to={'/menu'}>Menu</Link>
              </li>
              <li>
                <Link to={'/about'}>About</Link>
              </li>
              <li>
                <Link to={'/contact'}>Contact</Link>
              </li>
            </ul>
  </Box>
);

  return (
    <div>
        <Box>
          <AppBar component={"nav"} sx={{bgcolor:"black"}}>
            <Toolbar className="navbar">
              <IconButton>
                <MenuIcon 
                color="inherit" 
                arial-label="open drawer" 
                edge= "start" 
                sx={{
                  mr:2,
                  display: { sm: "none" },
                  color: "white"
                }}
                onClick={handleDrawerToggle}
                />
                <MenuIcon/>
              </IconButton>
              <Typography
                component="div"
                sx={{ flexGrow: 1 }}
              >
                <img src="/logo_tt.png" alt="Logo" width={180} height={150}/>
              </Typography>
              <Box sx={{display: {xs: "none", sm: "block"} }}>
                <ul className='navigation-menu'>
                  <li>
                    <Link to={'/'}>Home</Link>
                  </li>
                  <li>
                    <Link to={'/menu'}>Menu</Link>
                  </li>
                  <li>
                    <Link to={'/about'}>About</Link>
                  </li>
                  <li>
                    <Link to={'/contact'}>Contact</Link>
                  </li>
                </ul>
              </Box>
            </Toolbar>
          </AppBar>
          <Box component="nav">
            <Drawer variant='temporary' 
            open={mobileOpen} 
            onClose={handleDrawerToggle}
            sx={{display:{xs:'block', sm:'none'},
                "& .MuiDrawer-paper" : {
                  boxSizing: "border-box",
                  width: "270px"
                },
            }}
            >
              {drawer}
            </Drawer>
          </Box>
          <Box>
            
          </Box>
          <Box sx={{p:3}}>
            <Toolbar/>
          </Box>
        </Box>
    </div>
  )
}

export default Header