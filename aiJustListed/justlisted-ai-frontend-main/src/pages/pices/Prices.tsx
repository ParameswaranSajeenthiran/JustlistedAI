import { Box, Grid, Typography, Container, Button, Switch } from '@mui/material';
import PriceCard from './components/PriceCard';

function Prices() {
  return (
    <>
            <Container maxWidth='lg' sx={{ mt: 15, mb: 10 }}>
                <Box sx={{ textAlign: 'center' }}>
                    <Button sx={{ border: 'solid 1px #F9AA41', color: '#F9AA41', borderRadius: '30px' }}>PRICING</Button>
                    <Typography sx={{ fontSize: { xs: '20px', lg: '48px' }, color: '#2A3342', fontWeight: '600' }}>Flexible pricing plan for your startup</Typography>
                    <Grid item container justifyContent={'center'}>
                        <Typography>Billed Monthly</Typography>
                        <Switch defaultChecked color="warning" />
                        <Typography>Billed Annually</Typography>
                    </Grid>
                </Box>
            </Container>
            <PriceCard />
        </>
  )
}

export default Prices
