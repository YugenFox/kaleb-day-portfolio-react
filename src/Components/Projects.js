import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Project from "./Project";

import projectFitnessFriendsImage from "../images/projects/pexels-leon-ardho-1552242.jpg";
import projectSoccerSiteImage from "../images/projects/kaleb-freestyle_in_front_of_UA_stadium.png";

import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import ListSubheader from "@mui/material/ListSubheader";
import IconButton from "@mui/material/IconButton";
import InfoIcon from "@mui/icons-material/Info";

const Projects = () => {
  // Calculate the height based on the number of projects and desired item height
  const imageListHeight = Math.ceil(projects.length / 2) * 250;

  return (
    <Container>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "20px",
          // height: "100vh",
        }}
      >
        <ImageList sx={{ width: 500, height: imageListHeight}}>
          <ImageListItem key="Subheader" cols={2}>
            <ListSubheader component="div">My Projects</ListSubheader>
          </ImageListItem>
          {projects.map((item) => (
            <ImageListItem key={item.img}>
              <img
                src={`${item.img}?w=248&fit=crop&auto=format`}
                srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                alt={item.title}
                loading="lazy"
                style={{
                  borderRadius: "25px",
                }}
              />
              <ImageListItemBar
                title={item.title}
                subtitle={item.author}
                actionIcon={
                  <IconButton
                    sx={{ color: "rgba(50, 255, 255, 0.54)" }}
                    aria-label={`info about ${item.title}`}
                  >
                    <InfoIcon />
                  </IconButton>
                }
              />
            </ImageListItem>
          ))}
        </ImageList>
      </Box>
    </Container>
  );
};
export default Projects;

const projects = [
  {
    img: projectFitnessFriendsImage,
    title: "Fitness Friends",
    author: "Node.js, MongoDB",
  },
  {
    img: projectSoccerSiteImage,
    title: "Freestyle Soccer Site",
    author: "@rollelflex_graphy726",
  },
  {
    img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
    title: "Burger",
    author: "@rollelflex_graphy726",
  },
];

{
  /*
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
            

          </Grid>
        </Box>
      </Container>
    </> */
}

{
  /* will remove below project */
}
{
  /* <Grid item xs={4}>
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
            </Grid> */
}
