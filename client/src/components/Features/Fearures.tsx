import { Container, Box, Grid, Typography } from "@mui/material";
import FeaturesCard from "../FeaturesCard/FeaturesCard";
import CodeIcon from '@mui/icons-material/Code';
import CodeOffIcon from '@mui/icons-material/CodeOff';

const featuresData = [
  {
    id: 0,
    title: "Code correction",
    description:
      "The website can leverage OpenAI's natural language processing and machine learning capabilities to provide automated code correction, suggesting fixes for syntax errors, typos, and other common issues.",
      icon: <CodeOffIcon sx={{fontSize:'3rem'}}/>

  },
  {
    id: 1,
    title: "Language conversion",
    description:
      "The website can allow users to convert code from one programming language to another, making it easier to switch between different languages or to integrate code written in different languages.",
      icon: <CodeOffIcon sx={{fontSize:'3rem'}}/>
  },
  {
    id: 2,
    title: "Bug detection",
    description:
      "The website can use AI algorithms to detect bugs in code, flagging potential issues before they cause major problems.",
      icon: <CodeOffIcon sx={{fontSize:'3rem'}}/>

  },
  {
    id: 3,
    title: "Code explanation",
    description:
      "The website can provide automated explanations for complex code snippets, breaking down complicated code into simpler terms and helping users better understand what the code does..",
      icon: <CodeOffIcon sx={{fontSize:'3rem'}}/>

  },
  {
    id: 4,
    title: "Code optimization",
    description:
      "The website can analyze code and suggest optimizations, such as removing redundant code, simplifying complex expressions, and improving performance.",
      icon: <CodeOffIcon sx={{fontSize:'3rem'}}/>

  },
  {
    id: 5,
    title: "AI-assisted code writing",
    description:
      "The website can provide AI-assisted code writing, suggesting code snippets and auto-completing code based on the user's input.",
      icon: <CodeOffIcon sx={{fontSize:'3rem'}}/>

  }
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
        sx={{ justifyContent: "center", alignItems: "center" }}
        mx="auto"
        py={4}
      >
        {
            featuresData.map((feature)=>(
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
                textAlign='center' justifyContent='center' alignItems='center'
              >
                <FeaturesCard
                  title={feature.title}
                  way={feature.id+1}
                  description={feature.description}
                  Icon={feature.icon}
                />
              </Grid>
            ))
        }        
      </Grid>
    </Container>
  );
};

export default Features;
