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
import {SettingsApplications,School,Tune,People,Assessment,Work,Group} from "@mui/icons-material";
import { Box, Container } from "@mui/material";
import { useCases } from "../../data/data";

const icons = [
  <BugIcon />,
  <SettingsApplications />,
  <CodeIcon />,
  <School />,
  <Tune />,
  <People />,
  <Work />,
  <Group />,
  <Assessment />,
];
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
            <TimelineItem key={index}>
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
    </Container>
  );
};

export default Usecases;
