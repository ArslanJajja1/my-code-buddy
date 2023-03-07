import { Container, Box, Grid, Typography } from "@mui/material";
import FeaturesCard from "../Cards/FeaturesCard";
import ErrorIcon from "@mui/icons-material/Error";
import CloudSyncIcon from "@mui/icons-material/CloudSync";
import BugReportIcon from "@mui/icons-material/BugReport";
import HelpIcon from "@mui/icons-material/Help";
import SpeedIcon from "@mui/icons-material/Speed";
import AutorenewIcon from "@mui/icons-material/Autorenew";
import { featuresData } from "../../data/data";

const featureDataIcons = [
  <ErrorIcon sx={{ fontSize: "3rem" }} />,
  <CloudSyncIcon sx={{ fontSize: "3rem" }} />,
  <BugReportIcon sx={{ fontSize: "3rem" }} />,
  <HelpIcon sx={{ fontSize: "3rem" }} />,
  <SpeedIcon sx={{ fontSize: "3rem" }} />,
  <AutorenewIcon sx={{ fontSize: "3rem" }} />,
];
const Features = () => {
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
          Need CodeBuddy Help ?
        </Typography>
      </Box>
      <Grid
        container
        spacing={{ xs: 2 }}
        sx={{
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "wrap",
        }}
        mx="auto"
        py={4}
      >
        {featuresData.map((feature,index) => (
          <Grid
            item
            xs={12}
            md={4}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            key={feature.id}
            textAlign="center"
            justifyContent="center"
            alignItems="center"
          >
            <FeaturesCard
              title={feature.title}
              way={feature.id + 1}
              description={feature.description}
              Icon={featureDataIcons[index]}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Features;
