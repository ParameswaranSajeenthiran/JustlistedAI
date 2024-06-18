import {
  Grid,
  Typography,
  Container,
  Card,
  CardHeader,
  CardContent,
  Avatar,
} from "@mui/material";
import man1 from "../../../assets/home/man1.png";
import mediaRealEstate from "../../../assets/home/mediaRealEstate.png";

const Agents = () => {

  const styles = {
    paperContainer: {
      backgroundImage: `url(${mediaRealEstate})`,
      backgroundSize: "cover",
      width: "100%",
      height:500,
  
    },
  
  };
  return (
    <>
    <Grid
        item
        xs={12}
        style={styles.paperContainer}
        sx={{
          mt: 0,
          mb: { xs: 0, lg: 0 },
          height: { lg: "700px", xs: "500px" },
        }}
    >

    
      <Container maxWidth="lg" sx={{ mb: 10 }} id="Testimonial">
        <Typography
          sx={{ color: "gray", fontWeight: "700", fontSize: "36px" }}
          mb={5}
          textAlign={"center"}
        >
          What other agents are saying
        </Typography>
        <Grid container item>
          <Grid item xs={12} md={4}>
            <Card sx={{ maxWidth: 345 }}>
              <CardHeader
                avatar={
                  <>
                    <Grid item container>
                      <Avatar
                        sx={{ bgcolor: "red", flexGrow: 1 }}
                        aria-label="recipe"
                      >
                        <img src={man1} style={{ maxWidth: "100%" }} />
                      </Avatar>
                    </Grid>
                  </>
                }
                action={
                  <Typography sx={{ color: "yellow", fontSize: "40px" }}>
                    *****
                  </Typography>
                }
                avar={"true"}
              />
              <CardContent>
                <Typography variant="body2" color="text.secondary">
                  “JustListed.AI has transformed my listing descriptions and
                  social media posts. It's a time-saver that generates
                  captivating content tailored to each property. I highly
                  recommend it for real estate agents looking to stand out.”
                </Typography>
              </CardContent>
              <CardContent>
                <Typography variant="body2" sx={{ color: "black" }}>
                  Kyle Roberts DVM
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ color: "gray", fontSize: "8px" }}
                >
                  Customer Web Consultant
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
      </Grid>
    </>
  );
};

export default Agents;
