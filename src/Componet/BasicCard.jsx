import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const BasicCard = ({ icon, title, description }) => {
  return (
    <Card
      sx={{
        minWidth: 275,
        width: '23%',
        marginTop: '10px',
        transition: 'transform 0.3s, box-shadow 0.3s',
        '&:hover': {
          transform: 'translateY(-10px)', // Moves card up on hover
          boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.2)', // Adds shadow on hover
        }
      }}
    >
      <CardContent>
        <div className="icon d-flex">
          <Box 
            sx={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: 1, 
              justifyContent: 'center', 
              backgroundColor: '#f9731633', 
              borderRadius: '10px' 
            }}
          >
            {icon} {/* Icon passed as prop */}
          </Box>
        </div>
        <div className="title d-flex">
          <Typography 
            gutterBottom 
            sx={{ color: 'black', fontSize: '1.125rem', fontWeight: '600', marginTop: '15px' }}
          >
            {title} {/* Title passed as prop */}
          </Typography>
        </div>
        <div className="description">
          <Typography 
            variant="body2" 
            sx={{ 
              lineHeight: '1.25rem', 
              fontSize: '0.875rem', 
              height: '7.5rem', // Fixed height for two lines
              textAlign:'center'
            }}
          >
            {description} {/* Description passed as prop */}
          </Typography>
        </div>
      </CardContent>
    </Card>
  );
}

export default BasicCard;
