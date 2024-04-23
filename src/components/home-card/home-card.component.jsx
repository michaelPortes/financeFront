import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

import './home-card.style.css'

const card = ({button, redirect, title}) => (
  <React.Fragment>
    <CardContent className='card-content'>
      <Typography variant="h5" component="div">
        {title}
      </Typography>
      <Typography sx={{ mb: 1.5 }} color="text.secondary">
        adjective
      </Typography>
      <Typography variant="body2">
        well meaning and kindly.
        <br />
        {'"a benevolent smile"'}
      </Typography>
    </CardContent>
    <CardActions>
      <Button size="small">
        <Link to={'/' + redirect}>
          {button}
        </Link>
      </Button>
    </CardActions>
  </React.Fragment>
);

export default function OutlinedCard({button, redirect, ...title }) {
  return (
    <Box sx={{ minWidth: 275 }}>
      <Card variant="outlined">{card({button, redirect, ...title})}</Card>
    </Box>
  );
}