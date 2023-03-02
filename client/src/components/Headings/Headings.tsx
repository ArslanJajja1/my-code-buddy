import {Typography,Box} from '@mui/material'

type propTypes = {
    heading1:string,
    heading2:string
}
const Headings = ({heading1,heading2}:propTypes) => {
  return (
    <Box textAlign='center'>
       <Typography sx={{ typography: { xs: 'p' }, color: 'primary.dark', fontWeight: 'bold !important', letterSpacing: { md: '1px' } }} component='h6'>{heading1} !</Typography>
        <Typography sx={{ typography: { xs: 'h5', sm: 'h4' }, fontWeight: 'bold !important', letterSpacing: { md: '3px' } }} component='h2'>{heading2} !</Typography>
    </Box>
  )
}

export default Headings
