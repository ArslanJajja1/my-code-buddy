import {
  Card,
  CardContent,
  Typography,
  IconButton,
} from "@mui/material";

type propsTypes = {
  title: string;
  description: string;
  way: number;
  Icon: React.ReactNode;
};

const FeaturesCard = ({ title, description, way, Icon }: propsTypes) => {
  return (
    <Card sx={{ maxWidth: 345, minHeight: 250 }}>
      <CardContent>
        <IconButton color="primary" size="large">
          {Icon}
        </IconButton>
        <Typography
          variant="body2"
          letterSpacing={3}
          fontWeight="bold"
          color="primary.dark"
        >
          Way {way}
        </Typography>
        <Typography
          gutterBottom
          letterSpacing="1px !important"
          sx={{ typography: { xs: "h6", md: "h5" } }}
          component="h5"
        >
          {title.length>25 ? title.substring(0,25) + '...':title}
        </Typography>
        <Typography variant="body2" color="text.secondary" textAlign="justify">
          {description.length>150 ? description.substring(0,150) + '...' : description}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default FeaturesCard;
