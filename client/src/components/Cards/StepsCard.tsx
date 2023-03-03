import {
  Card,
  CardContent,
  CardHeader,
  Typography,
  Grid,
  CardActions,
  CardMedia,
  Button,
} from "@mui/material";

type propsTypes = {
  title: string;
  description: string;
  step: string;
  imageUrl: string;
};
const StepsCard = ({ title, description, step, imageUrl }: propsTypes) => {
  return (
    <Card sx={{ maxWidth: 345, minHeight: 250 }}>
      <CardMedia sx={{ height: 140 }} image={imageUrl} title="green iguana" />
      <CardContent>
        <Typography
          variant="body2"
          letterSpacing={3}
          fontWeight="bold"
          color="primary.dark"
        >
          Step {step}
        </Typography>
        <Typography
          gutterBottom
          letterSpacing="1px !important"
          sx={{ typography: { xs: "h6", md: "h5" } }}
          component="h5"
        >
          {title.length > 20 ? title.substring(0, 20) + "..." : title}
        </Typography>
        <Typography variant="body2" color="text.secondary" textAlign="justify">
          {description.length > 100
            ? description.substring(0, 100) + "..."
            : description}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default StepsCard;
