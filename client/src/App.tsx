import Home from "./pages/Home/Home";
import { Box } from "@mui/material";
import { theme } from "./theme";
import { ThemeProvider } from "@mui/styles";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Auth/Login/Login";
import Signup from "./pages/Auth/Signup/Signup";
import Dashboard from "./pages/Dashboard/Dashboard";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ backgroundColor: "#FBFBFB" }}>
        <BrowserRouter>
        <Routes> 
          <Route path="/" element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
          <Route path="dashboard" element={<Dashboard />}/>
          <Route path="*" element="404" />
      </Routes>
    </BrowserRouter>
      
      </Box>
    </ThemeProvider>
  );
}

export default App;
