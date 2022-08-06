import * as React from 'react';
import { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import { useNavigate  } from 'react-router-dom';

const Navbar = () => {
    const [anchorElNav, setAnchorElNav] = useState()
    const pages = ['Patients Data', 'SMS reminder'];
    const navigate = useNavigate()
    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };
  return (
    <AppBar position="static" color='inherit' style={{marginBottom: '15px'}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <CalendarMonthIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontWeight: 700,
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            My Scheduler
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => {
                if(page === 'Patients Data')
                {
                    return (
                    <MenuItem key={page} onClick={handleCloseNavMenu}>
                        <Typography textAlign="center" component='a' href='/patients' style={{textDecoration: 'none', color: 'black'}}>{page}</Typography>
                    </MenuItem>
                    )
                }
                else
                {
                    return (
                    <MenuItem key={page} onClick={handleCloseNavMenu}>
                        <Typography textAlign="center" component='a' href='/sendText' style={{textDecoration: 'none', color: 'black'}}>{page}</Typography>
                    </MenuItem>
                    )
                }
                })}
            </Menu>
          </Box>
          <CalendarMonthIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontWeight: 700,
              color: 'Black',
              textDecoration: 'none',
            }}
          >
            My Scheduler
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }}}>
            {pages.map((page) => {
                if(page === 'Patients Data')
                {
                    return (
                    <Button
                    style={{textTransform: 'none', color: 'black'}}
                    key={page} 
                    onClick={() => {navigate('/patients')}}
                    >
                        {page}
                    </Button>
                    )
                }
                else
                {
                    return (
                    <Button
                    style={{textTransform: 'none', color: 'black'}}
                    key={page}
                    onClick={() => {navigate('/sendText')}} 
                    >
                        {page}
                    </Button>
                    )
                }

            }
            )}
          </Box>        
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default Navbar