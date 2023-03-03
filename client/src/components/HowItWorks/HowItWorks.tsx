import { Stack, Box, Container, Typography, Grid } from "@mui/material";
import StepsCard from "../Cards/StepsCard";

const HowItWorks = () => {
  return (
    <Container maxWidth="xl" sx={{ py: 8 }}>
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
          Start Using It in 3 Easy Steps !
        </Typography>
        <Typography
          sx={{
            typography: { xs: "h5", sm: "h4" },
            fontWeight: "bold !important",
            letterSpacing: { md: "3px" },
          }}
          component="h2"
        >
          How Does It Work ?
        </Typography>
      </Box>
      <Stack
        direction={{ xs: "column", md: "row" }}
        textAlign="center"
        justifyContent="center"
        alignItems="center"
        spacing={8}
        py={4}
      >
        <StepsCard
          title="Select a Tool"
          step="1"
          imageUrl="https://cdn.pixabay.com/photo/2018/05/08/08/44/artificial-intelligence-3382507_960_720.jpg"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque quaerat recusandae quos at! Natus voluptatem placeat nihil quas itaque eum!"
        />
        <StepsCard
          title="Add Info"
          step="2"
          imageUrl="https://cdn.pixabay.com/photo/2016/11/02/08/56/binary-1790842_960_720.jpg"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque quaerat recusandae quos at! Natus voluptatem placeat nihil quas itaque eum!"
        />
        <StepsCard
          title="Get Output"
          step="3"
          imageUrl="https://cdn.pixabay.com/photo/2018/12/02/10/07/web-3850917_960_720.jpg"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque quaerat recusandae quos at! Natus voluptatem placeat nihil quas itaque eum!"
        />
      </Stack>
    </Container>
  );
};

export default HowItWorks;
