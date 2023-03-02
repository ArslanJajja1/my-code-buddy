import {Box,Container} from '@mui/material'
import ReviewCard from "../Cards/ReviewCard";
import Headings from '../Headings/Headings';
 
const App = () => {
  return (
    <Container sx={{my:8}}>
    <Headings  heading1='Reviews' heading2='Users thoughts about CodeBuddy'/>
    <Box sx={{py:4}}>
    <ReviewCard
      avatarSrc="https://i.pravatar.cc/300"
      name="John Doe"
      review="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sollicitudin erat tellus, nec ullamcorper elit interdum eget. Duis vel risus nulla.  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sollicitudin erat tellus, nec ullamcorper elit interdum eget. Duis vel risus nulla."
    />
    </Box>

    </Container>
  );
};

export default App;
