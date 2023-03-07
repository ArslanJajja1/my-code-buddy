import { makeStyles } from '@mui/styles'

export default makeStyles((theme)=>({
  container:{
    backgroundColor:'#FBFBFB !important',
    color:'black !important'
   },
  navItems:{
     transition:'all 0.3s ease',
    '&:hover':{
        // backgroundColor:'gray'
    }
  }
}))