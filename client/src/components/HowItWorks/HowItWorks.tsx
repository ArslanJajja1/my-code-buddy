import useStyles from './styles'
import {Stack,Box,Container,Typography} from '@mui/material'

const HowItWorks = () => {
    const classes = useStyles()
  return (
    <Container maxWidth='xl' sx={{my:'4rem'}}>
      <Box textAlign='center'>
        <Typography sx={{typography:{xs:'p'},color:'primary.dark', fontWeight:'bold !important', letterSpacing:{md:'1px'}}} component='h6' >Start Using It in 3 Easy Steps !</Typography>
        <Typography sx={{typography:{xs:'h5',sm:'h4'},fontWeight:'bold !important',letterSpacing:{md:'3px'}}} component='h2' >How Does It Work ? </Typography>
      </Box>
    </Container>
  )
}

export default HowItWorks
