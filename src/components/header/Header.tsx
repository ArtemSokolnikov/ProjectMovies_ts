import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import React from 'react';
import { useHistory } from "react-router-dom";
import { details, favourites, home } from "../../utils/constants";

const pages = ['Home', 'Buy tickets', 'Favourites'];

const Header = () => {
    const history = useHistory();

    const handleNavMenu = (page: string) => {
        if (page === 'Buy tickets') {
            history.push(details);
        } else if (page === 'Favourites') {
            history.push(favourites);
        } else if (page === 'Home') {
            history.push(home);
        }
    };

    return (
        <AppBar position="static">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        {pages.map((page) => (
                            <Button
                                key={page}
                                onClick={() => handleNavMenu(page)}
                                sx={{ my: 2, color: 'white', display: 'block', boxShadow: 0 }}
                            >
                                {page}
                            </Button>
                        ))}
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    )
}

export default Header