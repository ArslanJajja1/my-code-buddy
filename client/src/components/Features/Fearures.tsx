import { Container, Box, Grid, Typography } from "@mui/material";
import FeaturesCard from "../Cards/FeaturesCard";
import ErrorIcon from "@mui/icons-material/Error";
import CloudSyncIcon from "@mui/icons-material/CloudSync";
import BugReportIcon from "@mui/icons-material/BugReport";
import HelpIcon from "@mui/icons-material/Help";
import SpeedIcon from "@mui/icons-material/Speed";
import AutorenewIcon from "@mui/icons-material/Autorenew";

const featuresData = [
  {
    id: 0,
    title: "Code correction",
    description:
      "CodeBuddy uses  natural language processing and machine learning to identify and suggest fixes for syntax errors, typos, and other coding issues, helping users write error-free code.",
    icon: <ErrorIcon sx={{ fontSize: "3rem" }} />,
  },
  {
    id: 1,
    title: "Language conversion",
    description:
      "CodeBuddy enables users to convert code from one programming language to another, facilitating code integration and making it easier for users to switch between languages.",
    icon: <CloudSyncIcon sx={{ fontSize: "3rem" }} />,
  },
  {
    id: 2,
    title: "Bug detection",
    description:
      "CodeBuddy uses AI algorithms to detect potential bugs in code, providing users with a warning before issues arise and helping them avoid costly mistakes.",
    icon: <BugReportIcon sx={{ fontSize: "3rem" }} />,
  },
  {
    id: 3,
    title: "Code explanation",
    description:
      "CodeBuddy provides automated explanations for complex code snippets, making it easier for users to understand the code's functionality and purpose.",
    icon: <HelpIcon sx={{ fontSize: "3rem" }} />,
  },
  {
    id: 4,
    title: "Code optimization",
    description:
      "CodeBuddy can analyze code and suggest optimizations, such as removing redundant code, simplifying complex expressions, and improving performance.",
    icon: <SpeedIcon sx={{ fontSize: "3rem" }} />,
  },
  {
    id: 5,
    title: "AI-assisted code writing",
    description:
      "TCodeBuddy offers AI-assisted code writing, suggesting code snippets and auto-completing code based on the user's input, helping users save time and write code more efficiently.",
    icon: <AutorenewIcon sx={{ fontSize: "3rem" }} />,
  },
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
        sx={{ justifyContent: "center", alignItems: "center",flexWrap:'wrap' }}
        mx="auto"
        py={4}
      >
        {featuresData.map((feature) => (
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
              Icon={feature.icon}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Features;
