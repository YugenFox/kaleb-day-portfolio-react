import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";

const Project = ({title}) => {
  return (
    <Grid item xs={4}>
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
