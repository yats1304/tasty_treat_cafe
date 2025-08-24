import { Box, Typography } from "@mui/material";
import LocationPinIcon from '@mui/icons-material/LocationPin';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';

const Footer = () => {
  return (
    <Box component="footer" sx={{
      textAlign:"center",
      bgcolor:"#1A1A19",
      color:"white",
      p:1,
      mt: 'auto',          
      boxShadow: '0 -4px 10px -3px rgba(0,0,0,0.6)',
      position: 'sticky',
      bottom: 0,
      zIndex: 1000
    }}>
      <Box sx={{
        my:0, 
        "& svg": {
          fontSize:"30px",
          cursor:"pointer",
        },
        "& svg:hover":{
          color:"goldenrod",
          transform:"translateX(2px)",
          transition:"all 400ms"
        }
      }}>
        <LocationPinIcon/>
        <LocalShippingIcon/>
      </Box>
      <Typography variant="h5" sx={{
        "@media (max-width:600px)": {
          fontSize: "1rem",
        }
      }}>
        All Right Reserved &copy; Tasty Treat Cafe
      </Typography>
    </Box>
  )
}


export default Footer