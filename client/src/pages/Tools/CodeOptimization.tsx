import { Box, Container, Divider, Typography } from "@mui/material"
import Navbar from "../../components/Navbar/Navbar"

const CodeOptimization = () => {
  return (
    <>
    <Navbar dashboard={true}/>
    <Divider />
    <Container maxWidth='xl' sx={{marginTop:"5rem"}}>
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
          Fill the form !
        </Typography>
        <Typography
          sx={{
            typography: { xs: "h5", sm: "h4" },
            fontWeight: "bold !important",
            letterSpacing: { md: "3px" },
            width:"fitContent"
          }}
          component="h2"
        >
         Code Optimization
        </Typography>
         <Divider sx={{width:{xs:"10rem",md:"20rem"},mx:"auto"}}/>
      </Box>
    </Container>
    </>
  )
}

export default CodeOptimization