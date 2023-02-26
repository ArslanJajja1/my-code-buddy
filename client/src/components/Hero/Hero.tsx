import Navbar from '../Navbar/Navbar'
import useStyles from './styles'
import {Container,Stack,Box,Typography,Button,Divider} from '@mui/material'

const Hero = () => {
    const classes = useStyles()
  return (
    <>
        <Navbar />
        <Divider />
        <Container maxWidth='xl'>
            <Stack
             direction={{xs:'column',md:'row'}}
             spacing={{xs:1,sm:2,md:4}}
             sx={{mt:{xs:1,md:5}}}
            >
                <Box>
                    <Typography>Code Smarter Today</Typography>
                    <Typography>From Bugs to Brilliance: AI-Powered Code Enhancement</Typography>
                    <Typography>With our AI-powered solutions, you can correct code errors, convert code from one language to another, find bugs, and more. Our platform offers a seamless and effortless way to improve your code and take your development skills to the next level. Start coding smarter today with AI CodeBuddy.</Typography>
                    <Box>
                    <Button>Start Writing For Free</Button>
                    <Button>No Credit Card Required</Button>
                    </Box>
                </Box>
                <Box>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus assumenda tempore vero facere quisquam provident, veniam rerum accusamus similique illum?</Box>
            </Stack>
        </Container>
    </>
  )
}

export default Hero
