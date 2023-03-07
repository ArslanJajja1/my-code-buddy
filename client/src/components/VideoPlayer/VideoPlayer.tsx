import ReactPlayer from "react-player";
import useStyles from "./styles";
import Video from "../../assets/videos/intro.mp4";
import { useState } from "react";
const VideoPlayer = () => {
  const classes = useStyles();

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
          light="https://images.pexels.com/photos/8728286/pexels-photo-8728286.jpeg?auto=compress&cs=tinysrgb&w=600"
        />
      </div>
    </div>
  );
};

export default VideoPlayer;
