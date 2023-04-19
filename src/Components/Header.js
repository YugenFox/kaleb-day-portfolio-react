import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";

const Header = () => {
  return (
    <Box p={3} sx={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
    }}>
      <img
        src="https://kalebsday.netlify.app/images/kaleb-professional-headshot.jpg"
        alt=""
        className="img"
      ></img>
       <Box>
         <Typography variant="h2" component="h2" color="primary">
              Kaleb Day
            </Typography>
            <Typography variant="subtitle1" component="subtitle1" color="primary">
              Software Engineer
            </Typography>
       </Box>
    </Box>
  );
};
export default Header;

{
  /* <Grid container spacing={5}>
      <Grid item xs={4}>
        <Box maxWidth="sm">
          <img
            src="https://kalebsday.netlify.app/images/kaleb-professional-headshot.jpg"
            alt=""
            className="img"
          ></img>
        </Box>
      </Grid>
      <Grid item xs={8}>
        <Box>
          <Typography variant="h2" component="h2" color="primary">
            Kaleb Day
          </Typography>
          <Typography variant="subtitle1" component="subtitle1" color="primary">
            Software Engineer
          </Typography>
        </Box>
      </Grid>
    </Grid> */
}

// <header>
{
  /* <img
src="https://kalebsday.netlify.app/images/kaleb-professional-headshot.jpg"
alt=""
className="img"
></img>
<h1>Kaleb Day</h1>
<span>Software Engineer</span>
</header> */
}
