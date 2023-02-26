import { makeStyles } from "@mui/styles";

export default makeStyles((theme)=>({
    container: {
        maxWidth: '800px', // limit player size on larger screens
        margin: '0 auto',
      },
    playerWrapper: {
        position: 'relative',
        paddingTop: '56.5%', // 16:9 aspect ratio
        marginBottom: '2rem',

      },
      reactPlayer: {
        position: 'absolute',
        top: 0,
        left: 0,
        border:'1rem solid lightblue',
        borderRadius:'5px'
      },
      customPlayButton: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        zIndex: 1,
        cursor: 'pointer',
      },
      customPoster: {
        objectFit: 'cover',
      }
}))