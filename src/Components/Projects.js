import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Project from "./Project";

const Projects = () => {
  return (
    <>
      <Container maxWidth="lg">
        <Typography variant="h2" color="primary" >
          <Box sx={{ textAlign: 'center', m: 1 }}>Projects:</Box>
        </Typography>
        <Grid
          container
          spacing={1}
          direction="row"
          justifyContent="center"
          alignItems="center"
          alignContent="center"
          wrap="wrap"
          height={480}
        >
          <Project 
          title='Project 1'
          />
          <Project 
          title='Project 2'
          />
          <Grid item xs={4}>
            <Paper>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <Typography variant="h6" color="primary">
                  Project
                </Typography>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};
export default Projects;
