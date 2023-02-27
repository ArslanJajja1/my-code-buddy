import useStyles from './styles'
import { Stack, Box, Container, Typography, Grid } from '@mui/material'
import StepsCard from '../StepsCard/StepsCard'

const HowItWorks = () => {
  const classes = useStyles()
  return (
    <Container maxWidth='xl' sx={{ py:16 }}>
      <Box textAlign='center'>
        <Typography sx={{ typography: { xs: 'p' }, color: 'primary.dark', fontWeight: 'bold !important', letterSpacing: { md: '1px' } }} component='h6'>Start Using It in 3 Easy Steps !</Typography>
        <Typography sx={{ typography: { xs: 'h5', sm: 'h4' }, fontWeight: 'bold !important', letterSpacing: { md: '3px' } }} component='h2'>How Does It Work ?</Typography>
      </Box>
      <Stack direction={{xs:'column',md:'row'}} textAlign='center' justifyContent='center' alignItems='center' spacing={8} mt={4}>
        <StepsCard title='Select a CodeBuddy Tool' step = '1' description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque quaerat recusandae quos at! Natus voluptatem placeat nihil quas itaque eum!'/>
        <StepsCard title='Add The Required Info' step='2' description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque quaerat recusandae quos at! Natus voluptatem placeat nihil quas itaque eum!'/>
        <StepsCard title='Get The Desired Output' step='3' description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque quaerat recusandae quos at! Natus voluptatem placeat nihil quas itaque eum!'/>
      </Stack>
    </Container>
  )
}

export default HowItWorks
