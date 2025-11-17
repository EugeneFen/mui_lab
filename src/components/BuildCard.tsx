import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import styled from 'styled-components';

interface ComponentProps {
    building: {
        img: string,
        title: string,
        description: string[],
    };
    index: number;
}

// const StyledTypography = styled(Typography)`
//   color: ${({ theme }) => theme.palette.text.secondary};
//   text-align: justify; /* выравнивание по ширине */
//   margin-block: 8px; /* отступы между абзацами */
// `;

function BuildCard({ building, index }: ComponentProps) {
    return (
  <Card sx={{ mb: 2, display: 'flex', flexDirection: 'row', alignItems: 'flex-start' }}>
{index % 2 !== 0 && (
<CardMedia
        component="img"
        sx={{ 
          width: '30%',      // ширина изображения (можно регулировать)
          flexShrink: 0,  // не сжимать картинку при нехватке места
        //   mr: index % 2 === 0 ? 2 : 0, // отступ справа для чётных
          ml: index % 2 !== 0 ? 2 : 0, // отступ слева для нечётных
        }}
        image={building.img}
        alt={building.title}
      />
)}

             <Box sx={{ flex: 1 }}>
                 <CardContent>
                     <Typography gutterBottom variant="h5">
                         {building.title}
                     </Typography>
                     {building.description.map((item, ind) => (
                         <Typography
                             key={ind}
                             variant="body2"
                             sx={{
                                 color: 'text.secondary',
                                 textAlign: 'justify',
                                  marginBlock: '8px',
                             }}
                         >
                             {item}
                         </Typography>
                     ))}
                 </CardContent>
                 <CardActions sx={{ justifyContent: 'end' }}>
                     <Button size="small">Подробнее</Button>
                 </CardActions>
             </Box>

             {index % 2 == 0 && (
<CardMedia
        component="img"
        sx={{ 
          width: '30%',      // ширина изображения (можно регулировать)
          flexShrink: 0,  // не сжимать картинку при нехватке места
          mr: index % 2 === 0 ? 2 : 0, // отступ справа для чётных
        //   ml: index % 2 !== 0 ? 2 : 0, // отступ слева для нечётных
        }}
        image={building.img}
        alt={building.title}
      />
)}
    
  </Card>
);

}
export default BuildCard;