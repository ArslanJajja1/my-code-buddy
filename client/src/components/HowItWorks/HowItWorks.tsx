import useStyles from './styles'
import {Stack,Box,Container,Typography} from '@mui/material'

const HowItWorks = () => {
    const classes = useStyles()
  return (
    <Container maxWidth='xl' sx={{my:'4rem'}}>
      <Box textAlign='center'>
        <Typography variant='body1' component='h6' color='primary.dark' fontWeight='bold' letterSpacing='1px'>Start Using It in 3 Easy Steps !</Typography>
        <Typography variant='h4' component='h2' fontWeight='bold' letterSpacing='1px'>How Does It Work ? </Typography>
      </Box>
    </Container>
  )
}

export default HowItWorks
