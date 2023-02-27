import { makeStyles } from "@mui/styles";

const SECONDARY_COLOR_MAIN = '#141125'

export default makeStyles((theme)=>({
    container:{
        padding:'1px'
    },
    description:{
        color:`${SECONDARY_COLOR_MAIN} !important`,
        fontWeight:'600'
    }
}))