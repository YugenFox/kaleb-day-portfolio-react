import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";

// add the flex fill to get the container to be used like the 3rd non Project Grid Item atm
  // maybe use min height and min width, not sure
const Project = ({ title }) => {
  return (
    <Grid
      item
      xs={4}
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "100px",
        spacing: "1",
        justifyContent: "center",
        alignItems: "center",
        alignContent: "center",
        wrap: "wrap",
      }}
    >
      <Paper>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Typography variant="h6" color="primary">
            {title}
          </Typography>
        </Box>
      </Paper>
    </Grid>
  );
};
export default Project;
