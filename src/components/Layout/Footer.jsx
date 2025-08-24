import { Box, Typography } from "@mui/material";
import LocationPinIcon from '@mui/icons-material/LocationPin';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        textAlign: "center",
        bgcolor: "#1A1A19",
        color: "white",
        p: 1,
        mt: 'auto',
        boxShadow: '0 -4px 10px -3px rgba(0,0,0,0.6)',
        position: 'fixed',
        bottom: 0,
        width: '100%',
        zIndex: 1300,
        mb: 'auto',
        overflow: 'hidden'
      }}
    >
      <Box
        sx={{
          my: 0,
          "& svg": {
            fontSize: "30px",
            cursor: "pointer",
          },
          "& svg:hover": {
            color: "goldenrod",
            transform: "translateX(2px)",
            transition: "all 400ms"
          },
          display: "inline-flex",
          gap: 3,
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <a
          href="https://www.google.com/maps/place/Tasty+treat+cafe/@19.7050705,72.7850021,19.49z/data=!4m6!3m5!1s0x3be71d0000b220d3:0x2032194b7c392869!8m2!3d19.70518!4d72.7850474!16s%2Fg%2F11yg8w_vxz?entry=ttu&g_ep=EgoyMDI1MDgxOS4wIKXMDSoASAFQAw%3D%3D"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "inherit", textDecoration: "none" }}
          aria-label="Open Tasty Treat Cafe location on Google Maps"
        >
          <LocationPinIcon />
        </a>

        <a
          href="https://www.zomato.com/mumbai/tasty-treat-palghar"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "inherit", textDecoration: "none" }}
          aria-label="Visit Tasty Treat Cafe on Zomato"
        >
          <LocalShippingIcon />
        </a>
      </Box>

      <Typography
        variant="h6"
        fontSize="15px"
        sx={{
          "@media (max-width:600px)": {
            fontSize: "0.8rem",
          },
          mt: 1
        }}
      >
        All Right Reserved &copy; Tasty Treat Cafe
      </Typography>
    </Box>
  );
};

export default Footer;
