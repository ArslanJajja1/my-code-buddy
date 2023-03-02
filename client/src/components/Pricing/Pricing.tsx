import React from "react";
import PricingCard from "../Cards/PricingCard";
import { Box, Container, Stack } from "@mui/material";
import Headings from "../Headings/Headings";

const basePlanFeatures = [
  {
    feature: "Code correction",
    available: true,
  },
  {
    feature: "Language conversion",
    available: true,
  },
  {
    feature: "Bug detection",
    available: true,
  },
  {
    feature: "Code explanation",
    available: false,
  },
  {
    feature: "Code optimization:",
    available: false,
  },
  {
    feature: "AI-assisted code writing",
    available: false,
  },
  {
    feature: "Code quality assessment",
    available: false,
  },
];
const Pricing = () => {
  return (
    <Container maxWidth="xl" sx={{ py: 8 }}>
      <Headings heading1="Pricing" heading2="Start Using CodeBuddy" />
      <Stack direction={{ xs: "column", md: "row" }}>
        <PricingCard
          title="Basic Plan"
          price="9.99"
          pricingFeatures={basePlanFeatures}
          buttonText="Sign Up"
          onClick={() => alert("Button clicked!")}
        />
        <PricingCard
          title="Premium Plan"
          price="19.99"
         pricingFeatures={basePlanFeatures}
          buttonText="Sign Up"
          onClick={() => alert("Button clicked!")}
        />
      </Stack>
    </Container>
  );
};

export default Pricing;
