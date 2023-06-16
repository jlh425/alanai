import React from 'react'
import { Card, CardActions, CardActionArea, CardContent, CardMedia, Button, Typography } from '@mui/material'
import {news} from "../assets/images/news.svg";
import useStyles from "./styles";
const NewsCard = ({article: {description, publishedAt, Source, title, url, urlToImage}, i}) => {
  const classes = useStyles();
  return (
    <Card>
      <CardActionArea>
        <CardMedia className={classes.media} image={urlToImage || news }  />
        <div>
          <Typography
            variant="body2"
            color="textSecondary"
            component="h2"
          >{(new Date(publishedAt)).toDateString()}</Typography>
          <Typography
            variant="body2"
            color="textSecondary"
            component="h2"
          >{Source.name}</Typography>
        </div>
        <Typography gutterBottom variant="h5"></Typography>
        <CardContent>
          <Typography variant="body2" color="textSecondary" components="p" >{description}</Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">Learn More</Button>
        <Typography variant='h5' color="textSecondary">{i +1}</Typography>
      </CardActions>
    </Card>
  );
}

export default NewsCard