import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardContent, Typography, Button,IconButton,Stack } from '@mui/material';
import DoneIcon from "@mui/icons-material/Done";

const useStyles = makeStyles({
  root: {
    width: 250,
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
        <Typography textAlign='center' sx={{typography:{xs:'h5',md:'h4'}}} component="h3">
          {title}
        </Typography>
        <Typography fontWeight='bold' textAlign='center' py={2} color="primary" sx={{typography:{xs:'h5',md:'h4'}}}  >
          ${price}  <Typography component='span' color='text.secondary'>/ month</Typography>
        </Typography>
       <div>
        {
            pricingFeatures.map(({feature,available},index)=>(
              <Stack direction='row' alignItems='center'>
                  <IconButton >
                    <DoneIcon color={available?'primary':'inherit'}/>
                  </IconButton>
                  <Typography>{feature}</Typography>
              </Stack>
            ))
        }
    </div>
        <Button variant="contained" sx={{textAlign:'center',width:'100%',fontWeight:'bold',letterSpacing:'2px',mt:2}}  onClick={onClick}>
          {buttonText} 
        </Button>
      </CardContent>
    </Card>
  );
};

export default PricingCard;
