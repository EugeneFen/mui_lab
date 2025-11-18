import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import structures from "../../data";
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';

interface ComponentProps {
    index: number;
}

function BuildPage({ index }: ComponentProps) {
    const building = structures[index];

    return (
        <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                {/* Карточка здания */}
                <Card sx={{ p: 3 }}>
                    <CardMedia
                        component="img"
                        image={building.img}
                        alt={building.title}
                        sx={{
                            width: '30%',      // ширина изображения (можно регулировать)
                            flexShrink: 0,  // не сжимать картинку при нехватке места
                            mx: 'auto',       // auto-отступы слева и справа → центрирование
                        }}
                    />
                    <Typography variant="h4" gutterBottom>
                        {building.title}
                    </Typography>
                    <Typography variant="body1" paragraph>
                        {building.description.join('\n')}
                    </Typography>
                </Card>
            </Box>
        </Container>
    );
}
export default BuildPage;