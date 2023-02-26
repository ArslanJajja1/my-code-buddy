import ReactPlayer from "react-player"
import useStyles from './styles'
import Video from '../../assets/videos/intro.mp4'
import { useMediaQuery } from '@mui/material';
import {useState} from 'react'
const VideoPlayer = () => {
    const classes = useStyles();
//   const isSmallScreen = useMediaQuery(theme => theme.breakpoints.down('sm'));

  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayButtonClick = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div className={classes.container}>
        <div className={classes.playerWrapper} onClick={handlePlayButtonClick}>

<ReactPlayer
 url={Video}
 width="90%"
 height="90%"
 className={classes.reactPlayer}
 playing={isPlaying}
 controls
 light='https://images.pexels.com/photos/8728286/pexels-photo-8728286.jpeg?auto=compress&cs=tinysrgb&w=600'
 
/>
{/* {!isPlaying && (
 <div className={classes.customPlayButton} onClick={handlePlayButtonClick}>
   <svg width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
     <circle cx="36" cy="36" r="35" fill="#3F51B5"/>
     <path d="M27 23V49L47 36L27 23Z" fill="white"/>
   </svg>
 </div>
)} */}
</div>
    </div>
  );}

export default VideoPlayer
