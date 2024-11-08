import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import Box from '@mui/material/Box';

const CharCard = (props) => {
  return (
    <Card 
      sx={{ 
        maxWidth: 345,
        backgroundColor: '#1e1e1e',
        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        position: 'relative',
        '&:hover': {
          transform: 'scale(1.03) translateY(-8px)',
          boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.3)',
          '& .MuiCardMedia-root': {
            transform: 'scale(1.05)',
          },
          '& .card-content': {
            '& .MuiTypography-h5': {
              color: '#fbbf24',
            },
          },
        },
        borderRadius: '8px',
        overflow: 'hidden'
      }}
    >
      <CardActionArea>
        <Box sx={{
          background: 'linear-gradient(135deg, #2d3748 0%, #1a202c 100%)',
          aspectRatio: '1',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'hidden', // Important for image scale animation
        }}>
          <CardMedia
            component="img"
            image={props.img}
            alt={props.nombre}
            sx={{
              width: '100%',
              height: '100%',
              objectFit: 'contain',
              padding: '1rem',
              transition: 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
            }}
          />
        </Box>
        <CardContent 
          className="card-content"
          sx={{
            background: '#1e1e1e',
            p: 2.5,
            '&:last-child': { pb: 3 }, // Override MUI's default padding
          }}
        >
          <Typography 
            gutterBottom 
            variant="h5" 
            component="div" 
            sx={{ 
              color: '#fff',
              fontWeight: 'bold',
              mb: 1,
              transition: 'color 0.3s ease',
            }}
          >
            {props.nombre}
          </Typography>
          
          <Typography 
            variant="body2" 
            sx={{ 
              color: '#fbbf24',
              mb: 2,
              fontSize: '0.875rem'
            }}
          >
            {props.especie} - {props.genero}
          </Typography>
          
          <Box 
            sx={{ 
              display: 'flex', 
              flexDirection: 'column', 
              gap: 1,
              '& .MuiBox-root': {
                transition: 'transform 0.2s ease',
                '&:hover': {
                  transform: 'translateX(4px)'
                }
              }
            }}
          >
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
              <Typography variant="body2" sx={{ color: '#9ca3af' }}>
                Base Ki:
              </Typography>
              <Typography variant="body2" sx={{ color: '#d1d5db' }}>
                {props.baseKi}
              </Typography>
            </Box>
            
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
              <Typography variant="body2" sx={{ color: '#9ca3af' }}>
                Total Ki:
              </Typography>
              <Typography variant="body2" sx={{ color: '#d1d5db' }}>
                {props.totalKi}
              </Typography>
            </Box>
            
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
              <Typography variant="body2" sx={{ color: '#9ca3af' }}>
                Affiliation:
              </Typography>
              <Typography variant="body2" sx={{ color: '#d1d5db' }}>
                {props.afiliacion}
              </Typography>
            </Box>
          </Box>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

CharCard.defaultProps = {	
  img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8GAcNf2A8wsr7rHBPhxfvi36V6Aq2kswNUg&s",
  nombre: "_____", 
  especie: "____",
  genero: "_____",
  baseKi: "____________",
  totalKi: "____________",
  afiliacion: "__________",
};

export default CharCard;