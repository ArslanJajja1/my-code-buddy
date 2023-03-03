import React from "react";
import PricingCard from "../Cards/PricingCard";
import {Container, Stack } from "@mui/material";
import Headings from "../Headings/Headings";
import {
  basePlanFeatures,
  freePlanFeatures,
  premiumPlanFeatures,
} from "../../data/data";

const Pricing = () => {
  return (
    <Container maxWidth="xl" sx={{ py: 8 }}>
      <Headings heading1="Pricing" heading2="Start Using CodeBuddy" />
      <Stack direction={{ xs: "column", md: "row" }} flexWrap="wrap">
        <PricingCard
          title="Free Plan"
          price="0"
          pricingFeatures={freePlanFeatures}
          buttonText="Sign Up"
          onClick={() => alert("Button clicked!")}
        />
        <PricingCard
          title="Basic Plan"
          price="9.99"
          pricingFeatures={basePlanFeatures}
          buttonText="Let's Buy"
          onClick={() => alert("Button clicked!")}
        />
        <PricingCard
          title="Premium Plan"
          price="19.99"
          pricingFeatures={premiumPlanFeatures}
          buttonText="Let's Buy"
          onClick={() => alert("Button clicked!")}
        />
      </Stack>
    </Container>
  );
};

export default Pricing;
