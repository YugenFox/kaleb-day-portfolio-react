import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Header from "../Components/Header";
import About from "../Components/About";
import Projects from "../Components/Projects";
const Home = () => {
  return (
    <>
      <Container maxWidth="xl" sx={{ backgroundColor: "grey" }}>
          <Header />
          <About />
          <Projects />
      </Container>
    </>
  );
};
export default Home;
