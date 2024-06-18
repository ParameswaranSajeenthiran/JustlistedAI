import slide from "../../../assets/home/slideimg.png";
import { Grid, Typography, Button, Paper, Container } from "@mui/material";
import video from "../../../assets/home/Video.png";
import womanLake from "../../../assets/home/womanLake.png";

import titleCOntainer from "../../../assets/home/titleContainer.png";
import group1 from "../../../assets/home/group1.png";
import test from "../../../assets/home/test.png";
// style for backgronnd image
const styles = {
  paperContainer: {
    backgroundImage: `url(${test})`,
    backgroundSize: "cover",
    width: "100%",
    height:1500,

  },
  titleContainer: {
    backgroundImage: `url(${titleCOntainer})`,
    backgroundSize: "cover",
    width: "200%",
    height: 600,
  }
};

const Slide = () => {
  return (
    <>
      <Grid
        item
        xs={12}
        style={styles.paperContainer}
        paddingTop={0}
        sx={{
          mt: 0,
          mb: { xs: 0, lg: 0 },
          height: { lg: "600px", xs: "500px" },
        }}
      >
        <Container  sx={{ textAlign: "center"  ,width:2000}}>
          {/* <Typography
            sx={{
              fontSize: { xs: "20px", lg: "60px" },
              fontWeight: "700",
              color: "#EE4335",
            }}
          >
            Revolutionize Your Real Estate Listings with JustListed AI
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: "20px", lg: "60px" },
              fontWeight: "700",
              color: "#072B4F",
            }}
          >
            Where Innovation Meets Efficiency{" "}
          </Typography> */}
        </Container>
        {/* <Container maxWidth="sm" sx={{ textAlign: "center" }}>
          <Typography
            sx={{ color: "#072B4F", fontSize: { xs: "8px", lg: "16px" } }}
          >
           Craft Compelling Listings in Seconds, Not Hours
          </Typography>
        </Container>
        <Grid container item justifyContent={"center"} mt={3} spacing={2}>
          <Grid lg={2} item>
            <Button
              sx={{
                background: "linear-gradient(90deg, #EE4335 0%, #F9AA41 100%)",
                color: "white",
                padding: "10px",
              }}
            >
              Get Started for Free
            </Button>
          </Grid>
          <Grid lg={2} item>
            <Button
              sx={{
                border: "solid 1px black ",
                color: "black",
                padding: "10px",
              }}
            >
              How it works
            </Button>
          </Grid>
        </Grid> */}
        {/* <Grid item container justifyContent={"center"} mt={5}>
          <img src={video} style={{ maxWidth: "100%" }} />
        </Grid> */}
      </Grid>
     

    </>
  );
};

export default Slide;
