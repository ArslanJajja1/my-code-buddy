import Home from "./pages/Home/Home";
import { Box } from "@mui/material";
import { theme } from "./theme";
import { ThemeProvider } from "@mui/styles";
function App() {
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ backgroundColor: "#FBFBFB" }}>
        <Home />
      </Box>
    </ThemeProvider>
  );
}

export default App;
