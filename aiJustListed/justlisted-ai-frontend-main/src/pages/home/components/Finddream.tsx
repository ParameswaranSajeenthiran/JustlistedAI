import { Box, Grid, Typography } from '@mui/material';

// dream details
const dream = [
    { number: '23500', name: 'Property Listings' },
    { number: '10m', name: 'Search Results' },
    { number: '4023', name: 'hours used' },
    { number: '3.500', name: 'Clients' },
]

// style background 
const background = { background: 'radial-gradient(50% 50% at 50% 50%, #072B4F 0%, #072B4F 100%)', height: { xs: 'auto', lg: 'auto' }, mb: 10, padding: '30px' }

const Finddream = () => {
    return (
        <>
            <Grid item sx={background}>
                <Box sx={{ textAlign: 'center' }}>
                    <Typography sx={{ color: 'white', fontWeight: '700', fontSize: { lg: '48px', xs: '24px' }, mb: 2 }}> Find your dream home with ease</Typography>
                    <Typography sx={{ color: 'gray' }}>Find your slice of paradise with just. Whether you're searching for a cozy family home, a luxurious beachfront villa, or a trendy urban loft, our comprehensive collection of properties offers something for everyone.</Typography>
                </Box>

                <Grid container item mt={4}>
                    {dream.map((dre, index) => (
                        <Grid item md={3} xs={3} textAlign={'center'} key={index}>
                            <Typography sx={{ color: '#EE4335', fontWeight: '700', fontSize: { xs: '20px', lg: '48px' } }}>{dre.number}</Typography>
                            <Typography sx={{ color: '#8896AB', fontWeight: '500', fontSize: { xs: '8px', lg: '20px' } }}>{dre.name}</Typography>
                        </Grid>
                    ))}
                </Grid>
            </Grid>
        </>
    );
}

export default Finddream;