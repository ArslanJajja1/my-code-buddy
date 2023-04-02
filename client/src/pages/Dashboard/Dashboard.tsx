import { Box, Stack, Container, Grid, Divider } from '@mui/material'
import Navbar from '../../components/Navbar/Navbar'
import DashboardCard from '../../components/Cards/DashboardCard'

const Dashboard = () => {
  return (
    <>
    <Navbar dashboard={true} />
        <Divider />
    <Container maxWidth='xl' sx={{marginTop:"5rem"}}>
      <Box>
        <DashboardCard />
      </Box>
    </Container>
    </>
  )
}

export default Dashboard