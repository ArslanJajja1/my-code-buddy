import { Container, Grid, Typography, Link,Paper,IconButton,Box,Stack,Input,Button } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';

function Footer() {
  
  return (
    <Paper>
      <Container maxWidth='xl' sx={{p:4}}>
        <Grid container spacing={2} sx={{display:'flex',justifyContent:'space-between',alignItems:'flex-start' }}>
          <Grid item xs={12} sm={6} md={3}>
            <Typography sx={{fontWeight:'bold',color:'primary.main',letterSpacing:'2px'}} variant="h6" component="h2" gutterBottom>
              CodeBuddy
            </Typography>
            <Typography variant="body2" sx={{letterSpacing:'1px'}} gutterBottom>
              We provide a range of code-related services using OpenAI APIs, including code correction, language conversion, bug detection, code explanation, code optimization, and AI-assisted code writing.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6}md={3}>
            <Typography sx={{fontWeight:'bold',color:'primary.main',letterSpacing:'2px'}} variant="h6" component="h2" gutterBottom>
              Features
            </Typography>
            <Typography variant="body2" sx={{letterSpacing:'1px'}} gutterBottom>
               Code Correction
            </Typography>
            <Typography variant="body2" sx={{letterSpacing:'1px'}} gutterBottom>
                Language Conversion
             </Typography>
            <Typography variant="body2" sx={{letterSpacing:'1px'}} gutterBottom>
                Bug Detection
             </Typography>
             <Typography variant="body2" sx={{letterSpacing:'1px'}} gutterBottom>
                Code Explanation
             </Typography><Typography variant="body2" sx={{letterSpacing:'1px'}} gutterBottom>
                Code Optimization
             </Typography><Typography variant="body2" sx={{letterSpacing:'1px'}} gutterBottom>
                AI Assisted Code-Writing
             </Typography>
          </Grid>
          <Grid item xs={12} sm={6}md={2}>
            <Typography sx={{fontWeight:'bold',color:'primary.main',letterSpacing:'2px'}}  variant="h6" component="h2" gutterBottom>
              About
            </Typography>
            <Typography variant="body2" sx={{letterSpacing:'1px'}} gutterBottom>
              Login
            </Typography>
            <Typography variant="body2" sx={{letterSpacing:'1px'}} gutterBottom>
              Features
            </Typography>
            <Typography variant="body2" sx={{letterSpacing:'1px'}} gutterBottom>
              Usecases
            </Typography>
            <Typography variant="body2" sx={{letterSpacing:'1px'}} gutterBottom>
              Pricing
            </Typography>
            <Typography variant="body2" sx={{letterSpacing:'1px'}} gutterBottom>
              FAQ's
            </Typography>
            <Typography variant="body2" sx={{letterSpacing:'1px'}} gutterBottom>
              Reviews
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6}md={3}>
            <Typography sx={{fontWeight:'bold',color:'primary.main',letterSpacing:'2px'}}  variant="h6" component="h2" gutterBottom>
              Contact Us
            </Typography>
            <Stack direction='row' sx={{alignItems:'center'}}>
                <IconButton color='primary'>
                    <FacebookIcon />
                </IconButton>
                <Typography variant="body2" sx={{letterSpacing:'1px'}} gutterBottom>Facebook</Typography>
            </Stack>
            <Stack direction='row' sx={{alignItems:'center'}}>
                <IconButton color='primary'>
                    <LinkedInIcon />
                </IconButton>
                <Typography variant="body2" sx={{letterSpacing:'1px'}} gutterBottom>LinkedIn</Typography>
            </Stack>
            <Stack direction='row' sx={{alignItems:'center'}}>
                <IconButton color='primary'>
                    <TwitterIcon />
                </IconButton>
                <Typography variant="body2" sx={{letterSpacing:'1px'}} gutterBottom>Twitter</Typography>
            </Stack>
            <Stack spacing={1} width='50%'>
            <Input placeholder="Enter Your Email"  />
            <Button variant='contained'>Subscribe</Button>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Paper>
  );
}

export default Footer;
