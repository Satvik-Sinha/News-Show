import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function ActionAreaCard(props) {
  
  return (
    <Card sx={{ width: 345 , height : 345}}>
      <CardActionArea a href={props.newsUrl} target='blank'>
        <CardMedia
          component="img"
          height="140"
          image={props.imageUrl}
          alt="img"
        />
        <CardContent>
          <Typography gutterBottom variant="h7">
            {props.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {props.description}
          </Typography>
         
        </CardContent>
      </CardActionArea>
    </Card>
  );
}



