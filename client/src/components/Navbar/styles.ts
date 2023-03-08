import { makeStyles } from '@mui/styles'

export default makeStyles((theme)=>({
  parent:{
    position:'relative'
  },
  container:{
    backgroundColor:'#FBFBFB !important',
    color:'black !important',
   },
  activeNavItem:{
    backgroundColor:'#F2F6F9 !important',
  },
  activeNavItemMobile:{
    backgroundColor:'#F2F6F9 !important',
  },
  goTop:{
    display:'block !important',
    postion:'absolute !important',
    bottom:'10%',
    right:'10%',
    left:"80%",
    zIndex:999,
  }
}))