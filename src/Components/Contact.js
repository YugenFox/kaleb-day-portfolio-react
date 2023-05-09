import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { IconButton } from '@mui/material';
import { Facebook, Twitter, Instagram } from '@mui/icons-material';


const Contact = () => {
  return (
    <Box bgcolor="primary.main" py={3} px={2}>
      <Typography variant="h6" align="center" gutterBottom>
        Please feel free to reach out to me through my socials below!
      </Typography>
      <Box display="flex" justifyContent="center">
        <IconButton href="https://www.facebook.com/">
          <Facebook />
        </IconButton>
        <IconButton href="https://www.twitter.com/">
          <Twitter />
        </IconButton>
        <IconButton href="https://www.instagram.com/">
          <Instagram />
        </IconButton>
      </Box>
    </Box>
  );
}
export default Contact;

/* const Contact = () => {
  return (
    <Box
      p={3}
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "400px",
        // backgroundColor: "blueviolet",
      }}
    >
      <Box>
        <Typography sx={{ fontWeight: "bold", m: 1 }} variant="subtitle1" component="subtitle1" color="primary">
          Curious what we could make together? Please feel free to reach out to
          me through my socials below!
        </Typography>
      </Box>
      
    </Box>
  );
};
*/
