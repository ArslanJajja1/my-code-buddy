import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";
import Typography from "@mui/material/Typography";
import BugIcon from "@mui/icons-material/BugReport";
import CodeIcon from "@mui/icons-material/Code";
import LegacyIcon from "@mui/icons-material/SettingsApplications";
import LearningIcon from "@mui/icons-material/School";
import OptimizationIcon from "@mui/icons-material/Tune";
import TeamIcon from "@mui/icons-material/People";
import FreelancerIcon from "@mui/icons-material/Work";
import QualityIcon from "@mui/icons-material/Assessment";
import CollaborationIcon from "@mui/icons-material/Group";
import { Box } from "@mui/material";
import { useCases } from "../../data/usecasesData";

const icons = [
  <BugIcon />,
  <LegacyIcon />,
  <CodeIcon />,
  <LearningIcon />,
  <OptimizationIcon />,
  <TeamIcon />,
  <FreelancerIcon />,
  <CollaborationIcon />,
  <QualityIcon />,
];
const Usecases = () => {
  return (
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
        Ways to use our website to improve your development workflow !
      </Typography>
      <Typography
        sx={{
          typography: { xs: "h5", sm: "h4" },
          fontWeight: "bold !important",
          letterSpacing: { md: "3px" },
        }}
        component="h2"
      >
        Code workflow made easy !
      </Typography>
      <Timeline position="alternate" sx={{ py: 8 }}>
        {useCases.map((usecase, index) => (
          <TimelineItem>
            <TimelineOppositeContent
              sx={{ m: "auto 0", fontWeight: "bold", letterSpacing: "1px" }}
              align="right"
              variant="subtitle1"
              color="primary.dark"
            >
              Usecase {index + 1}
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineConnector sx={{ bgcolor: "primary.main" }} />
              <TimelineDot color="primary">{icons[index]}</TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ py: "12px", px: 2 }}>
              <Typography
                component="span"
                sx={{
                  letterSpacing: "1px",
                  typography: { xs: "caption", md: "body1" },
                }}
              >
                {usecase.title}
              </Typography>
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </Box>
  );
};

export default Usecases;
