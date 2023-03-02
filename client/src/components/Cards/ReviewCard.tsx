import React from "react";
import { makeStyles } from "@mui/styles";
import {Stack,CardContent,Typography,Avatar,CardHeader,Card} from '@mui/material'

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 400,
    height:200,
    margin: "auto",
  },
  avatar: {
    backgroundColor: 'secondary.main',
    height:50,
    width:50
  },
}));
type propTypes = {
    avatarSrc:string,
    name:string,
    review:string
}

const ReviewCard = ({ avatarSrc, name, review }:propTypes) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="reviewer" src={avatarSrc} className={classes.avatar}>
            {name.charAt(0).toUpperCase()}
          </Avatar>
        }
        title={
            <Stack>
                <Typography variant="body1" component='h4' sx={{fontWeight:'bold',letterSpacing:1}}>Arslan</Typography>
                <Typography variant="subtitle1" component='h4'>Software Engineer</Typography>
            </Stack>
        }
      />
      <CardContent>
        <Typography variant="body1" color="textPrimary" component="p" >
        {review.length > 150 ? review.substring(0, 150) + "..." : review}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ReviewCard;
