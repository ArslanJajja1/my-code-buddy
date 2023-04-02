import {Box,Stack,Typography,IconButton} from '@mui/material'
import {CodeOff} from '@mui/icons-material';
const DashboardCard = () => {
  return (
    <Box sx={{width:'12rem',height:'12rem',p:"1rem",backgroundColor:"skyblue"}}>
        <Stack direction='row' sx={{d:'flex',justifyContent:'space-between',pb:'.3rem'}}>
            <IconButton>
                <CodeOff />
            </IconButton>
            <IconButton>
                <CodeOff />
            </IconButton>
        </Stack>
        <Stack spacing={1}>
            <Typography variant='h6' component='h3'>Title </Typography>
            <Typography variant='body1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, rem!</Typography>
        </Stack>
    </Box>
  )
}

export default DashboardCard