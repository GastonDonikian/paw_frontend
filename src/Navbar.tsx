import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import {isAuthenticated} from "./Services/AuthHelper";
import "./App.css"
import Grid from '@mui/material/Grid'
import {useEffect, useState} from "react";

const pagesLoggedOut = ['Professors'];
const pagesLoggedIn =  ['Professors', 'MyLessons', 'MyStudents'];
const rightLoggedOut = ['Register', 'Login'];
const settingsLoggedIn = ['Profile' ,'mySubjects', 'Logout'];
const settingsLoggedOut = ['Register', 'Login'];

function Navbar() {
    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
    const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);
    const [settings, setSettings] = useState<string []>([]);
    const [pages, setPages] = useState<string []>([])


    useEffect(() => {
        setSettings(isAuthenticated() ? settingsLoggedIn : settingsLoggedOut);
        setPages(isAuthenticated() ? pagesLoggedIn : pagesLoggedOut);
    },[])
    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    return (
        <AppBar position="static">
            <Container maxWidth="xl" sx={{bgcolor: '#343A40' }}>
                <Toolbar disableGutters  >
                    <Grid container
  direction="row"
  justifyContent="space-between"
  alignItems="center">
                <Typography component="a"
                        href="/">
                    <img src="./connect.png" height={50} />
            
                </Typography>

                    <Grid item sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
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
                            {pages.map((page) => (
                                <MenuItem key={page} onClick={handleCloseNavMenu}>
                                    <Typography textAlign="center">{page}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Grid>
                   
                    <Grid item sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        {pages.map((page) => (
                            <Button
                                key={page}
                                href={'/' + page.toLowerCase()}
                                onClick={handleCloseNavMenu}
                                sx={{ my: 2, color: 'white', display: 'block',
                                '&:hover': {
                                    color: 'white'
                                },}}
                            >
                                {page}
                            </Button>
                        ))}
                    </Grid>

                    {isAuthenticated() ? <Grid item sx={{ flexGrow: 0 }}>
                        <Tooltip title="Open settings">
                            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                <Avatar alt="Remy Sharp" src="./profilePhoto.jpeg" />
                            </IconButton>
                        </Tooltip>
                        <Menu
                            sx={{ mt: '45px' }}
                            id="menu-appbar"
                            anchorEl={anchorElUser}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(anchorElUser)}
                            onClose={handleCloseUserMenu}
                        >
                            {
                                settings.map((setting) => (
                                <MenuItem component="a" href={setting.toLowerCase()} key={setting}>
                                    <Typography textAlign="center">{setting}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Grid> : 
                    <Grid item  justifyContent="flex-end" sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                    {rightLoggedOut.map((page) => (
                        <Button
                            key={page}
                            href={'/' + page.toLowerCase()}
                            onClick={handleCloseNavMenu}
                            sx={{ my: 2, color: 'white', display: 'block','&:hover': {
                                color: 'white'
                            },}}
                        >
                            {page}
                        </Button>
                    ))}
                </Grid>
                     }

                </Grid>
                </Toolbar>
            </Container>
        </AppBar>
    );
}
export default Navbar;