import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { styled } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import MenuItem from '@mui/material/MenuItem';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import { useState } from 'react';
import { Link } from 'react-router-dom';

interface ComponentProps {
    active?: string;
}

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexShrink: 0,
    borderRadius: `calc(${theme.shape.borderRadius}px + 8px)`,
    border: '1px solid',
    borderColor: theme.palette.divider,
    padding: '8px 12px',
}));

const StyledMenuItem = styled(MenuItem)(({ theme, selected }) => ({
    '&.Mui-selected': {
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.common.white,
        '&:hover': {
            backgroundColor: theme.palette.primary.dark,
        },
    },
    // Стиль при наведении курсора
    '&:hover': {
        backgroundColor: selected
            ? theme.palette.primary.dark // Если уже выделен — темнее синий
            : '#29b6f6',                   // Если не выделен — голубой цвет (#29b6f6)
        color: selected
            ? theme.palette.common.white // Для выделенного — белый текст
            : theme.palette.text.primary, // Для невыделенного — стандартный цвет текста
    },
    // Для невыделенных пунктов стандартный стиль
    '&:not(.Mui-selected)': {
        color: theme.palette.text.primary,
    },
}));

function Navbar({ active }: ComponentProps) {
    const [open, setOpen] = useState(false);
    const toggleDrawer = (newOpen: boolean) => () => {
        setOpen(newOpen);
    };
    return (
        <AppBar
            position="static"
            sx={{
                boxShadow: 0,
                bgcolor: 'transparent',
                mt: '28px',
            }}
        >
            <Container maxWidth="xl">
                <StyledToolbar>
                    <Typography variant="h6" sx={{ color: '#5d8aa8' }}>
                        Самые высокие здания и сооружения
                    </Typography>
                    <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                        <Link to="/">
                            <Button
                                variant={active === '1' ? 'contained' : 'text'}
                                color="info" size="medium">
                                Главная
                            </Button>
                        </Link>
                        <Link to="/list">
                            <Button
                                variant={active === '2' ? 'contained' : 'text'}
                                color="info" size="medium">
                                Список зданий
                            </Button>
                        </Link>
                        <Link to="/chart">
                            <Button
                                variant={active === '3' ? 'contained' : 'text'}
                                color="info" size="medium">
                                Даграммы
                            </Button>
                        </Link>
                    </Box>

                    {/* Выпадающее меню */}
                    <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
                        <IconButton aria-label="Menu button" onClick={toggleDrawer(true)}>
                            <MenuIcon />
                        </IconButton>
                        <Drawer
                            anchor="top"
                            open={open}
                            onClose={toggleDrawer(false)}
                        >
                            <Box>
                                <Box
                                    sx={{
                                        display: 'flex',
                                        justifyContent: 'flex-end',
                                    }}
                                >
                                    <IconButton onClick={toggleDrawer(false)}>
                                        <CloseRoundedIcon />
                                    </IconButton>
                                </Box>
                                <Link to="/">
                                    <StyledMenuItem
                                        //   component="button"
                                        //   onClick={toggleDrawer(false)}
                                        selected={active === '1' || !active}
                                    >
                                        Главная
                                    </StyledMenuItem>
                                </Link>
                                <Link to="/list">
                                    <StyledMenuItem
                                        //   component="button"
                                        //   onClick={toggleDrawer(false)}
                                        selected={active === '2'}
                                    >
                                        Список зданий
                                    </StyledMenuItem>
                                </Link>
                                <Link to="/chart">
                                    <StyledMenuItem
                                        //   component="button"
                                        //   onClick={toggleDrawer(false)}
                                        selected={active === '3'}
                                    >
                                        Диограммы
                                    </StyledMenuItem>
                                </Link>
                            </Box>
                        </Drawer>
                    </Box>
                </StyledToolbar>
            </Container>
        </AppBar>
    );
}
export default Navbar;