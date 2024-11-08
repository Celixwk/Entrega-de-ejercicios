import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';

const CharCardInfo = (props) => {
  return (
    <Card sx={{ 
      maxWidth: 800,
      minHeight: 600,
      display: 'flex',
      flexDirection: { xs: 'column', md: 'row' },
      backgroundColor: '#1a1a1a',
      overflow: 'hidden',
      borderRadius: 2
    }}>
      <Box sx={{
        flex: { xs: '1', md: '0 0 40%' },
        background: 'linear-gradient(135deg, #2d3748 0%, #1a202c 100%)',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        p: 2,
        '&::after': {
          content: '""',
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: '100px',
          background: 'linear-gradient(to top, #1a1a1a 0%, transparent 100%)',
          pointerEvents: 'none'
        }
      }}>
        <CardMedia
          component="img"
          image={props.img}
          alt={props.nombre}
          sx={{
            width: '100%',
            height: 'auto',
            maxHeight: '500px',
            objectFit: 'contain',
            filter: 'drop-shadow(0 0 10px rgba(0,0,0,0.3))',
            position: 'relative',
            zIndex: 1
          }}
        />
      </Box>
      
      <Box sx={{
        flex: { xs: '1', md: '0 0 60%' },
        display: 'flex',
        flexDirection: 'column',
      }}>
        <CardContent sx={{ p: 4, flex: 1 }}>
          <Typography 
            variant="h3" 
            component="h1"
            sx={{ 
              color: '#fbbf24',
              fontWeight: 'bold',
              mb: 3,
              textShadow: '2px 2px 4px rgba(0,0,0,0.3)'
            }}
          >
            {props.nombre}
          </Typography>

          <Divider sx={{ 
            mb: 3, 
            borderColor: 'rgba(251, 191, 36, 0.3)',
            boxShadow: '0 1px 2px rgba(251, 191, 36, 0.1)'
          }}/>
          
          <Box sx={{ 
            backgroundColor: 'rgba(45, 55, 72, 0.3)',
            borderRadius: 2,
            p: 3,
            mb: 3
          }}>
            <Typography 
              variant="body1" 
              sx={{ 
                color: '#d1d5db',
                lineHeight: 1.8,
                textAlign: 'justify',
                '& strong': {
                  color: '#fbbf24'
                }
              }}
            >
              {props.descripcion}
            </Typography>
          </Box>

          <Box sx={{
            display: 'flex',
            gap: 2,
            flexWrap: 'wrap',
            mt: 'auto'
          }}>
            {props.tags && props.tags.map((tag, index) => (
              <Box key={index} sx={{
                backgroundColor: 'rgba(251, 191, 36, 0.1)',
                color: '#fbbf24',
                px: 2,
                py: 0.5,
                borderRadius: 'full',
                fontSize: '0.875rem',
                border: '1px solid rgba(251, 191, 36, 0.3)'
              }}>
                {tag}
              </Box>
            ))}
          </Box>
        </CardContent>
      </Box>
    </Card>
  );
}

CharCardInfo.defaultProps = {	
  img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8GAcNf2A8wsr7rHBPhxfvi36V6Aq2kswNUg&s",
  nombre: "_____",
  descripcion: "_____",
  afiliacion: "__________",
};

export default CharCardInfo;