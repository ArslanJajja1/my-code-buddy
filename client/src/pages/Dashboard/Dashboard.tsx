import { Box, Stack, Container, Grid, Divider } from '@mui/material'
import Navbar from '../../components/Navbar/Navbar'
import DashboardCard from '../../components/Cards/DashboardCard'
import {Error,CloudSync,BugReport,Help,Speed,Autorenew} from "@mui/icons-material";
import { dashboardCardsData } from "../../data/data";
import { Link } from 'react-router-dom';
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
          <Grid container spacing={3} mx="auto" py={4} sx={{
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "wrap",
        }}
          >
            {
              dashboardCardsData.map((feature,index)=>(
            <Grid  key={index} item xs={12} sm={6} md={4} sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
             }}>
              <Box component={Link} to={feature.title.split(' ').join('-')}  sx={{textDecoration:"none",color:"inherit"}}>
              <DashboardCard title={feature.title} description={feature.description}
               icon={icons[index%5]}/>
              </Box>
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