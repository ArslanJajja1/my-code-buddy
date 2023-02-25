import React,{useState} from 'react'
import { AppBar,Container, Toolbar,Box,IconButton,Typography,Menu,Avatar,Button,Tooltip,MenuItem  } from '@mui/material'
import PsychologyIcon from '@mui/icons-material/Psychology'; 
import MenuIcon from '@mui/icons-material/Menu';
import avatarImage from '../../assets/images/arslan.jpg'

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
    <AppBar position='static' color='transparent'>
      <Container maxWidth='xl'>
        <Toolbar disableGutters >
            <PsychologyIcon sx={{display:{xs:'none',md:'flex'},mr:1}} />
            <Typography
            variant='h6'
            noWrap
            component='a'
            href='/'
            sx={{
                mr:2,
                display:{xs:'none',md:'flex'},
                fontWeight:700,
                letterSpacing:'.2rem',
                color:'inherit',
                textDecoration:'none'
            }}
            >CodeBuddy</Typography>
            <Box
            sx={{flexGrow:1,display:{xs:'flex',md:'none'}}}
            >
                <IconButton
                size='large'
                aria-label='Nav items'
                aria-controls='menu-appbar'
                aria-aria-haspopup='true'
                onClick={handleOpenNavMenu}
                color='inherit'
                >
                    <MenuIcon />
                </IconButton>
                <Menu
                id='menu-appbar'
                anchorEl={anchorElNav}
                anchorOrigin={{
                    vertical:'bottom',
                    horizontal:'left'
                }}
                keepMounted
                transformOrigin={{
                    vertical:'top',
                    horizontal:'left'
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{display:{xs:'block',md:'none'}}}
                >
                    {
                        pages.map((page)=>(
                            <MenuItem key={page} onClick={handleCloseNavMenu}>
                                <Typography textAlign='center'>{page}</Typography>
                            </MenuItem>
                        ))
                    }
                </Menu>
            </Box>
            <PsychologyIcon sx={{display:{xs:'flex',md:'none'},mr:1}}/>
            <Typography
            variant='h6'
            noWrap
            component='a'
            href='/'
            sx={{
                mr:2,
                display:{xs:'flex',md:'none'},
                flexGrow:1,
                fontWeight:700,
                letterSpacing:'.1rem',
                color:'inherit',
                textDecoration:'none'
            }}
            >
                CodeBuddy
            </Typography>
            <Box
            sx={{display:{xs:'none',md:'flex'},mx:'auto'}}
            >
                {pages.map((page)=>(<Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{my:2,color:'inherit',display:'block',letterSpacing:'2px',fontWeight:'600',mx:'5px'}}
                >
                    {page}
                </Button>))}
            </Box>
            <Box
            sx={{flexGrow:0}}
            >
                <Tooltip title='Open Settings'>
                    <IconButton onClick={handleOpenUserMenu} sx={{p:0}}
                    aria-label='User profile menu'
                    aria-controls='menu-userbar'
                    aria-aria-haspopup='true'
                    >
                        <Avatar alt='Arslan' src={avatarImage}/> 
                    </IconButton>
                </Tooltip>
                <Menu 
                sx={{mt:'45px'}}
                id='menu-userbar'
                anchorEl={anchorElUser}
                anchorOrigin={{
                    vertical:'top',
                    horizontal:'right'
                }}
                keepMounted
                transformOrigin={{
                    vertical:'top',
                    horizontal:'right'
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
                >
                    {settings.map((setting)=>(
                        <MenuItem key={setting} onClick={handleCloseUserMenu}>
                            <Typography textAlign='center'>{setting}</Typography>
                        </MenuItem>
                    ))}
                </Menu>
            </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default Navbar
