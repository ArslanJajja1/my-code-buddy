import { Card, CardContent, CardHeader, Typography, Grid,CardActions,CardMedia,Button } from '@mui/material';

type propsTypes= {
    title:string,
    description:string,
    step:string,
    imageUrl:string
}
const StepsCard = ({title,description,step,imageUrl}:propsTypes) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={imageUrl}
        title="green iguana"
      />
      <CardContent>
        <Typography variant='body2' letterSpacing={3} fontWeight='bold' color='primary.dark' >Step {step}</Typography>
        <Typography gutterBottom letterSpacing='1px !important' sx={{typography:{xs:'h6',md:'h5'}}} component="h5">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary" textAlign='justify'>
          {description}
        </Typography>
      </CardContent>
      {/* <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions> */}
    </Card>
  );
};

export default StepsCard;
