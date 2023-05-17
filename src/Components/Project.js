import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";

// add the flex fill to get the container to be used like the 3rd non Project Grid Item atm
// maybe use min height and min width, not sure
const Project = ({ title, projectImage }) => {
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
      <Paper
        sx={{
          flexGrow: 1,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            height: "200px", // Adjust the height to your desired size
            overflow: "hidden",
          }}
        >
          <Typography variant="h6" color="primary">
            {title}
          </Typography>
          <img
            src={projectImage}
            alt="project image"
            style={{
              width: "230px",
              height: "170px",
              objectFit: "cover",
              borderRadius: "25px",
            }}
          />
        </Box>
      </Paper>
    </Grid>
  );
};
export default Project;
