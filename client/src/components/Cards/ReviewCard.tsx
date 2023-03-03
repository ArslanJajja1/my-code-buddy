import React from "react";
import { makeStyles } from "@mui/styles";
import {
  Stack,
  CardContent,
  Typography,
  Avatar,
  CardHeader,
  Card,
} from "@mui/material";

const useStyles = makeStyles((theme) => ({
  avatar: {
    backgroundColor: "secondary.main",
    height: 50,
    width: 50,
  },
}));
type propTypes = {
  avatar: string;
  name: string;
  position: string;
  review: string;
};

const ReviewCard = ({ avatar, name, position, review }: propTypes) => {
  const classes = useStyles();

  return (
    <Card sx={{ marginBottom:'1.2rem !important' ,maxWidth: { md: 400, xs: 290, margin: "auto" } }}>
      <CardHeader
        avatar={
          <Avatar aria-label="reviewer" src={avatar} className={classes.avatar}>
            {name.charAt(0).toUpperCase()}
          </Avatar>
        }
        title={
          <Stack>
            <Typography
              variant="body1"
              component="h4"
              sx={{ fontWeight: "bold", letterSpacing: 1 }}
            >
              {name}
            </Typography>
            <Typography variant="subtitle1" component="h4">
              {position}
            </Typography>
          </Stack>
        }
      />
      <CardContent>
        <Typography variant="body1" color="textPrimary" component="p">
          {review.length > 150 ? review.substring(0, 150) + "..." : review}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ReviewCard;
