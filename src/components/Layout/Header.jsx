import { AppBar, Box, IconButton, Toolbar, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import "../../styles/HeaderStyles.css"
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';

const Header = () => {
 const [mobileOpen, setMobileOpen] = useState(false);

 //Menu Drawer

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
                />
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
        </Box>
    </div>
  )
}

export default Header