import { Card, CardContent, CardHeader, Typography, Grid,CardActions,CardMedia,Button } from '@mui/material';

type propsTypes= {
    title:string,
    description:string,
    step:string
}
const StepsCard = ({title,description,step}:propsTypes) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image="https://images.unsplash.com/photo-1589149098258-3e9102cd63d3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=739&q=80"
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
