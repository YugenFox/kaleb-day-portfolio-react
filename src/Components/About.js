import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
const About = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        color: "white" // set the text color to white, without color in typography would be white, but just because inheriting from parent Box component...maybe from Home's weird background style
      }}
    >
      <Typography textAlign="center" variant="body1" >
        Please take a moment to look at my past work
        <br />
        Together there is something we can create/build to add value to your
        current business or personal project :)
      </Typography>
    </Box>
  );
};
export default About;

{
  /* <div>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa laborum aliquid exercitationem inventore, tempore voluptate architecto. Doloribus nam in soluta at reprehenderit tempore magnam, sequi error dolorum non rerum quidem.</p>
    </div> */
}
