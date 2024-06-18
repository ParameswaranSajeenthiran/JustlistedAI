import { Box, Grid, Typography, Container, Button, Card } from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';
import baseUrl from "../../../baseURL";

// price details 
const price = [
    { head1: 'Professional', head2: 'For Individual Users', price: '10' },
    { head1: 'Gold', head2: 'For bigger teams', price: '99' },
    { head1: 'Platinum', head2: 'Unlimited possibilities', price: '799' },
]

const PriceCard = () => {

    const handleSubmit = (e: any) => {
        e.preventDefault();
        console.log(e.target.name,"testtt")
        
        baseUrl
          .patch("user/findOneupdate", {"subscription":e.target.name})
          .then((response) => {
            console.log(response);
            // if (response.data.success ) {
            //   toast("user update successfully")
            // }
          })
          .catch((error) => {
            console.log(error);
          });
      };


    
    // icon style
    const icon = { marginBottom: '20px', borderRadius: '50px', height: '24px', marginRight: '20px', width: '24px', background: 'linear-gradient(90deg, #EE4335 0%, #F9AA41 100%)', textAlign: 'center', alignItems: 'center', color: '#2A3342', fontWeight: '600', position: 'relative', display: 'flex' }
    return (
        <Container maxWidth='lg' sx={{ mb: 10 }}>
            <Grid item container>
                {price.map((det, index) => (
                    <Grid item xs={12} lg={4} sx={{ textAlign: 'center' }}>
                        <Card sx={{ boxShadow: 'none', mb: 5 }}>
                            <Box mb={5}>
                                <Typography sx={{ fontSize: '36px', color: 'Gray' }}>{det.head1}</Typography>
                                <Typography>{det.head2}</Typography>
                            </Box>
                            <Box sx={{ display: 'flex', justifyContent: 'center' }} mb={5}>
                                <Typography sx={{ color: 'black', fontWeight: '600' }}>$</Typography>
                                <Typography sx={{ fontSize: '72px', color: '#2A3342' }}> {det.price}</Typography>
                                <Typography sx={{ alignItems: 'end', display: 'flex', fontWeight: '600' }}>/mo</Typography>
                            </Box>

                            <Box sx={{ mb: 5 }}>
                                <Button name={det.head1} onClick={handleSubmit} sx={{ background: ' linear-gradient(90deg, #EE4335 0%, #F9AA41 100%)', color: 'white' }}>Get Started Now</Button>
                            </Box>

                            <Grid item container sx={{ justifyContent: 'center' }}>
                                <Box sx={icon}><CheckIcon fontSize='small' sx={{ color: 'white' }} /></Box>
                                <Typography>Lorem ipsum dolor sit amet</Typography>
                            </Grid>
                            <Grid item container sx={{ justifyContent: 'center' }}>
                                <Box sx={icon}><CheckIcon fontSize='small' sx={{ color: 'white' }} /></Box>
                                <Typography>Lorem ipsum dolor sit amet</Typography>
                            </Grid>
                        </Card>
                    </Grid>
                ))}

            </Grid>
        </Container>
    );
}

export default PriceCard;