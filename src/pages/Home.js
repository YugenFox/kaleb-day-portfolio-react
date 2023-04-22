import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Header from "../Components/Header";
import About from "../Components/About";
import Projects from "../Components/Projects";
import Box from "@mui/material/Box";

const styles = {
  portfolio: {
    background: '#616161',
    backgroundImage: 'linear-gradient(to right, #9bc5c3, #616161)',
    backgroundPosition: 'top left, bottom left',
    backgroundSize: '100% 100%',
    backgroundClip: 'content-box, border-box',
    color: '#fff',
    padding: '8px',
    textAlign: 'center',
  },
};


const Home = () => {
  

  return (
    <>
      <Container maxWidth="xl" sx={{ backgroundColor: "grey",
    height: '100vh' }}>
        <Box sx={styles.portfolio}>
          <Header />
          <About />
        </Box>
        <Projects />
      </Container>
    </>
  );
};
export default Home;
