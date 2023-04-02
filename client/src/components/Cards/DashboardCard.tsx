import {Box,Stack,Typography,IconButton} from '@mui/material'
import {CodeOff,ArrowOutward} from '@mui/icons-material';

type propTypes = {
    title:string,
    description:string,
    icon : React.ReactNode
}
const DashboardCard = ({title,description,icon}:propTypes) => {
  return (
    <Box sx={{width:'15rem',height:'12rem',p:"1rem",backgroundColor:"white"}}>
        <Stack direction='row' sx={{d:'flex',justifyContent:'space-between',pb:'.6rem'}}>
            <IconButton color="primary">
                {icon}
            </IconButton>
            <IconButton size='large'>
                <ArrowOutward />
            </IconButton>
        </Stack>
        <Stack spacing={1}>
            <Typography variant='body1' component='h3' sx={{fontWeight:'600',letterSpacing:1}}>
            {title.length>25 ? title.substring(0,20) + '...':title}
            </Typography>
            <Typography variant='body1' component='p' sx={{color:'grayText'}}>
            {description.length> 75 ? description.substring(0,75) + '...' : description}
            </Typography>
        </Stack>
    </Box>
  )
}

export default DashboardCard