import { Box, Stack, Container, Grid, Divider } from '@mui/material'
import Navbar from '../../components/Navbar/Navbar'
import DashboardCard from '../../components/Cards/DashboardCard'
import {Error,CloudSync,BugReport,Help,Speed,Autorenew} from "@mui/icons-material";
import { dashboardCardsData } from "../../data/data";

const icons = [
  <Error sx={{ fontSize: "3rem" }} />,
  <CloudSync sx={{ fontSize: "3rem" }} />,
  <BugReport sx={{ fontSize: "3rem" }} />,
  <Help sx={{ fontSize: "3rem" }} />,
  <Speed sx={{ fontSize: "3rem" }} />,
  <Autorenew sx={{ fontSize: "3rem" }} />,
];
const Dashboard = () => {
  return (
    <>
      <Navbar dashboard={true} />
      <Divider />
      <Container maxWidth='xl' sx={{ marginTop: "5rem" }}>
        <Box>
          <Grid container spacing={{ xs: 2 }} mx="auto" py={4} 
          >
            {
              dashboardCardsData.map((feature,index)=>(
            <Grid item xs={12} sm={6} md={4} lg={3} >
              <DashboardCard title={feature.title} description={feature.description} icon={icons[index]}/>
            </Grid>
              ))
            }
          </Grid>
        </Box>
      </Container>
    </>
  )
}

export default Dashboard