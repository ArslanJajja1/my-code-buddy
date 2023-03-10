import {
  Container,
  Stack,
  Box,
  Typography,
  Button,
  Divider,
} from "@mui/material";
import VideoPlayer from "../VideoPlayer/VideoPlayer";
import { Link, Outlet } from "react-router-dom";

const Hero = () => {
  return (
    <Box>
      <Divider />
      <Container maxWidth="xl" sx={{ py: 8 }}>
        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={4}
          sx={{ mt: { xs: 1, md: 5 }, width: "100%" }}
        >
          <Stack spacing={3} sx={{ width: { xs: "100%", md: "50%" } }}>
            <Typography
              variant="subtitle2"
              component="h6"
              color="primary"
              fontWeight="bold"
              sx={{
                letterSpacing: "1px",
                textTransform: "uppercase",
                textAlign: { xs: "center", md: "left" },
              }}
            >
              Code Smarter Today
            </Typography>
            <Typography
              color="primary.main"
              sx={{
                typography: { xs: "h5", sm: "h4", md: "h3" },
                fontWeight: "700 !important",
                textAlign: { xs: "center", md: "left" },
              }}
              component="h1"
              lineHeight={2}
            >
              From Bugs to Brilliance <br /> AI-Powered CodeBuddy
            </Typography>

            <Typography
              sx={{
                typography: { xs: "body2", md: "body1" },
                textAlign: "justify",
                letterSpacing: { xs: 1, md: 2 },
              }}
            >
              With our AI-powered solutions, you can correct code errors,
              convert code from one language to another, find bugs, and more.
              Our platform offers a seamless and effortless way to improve your
              code and take your development skills to the next level. Start
              coding smarter today with AI CodeBuddy.
            </Typography>
            <Stack
              spacing={2}
              direction={{ xs: "column", md: "row" }}
              sx={{ textAlign: { xs: "center", md: "left" } }}
            >
              <Button component={Link} to="/signup" variant="contained">
                Start Using For Free
              </Button>

              <Button variant="outlined">No Credit Card Required</Button>
            </Stack>
          </Stack>
          <Box sx={{ width: { xs: "100%", md: "50%" } }}>
            <VideoPlayer />
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};

export default Hero;
