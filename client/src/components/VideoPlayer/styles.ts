import { purple } from "@mui/material/colors";
import { makeStyles } from "@mui/styles";

const PRIMARY_MAIN = '#1976d2'
const PRIMARY_LIGHT = '#42a5f5'
const PRIMARY_DARK = '#1565c0'

export default makeStyles((theme)=>({
    container: {
        maxWidth: '700px', // limit player size on larger screens
        margin: '0 auto',
      },
    playerWrapper: {
        position: 'relative',
        paddingTop: '56.5%', // 16:9 aspect ratio
      },
      reactPlayer: {
        position: 'absolute',
        top: 0,
        left: 0,
        border:`1rem solid ${PRIMARY_MAIN}`,
        borderRadius:'8px',
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