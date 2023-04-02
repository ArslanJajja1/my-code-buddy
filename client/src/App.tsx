import React, { useLayoutEffect } from 'react'
import Home from "./pages/Home/Home";
import { Box } from "@mui/material";
import { theme } from "./theme";
import { ThemeProvider } from "@mui/styles";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import Login from "./pages/Auth/Login/Login";
import Signup from "./pages/Auth/Signup/Signup";
import Dashboard from "./pages/Dashboard/Dashboard";
import BugDetection from './pages/Tools/BugDetection'
import CodeCorrection from './pages/Tools/CodeCorrection';
import CodeExplanation from './pages/Tools/CodeExplanation';
import CodeWriting from './pages/Tools/CodeWriting';
import LanguageConversion from './pages/Tools/LanguageConversion';
import CodeOptimization from './pages/Tools/CodeOptimization';

function App() {
  useLayoutEffect(() => {
    document.body.style.backgroundColor = "#F0F5F8"
});
  return (
    <ThemeProvider theme={theme}>
      <Box >
        <BrowserRouter>
        <Routes> 
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/dashboard/bug-detection" element={<BugDetection/>}/>
            <Route path="/dashboard/code-correction" element={<CodeCorrection/>}/>
            <Route path="/dashboard/code-explanation" element={<CodeExplanation/>}/>
            <Route path="/dashboard/AI-assisted-code-writing" element={<CodeWriting/>}/>
            <Route path="/dashboard/language-conversion" element={<LanguageConversion/>}/>
            <Route path="/dashboard/code-optimization" element={<CodeOptimization/>}/>
          <Route path="*" element="404" />
      </Routes>
    </BrowserRouter>
      
      </Box>
    </ThemeProvider>
  );
}

export default App;
