import { Box, Grid, Typography, Container } from '@mui/material';
import about from '../../../assets/home/about.png'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const aboutDet = ['Transforming Real Estate Listings with AI:', 'Personalized to Perfection:', 'Data-Driven for Accuracy and Relevance:', 'Efficiency Meets Creativity:','Seamless User Experience:','Continuous Learning and Improvement:','Building a Community of Successful Real Estate Professionals:']


const About = () => {
    // icon style
    const icon = { marginBottom: '20px', borderRadius: '50px', height: '24px', marginRight: '20px', width: '24px', background: 'linear-gradient(90deg, #EE4335 0%, #F9AA41 100%)', textAlign: 'center', alignItems: 'center', color: '#2A3342', fontWeight: '600', position: 'relative', display: 'flex' }

    return (
        <>
            <Container maxWidth='md' sx={{ mb: 10 }} id="About">
                <Box sx={{ textAlign: 'center', mb: 8 }}>
                    <Typography sx={{ color: '#EE4335', fontSize: '48px' }}>Welcome to JustListed AI </Typography>
                    <Typography sx={{ color: 'rgba(7, 43, 79, 0.8)' }}> 
                    Where we redefine the art of real estate listings through the power of artificial intelligence. In the dynamic and competitive world of real estate, standing out with compelling, engaging, and effective property descriptions is not just an advantage – it's a necessity. JustListed AI is your ultimate ally in this journey, offering a groundbreaking platform that blends cutting-edge AI technology with deep real estate insights to revolutionize how you create and present your listings.
                    </Typography>
                </Box>
                <Grid container item>
                    <Grid item lg={6}>
                        <img src={about} style={{ maxWidth: '100%' }} />
                    </Grid>
                    <Grid item lg={6}>
                        <Typography sx={{ color: '#555151', fontWeight: '600', fontSize: '20px' }}>With justlisted.ai, you can expect:</Typography>
                        <Box mt={5}>
                            {aboutDet.map((det, index) => (
                                <Grid item container key={index}>
                                    <Box sx={icon}><ArrowForwardIcon fontSize='small' sx={{ color: 'white' }} /></Box>
                                    <Typography mb={2}>{det}</Typography>
                                </Grid>
                            ))}

                        </Box>
                        <Box>
                            <Typography sx={{ color: 'rgba(7, 43, 79, 0.8)', fontSize: '14px' }}>Experience the future of real estate with justlisted.ai. Start your journey today and let our AI-powered platform help you find your dream property or maximize your real estate investments.</Typography>
                        </Box>
                    </Grid>
                </Grid>
            </Container>

        </>
    );
}

export default About;