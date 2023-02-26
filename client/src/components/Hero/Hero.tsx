import Navbar from '../Navbar/Navbar'
import useStyles from './styles'
import {Container,Stack,Box,Typography,Button,Divider} from '@mui/material'

const Hero = () => {
    const classes = useStyles()
  return (
    <Box >
        <Navbar />
        <Divider />
        <Container maxWidth='xl' sx={{mt:{xs:1,md:'5rem'}}}>
            <Stack
             direction={{xs:'column',md:'row'}}
             spacing={{xs:1,sm:2,md:4}}
             sx={{mt:{xs:1,md:5},width:'100%'}}
            >
                <Box sx={{width:{xs:'100%',md:'55%'}}}>
                    <Typography
                    variant='subtitle2'
                    component='h6'
                    color='primary'
                    fontWeight='bold'
                    sx={{letterSpacing:'1px',textTransform:'uppercase'}}
                    >Code Smarter Today</Typography>
                    <Typography
                    color='secondary'
                    sx={{typography:{xs:'h6',md:'h3'}}}
                    component='h1'
                    fontWeight='bold'
                    pb={2}
                    textAlign='justify'
                    >From Bugs to Brilliance <br/> AI-Powered Code Enhancement</Typography>
                    
                    <Typography
                    variant='body1'
                    letterSpacing={1}
                    textAlign='justify'
                    pb={2}
                    >With our AI-powered solutions, you can correct code errors, convert code from one language to another, find bugs, and more. Our platform offers a seamless and effortless way to improve your code and take your development skills to the next level. Start coding smarter today with AI CodeBuddy.</Typography>
                    <Stack spacing={2} direction='row'>
                    <Button
                    variant='contained'
                    >Start Writing For Free</Button>
                    <Button variant='outlined'>No Credit Card Required</Button>
                    </Stack>
                </Box>
                <Box sx={{width:{xs:'100%',md:'45%'}}}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus assumenda tempore vero facere quisquam provident, veniam rerum accusamus similique illum?</Box>
            </Stack>
        </Container>
    </Box>
  )
}

export default Hero
