 import BugIcon from '@mui/icons-material/BugReport';
import CodeIcon from '@mui/icons-material/Code';
import LegacyIcon from '@mui/icons-material/SettingsApplications';
import LearningIcon from '@mui/icons-material/School';
import OptimizationIcon from '@mui/icons-material/Tune';
import TeamIcon from '@mui/icons-material/People';
import FreelancerIcon from '@mui/icons-material/Work';
import QualityIcon from '@mui/icons-material/Assessment';
import CollaborationIcon from '@mui/icons-material/Group';
import { useCases } from '../../data/usecasesData';
import { Container, Box, Grid, Typography } from "@mui/material";
import FeaturesCard from "../FeaturesCard/FeaturesCard";
import UseCasesCard from '../Cards/UsecasesCard';

const icons = [<BugIcon />,<LegacyIcon/>,<CodeIcon/>,<LearningIcon/>,<OptimizationIcon/>,<TeamIcon/>,<FreelancerIcon/>,<CollaborationIcon/>,<QualityIcon/>]
const Usecases = () => {
  return (
    <Container maxWidth="xl">
      <Box textAlign="center">
        <Typography
          sx={{
            typography: { xs: "p" },
            color: "primary.dark",
            fontWeight: "bold !important",
            letterSpacing: { md: "1px" },
          }}
          component="h6"
        >
          Effortlessly Improve Your Code with CodeBuddy Tools !
        </Typography>
        <Typography
          sx={{
            typography: { xs: "h5", sm: "h4" },
            fontWeight: "bold !important",
            letterSpacing: { md: "3px" },
          }}
          component="h2"
        >
          Usecases
        </Typography>
      </Box>
      <Grid
        container
        spacing={{ xs: 2 }}
        sx={{ justifyContent: "center", alignItems: "center" }}
        mx="auto"
        py={4}
      >
        {
            useCases.map((usecase,index)=>(
                <Grid
                item
                xs={12}
                md={4}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                key={index+10}
                textAlign='center' justifyContent='center' alignItems='center'
              >
                <UseCasesCard
                  title={usecase.title}
                  description={usecase.description}
                  icon={icons[index]}
                />
              </Grid>
            ))
        }        
      </Grid>
    </Container>
  )
}

export default Usecases
