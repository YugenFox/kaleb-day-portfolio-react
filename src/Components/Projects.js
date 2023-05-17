import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Project from "./Project";

import projectFitnessFriendsImage from "../images/projects/pexels-leon-ardho-1552242.jpg"
import projectSoccerSiteImage from "../images/projects/kaleb-freestyle_in_front_of_UA_stadium.png"

const Projects = () => {
  return (
    <>
      <Container>
        <Box
          maxWidth="lg"
          marginX="7%"
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
        >
          <Typography variant="h2" color="primary">
            <Box sx={{ textAlign: "center", m: 1 }}>Projects:</Box>
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
            sx={{ backgroundColor: "yellow" }}
          >
            <Project title="Project 1" 
            projectImage={projectFitnessFriendsImage}/>
            <Project title="Project 2"
            projectImage={projectSoccerSiteImage} />
            <Project title="Project 3" />
            {/* will remove below project */}
            {/* <Grid item xs={4}>
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
            </Grid> */}

          </Grid>
        </Box>
      </Container>
    </>
  );
};
export default Projects;
