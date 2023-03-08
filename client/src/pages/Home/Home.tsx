import { useEffect, useState } from "react";
import Hero from "../../components/Hero/Hero";
import HowItWorks from "../../components/HowItWorks/HowItWorks";
import Features from "../../components/Features/Fearures";
import Usecases from "../../components/Usecases/Usecases";
import Pricing from "../../components/Pricing/Pricing";
import Review from "../../components/Reviews/Review";
import FAQ from "../../components/FAQ/FAQ";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { Link } from "react-scroll";
import { IconButton, Box } from "@mui/material";

const Home = () => {
  const [showBtn, setShowBtn] = useState(false);

  useEffect(() => {
    const handleScrollBtnVisibility = () => {
      window.pageYOffset > 300 ? setShowBtn(true) : setShowBtn(false);
    };
    window.addEventListener("scroll", handleScrollBtnVisibility);
    return () => {
      window.removeEventListener("scroll", handleScrollBtnVisibility);
    };
  }, []);
  return (
    <div style={{ position: "relative" }}>
      <Navbar />
      <div id="hero">
        <Hero />
      </div>
      <div id="howitworks">
        <HowItWorks />
      </div>
      <div id="usecases">
        <Usecases />
      </div>
      <div id="features">
        <Features />
      </div>
      <div id="pricing">
        <Pricing />
      </div>
      <div id="reviews">
        <Review />
      </div>
      <FAQ />
      <Footer />
      {showBtn && (
        <Box
          sx={{
            position: "absolute",
            bottom: "20px",
            right: "20px",
            zIndex: 999,
          }}
        >
          <Link to="hero" spy={true} smooth={true} offset={-100} duration={500}>
            <IconButton
              size="large"
              style={{
                backgroundColor: "#1565C0",
                color: "white",
                marginTop: "1rem",
                position: "fixed",
                bottom: "20px",
                right: "20px",
              }}
            >
              <KeyboardArrowUpIcon />
            </IconButton>
          </Link>
        </Box>
      )}
    </div>
  );
};

export default Home;
