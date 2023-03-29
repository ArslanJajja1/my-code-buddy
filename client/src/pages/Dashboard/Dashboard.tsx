import {Box,Stack,Container,Grid} from '@mui/material'
import Navbar from '../../components/Navbar/Navbar'

const Dashboard = () => {
  return (
    <Box>
        <Container maxWidth='xl'>
            <Navbar dashboard={true}/>
            Dashboard
        </Container>
    </Box>
  )
}

export default Dashboard