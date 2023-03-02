import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardContent, Typography, Button,IconButton,Stack } from '@mui/material';
import List from '@mui/joy/List';
import ListItem from '@mui/joy/ListItem';
import ListItemDecorator from '@mui/joy/ListItemDecorator';
import DoneIcon from "@mui/icons-material/Done";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    maxWidth: 400,
    margin: '0 auto',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '2rem',
    backgroundColor: '#fafafa',
    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
    borderRadius: '10px',
    marginBottom: '2rem'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: '2rem'
  },
  price: {
    fontSize: 36,
    fontWeight: 'bold',
    marginBottom: '1rem'
  },
  description: {
    marginBottom: '2rem'
  },
  button: {
    backgroundColor: '#03a9f4',
    color: '#fff',
    borderRadius: '20px',
    fontWeight: 'bold',
    '&:hover': {
      backgroundColor: '#0288d1'
    }
  }
});
type propTypes={
    title:string,
    price:string,
    pricingFeatures:{
        feature:string,
        available:boolean
    }[],
    buttonText:string,
    onClick:()=>void
}
const PricingCard = ({ title, price, pricingFeatures, buttonText, onClick }:propTypes) => {
  const classes = useStyles();

  return (
    <Card className={classes.root} sx={{mt:4}}>
      <CardContent>
        <Typography textAlign='center' variant="h4" component="h2">
          {title}
        </Typography>
        <Typography fontWeight='bold' textAlign='center' py={2} color="primary" fontSize={40}>
          ${price} / <Typography component='span'>month</Typography>
        </Typography>
       <div>
      {/* <Typography
        id="decorated-list-demo"
        level="body3"
        textTransform="uppercase"
        fontWeight="lg"
        mb={1}
      >
        Ingredients
      </Typography> */}
      <List
        aria-labelledby="decorated-list-demo"
        sx={{ '--List-decorator-size': '32px' }}
      >
        {
            pricingFeatures.map(({feature,available},index)=>(
              //   <ListItem>
              //   <ListItemDecorator>🧅</ListItemDecorator> {feature}
              // </ListItem>
              <Stack direction='row' alignItems='center'>
                  <IconButton >
                    <DoneIcon color={available?'primary':'inherit'}/>
                  </IconButton>
                  <Typography>{feature}</Typography>
              </Stack>
            ))
        }
        
        {/* <ListItem>
          <ListItemDecorator>🍤</ListItemDecorator> 2 Shrimps
        </ListItem>
        <ListItem>
          <ListItemDecorator>🥓</ListItemDecorator> 120g bacon
        </ListItem> */}
      </List>
    </div>
        <Button variant="contained" sx={{textAlign:'center',width:'100%'}}  onClick={onClick}>
          {buttonText} 
        </Button>
      </CardContent>
    </Card>
  );
};

export default PricingCard;
