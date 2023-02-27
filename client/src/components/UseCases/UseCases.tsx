import {Container,Box,Grid}from '@mui/material'
import StepsCard from '../StepsCard/StepsCard'
const UseCases = () => {
  return (
    <Container maxWidth='xl'>
        <Grid container spacing={{ xs: 2}}  sx={{py:8,justifyContent:'center',alignItems:'center'}} mx='auto'>
        <Grid item xs={12}  md={4} sx={{display:'flex',justifyContent:'center',alignItems:'center'}}>
        <StepsCard title='Select a CodeBuddy Tool' step = '1' description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque quaerat recusandae quos at! Natus voluptatem placeat nihil quas itaque eum!'/>
            
        </Grid>
        <Grid item xs={12}  md={4} sx={{display:'flex',justifyContent:'center',alignItems:'center'}}>
        <StepsCard title='Select a CodeBuddy Tool' step = '1' description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque quaerat recusandae quos at! Natus voluptatem placeat nihil quas itaque eum!'/>
        </Grid>
         <Grid item xs={12}  md={4} sx={{display:'flex',justifyContent:'center',alignItems:'center'}}>
         <StepsCard title='Select a CodeBuddy Tool' step = '1' description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque quaerat recusandae quos at! Natus voluptatem placeat nihil quas itaque eum!'/>
        </Grid>
         <Grid item xs={12}  md={4} sx={{display:'flex',justifyContent:'center',alignItems:'center'}}>
         <StepsCard title='Select a CodeBuddy Tool' step = '1' description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque quaerat recusandae quos at! Natus voluptatem placeat nihil quas itaque eum!'/>
        </Grid> 
        <Grid item xs={12}  md={4} sx={{display:'flex',justifyContent:'center',alignItems:'center'}}>
        <StepsCard title='Select a CodeBuddy Tool' step = '1' description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque quaerat recusandae quos at! Natus voluptatem placeat nihil quas itaque eum!'/>
        </Grid> 
        <Grid item xs={12}  md={4} sx={{display:'flex',justifyContent:'center',alignItems:'center'}} >
        <StepsCard title='Select a CodeBuddy Tool' step = '1' description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque quaerat recusandae quos at! Natus voluptatem placeat nihil quas itaque eum!'/>
        </Grid>
    </Grid>
    </Container>
  )
}

export default UseCases
