import { Box, Container } from "@mui/material";
import ReviewCard from "../Cards/ReviewCard";
import Headings from "../Headings/Headings";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { reviewData } from "../../data/data";
const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 2,
  slidesToScroll: 2,
};

const Review = () => {
  return (
    <Container sx={{ my: 8 }}>
      <Headings heading1="Reviews" heading2="Users thoughts about CodeBuddy" />
      <Box sx={{ py: 4 }}>
        <Slider {...settings}>
          {reviewData.map((review, index) => (
            <Box key={index}>
            <ReviewCard
              avatar={review.avatarSrc}
              name={review.name}
              position={review.position}
              review={review.review}
            />
            </Box>
          ))}
        </Slider>
      </Box>
    </Container>
  );
};

export default Review;
