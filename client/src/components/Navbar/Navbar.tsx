import React,{useState} from 'react'
import { AppBar,Container, Toolbar,Box,IconButton,Typography,Menu,Avatar,Button,Tooltip,MenuItem  } from '@mui/material'

const pages = ['How It Works','Usecases','Pricing']
const settings = ['Profile','Account','Dashboard','Logout']
const Navbar = () => {
    const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null)
    const [anchorElUser,setAnchorElUser] = useState<null | HTMLElement>(null)
    const handleOpenNavMenu = (event:React.MouseEvent<HTMLElement>)=>{
        setAnchorElNav(event.currentTarget)
    }
    const handleOpenUserMenu = (event:React.MouseEvent<HTMLElement>)=>{
        setAnchorElUser(event.currentTarget)
    }
    const handleCloseNavMenu = (event:React.MouseEvent<HTMLElement>)=>{
        setAnchorElNav(null)
    }
    const handleCloseUserMenu = (event:React.MouseEvent<HTMLElement>)=>{
        setAnchorElUser(null)
    }
  return (
    <AppBar>
      <Container>
        <Toolbar>Navbar</Toolbar>
      </Container>
    </AppBar>
  )
}

export default Navbar
