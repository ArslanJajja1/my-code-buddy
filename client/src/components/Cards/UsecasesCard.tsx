import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import BugIcon from '@mui/icons-material/BugReport';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    backgroundColor: '#f8f8f8',
  },
  header: {
    backgroundColor: '#1565C0',
    color: '#fff',
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  content: {
    padding: theme.spacing(2),
  },
}));

type propTypes = {
    title:string,
    description:string,
    icon:React.ReactNode
}
export default function UseCasesCard({ title,description,icon }:propTypes) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardHeader
        className={classes.header}
        avatar={<BugIcon />}
        title={title}
      />
      <CardMedia
        className={classes.media}
        image="https://picsum.photos/345/200"
        title={title}
      />
      <CardContent className={classes.content}>
        <Typography variant="body2" color="textSecondary" component="p">
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
}
