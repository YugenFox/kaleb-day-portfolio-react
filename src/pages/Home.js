import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Header from "../Components/Header";
import About from "../Components/About";
import Projects from "../Components/Projects";
const Home = () => {
  return (
    <>
      <Container maxWidth="false" sx={{ backgroundColor: "grey" }}>
        <Typography variant="body1" color="initial">
          <Header />
          <About />
          <Projects />
        </Typography>
      </Container>
    </>
  );
};
export default Home;
