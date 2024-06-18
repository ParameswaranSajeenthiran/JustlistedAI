import { Box, Grid, Typography } from '@mui/material';
import howwrk from '../../../assets/home/howwork.png'

// list how work
const works = [
    { num: 1, head1: 'Sign up for free account', head2: 'Create an account or log in using your credentials to gain access to personalized features.' },
    { num: 2, head1: 'Enter property address', head2: 'Use the advanced search functionality to input specific criteria for your property search.' },
    { num: 3, head1: 'Provide key property specs', head2: 'The website generates a list of property listings that match your search criteria.' },
    { num: 4, head1: 'Generate the perfect listing description in seconds!', head2: 'View the generated property listings, presented in a user-friendly format.' },
]

// style icon
const icon = { marginBottom: '20px', borderRadius: '50px', height: { xs: '30px', lg: '48px' }, width: { xs: '30px', lg: '48px' }, background: 'linear-gradient(90deg, #EE4335 0%, #F9AA41 100%)', justifyContent: 'center', alignItems: 'center', color: 'white', fontWeight: '600', display: 'flex' }

const Howwork = () => {
    return (
        <>
            <Grid container item sx={{ background: '#072B4F', padding: { xs: '20px', lg: '50px' } }} mb={10} id="How it work">
                <Grid item xs={12} md={6}>
                    <img src={howwrk} style={{ maxWidth: '100%' }} />
                </Grid>
                <Grid item xs={12} md={6}>
                    <Box mb={4} sx={{ textAlign: { xs: 'center', lg: 'start' } }}>
                        <Typography sx={{ color: 'white' }}>How it works</Typography>
                        <Typography sx={{ color: 'white', fontSize: { xs: '24px', lg: '48px' } }}>Gain more insight into how people use your</Typography>
                    </Box>
                    <Grid item container >
                        {works.map((wrk, index) => (
                            <Grid item xs={6} key={index}>
                                <Grid item container>
                                    <Box sx={icon}><b>{wrk.num}</b></Box>
                                </Grid>
                                <Typography sx={{ color: 'white', fontWeight: '600', fontSize: { xs: '14px', lg: '20px' } }}>{wrk.head1}</Typography>
                                <Typography sx={{ color: '#8896AB', fontSize: { xs: '8px', lg: '16px' } }}>{wrk.head2}</Typography>
                            </Grid>
                        ))}
                    </Grid>
                </Grid>
            </Grid>
        </>
    );
}

export default Howwork;