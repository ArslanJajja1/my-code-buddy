import { Card, CardContent, CardHeader, Typography,IconButton, Grid,CardActions,CardMedia,Button,Avatar} from '@mui/material';
import CodeIcon from '@mui/icons-material/Code';
type propsTypes= {
    title:string,
    description:string,
    way:number,
    Icon:React.ReactNode
}

const FeaturesCard = ({title,description,way,Icon}:propsTypes) => {
  return (
    <Card sx={{ maxWidth: 345,minHeight:200 }}>
              
      <CardContent>
        <IconButton color='primary' size='large' >
            {Icon}
        </IconButton>
        <Typography variant='body2' letterSpacing={3} fontWeight='bold' color='primary.dark' >Way {way}</Typography>
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
  )
}

export default FeaturesCard

