import * as React from 'react';
import { Link } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ContentPasteGoIcon from '@mui/icons-material/ContentPasteGo';

export default function ImgMediaCard({ image, title, description, link }) {
  return (
    <Card
      sx={{
        maxWidth: 410,
        width: '33.33%',
        position: 'relative',
        transition: 'transform 0.3s ease-in-out',
        '&:hover': {
          transform: 'translateY(-10px)',
        },
        '&:hover .hover-content': {
          opacity: 1,
          visibility: 'visible',
        },
      }}
    >
      <div
        style={{
          backgroundImage: `url(${image})`,
          backgroundSize: 'cover',
          height: '140px',
          width: '100%',
          padding: '100px',
        }}
      ></div>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" sx={{ textAlign: 'center' }}>
          {title}
        </Typography>
        <Typography gutterBottom variant="h5" component="div" sx={{ textAlign: 'center' }}>
          {description}
        </Typography>
      </CardContent>
      <CardActions
        className="hover-content"
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          opacity: 0,
          visibility: 'hidden',
          transition: 'opacity 0.3s ease-in-out, visibility 0.3s ease-in-out',
        }}
      >
        <Link to={link} style={{ textDecoration: 'none' }}>
          <Button
            size="small"
            sx={{
              transition: 'transform 0.2s ease-in-out, backgroundColor: 0.3s',
              backgroundColor: 'rgb(234 88 12)',
              color: '#fff',
              gap: '5px',
              '&:hover': {
                transform: 'scale(1.1)',
                backgroundColor: 'rgb(234 88 12)',
                color: '#fff',
              },
            }}
          >
            <h3>Live Preview</h3>
            <ContentPasteGoIcon />
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
}
