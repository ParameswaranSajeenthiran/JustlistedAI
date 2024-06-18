import { Grid, Typography, Button, Container } from '@mui/material';

const Connecting = () => {
    // style background
    const background = { background: 'radial-gradient(50% 50% at 50% 50%, #072B4F 0%, #072B4F 100%)', height: 'auto', padding: '30px' }
    return (
        <>
            <Container maxWidth='lg' sx={{ mb: 10 }} >
                <Grid container item sx={background}>
                    <Grid item xs={12} md={6}>
                        <Typography sx={{ color: 'white', fontWeight: '600', fontSize: { xs: '20px', lg: '36px' } }}>Connecting you to your perfect space.</Typography>
                        <Typography sx={{ color: '#8896AB', fontSize: { xs: '10px', lg: '20px' } }}>Start exploring today and make your dream lifestyle a reality.</Typography>
                    </Grid>
                    <Grid item xs={12} md={6} container justifyContent={'center'} alignItems={'center'} spacing={3}>
                        <Grid item md={4}>
                            <Button sx={{ background: 'linear-gradient(90deg, #EE4335 0%, #F9AA41 100%)', color: 'white', padding: '9px, 26px, 9px, 26px', fontSize: { xs: '8px', lg: '16px' } }}>Get Started</Button>
                        </Grid>
                        <Grid item md={4}>
                            <Button sx={{ background: '#FFFFFF', color: 'black', padding: '9px, 26px, 9px, 26px', fontSize: { xs: '8px', lg: '16px' } }}>How it works</Button>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </>
    );
}

export default Connecting;