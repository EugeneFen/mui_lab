import { Box, Typography, Link } from '@mui/material';


function Footer() {
    return (
        <Box
            component="footer"
            sx={{
                backgroundColor: 'primary.main',
                color: 'primary.contrastText',
                py: 3,
                px: 2,
                mt: 'auto', // прижмёт к низу, если контейнер использует flex
                textAlign: 'center',
            }}
        >
            <Typography variant="body2">
                © {new Date().getFullYear()} Моя компания. Все права защищены мной (или нет).
            </Typography>
        </Box>
    );
}

export default Footer;
