import React, {useState, useEffect, createRef} from 'react'
import { Card, CardActions, CardActionArea, CardContent, CardMedia, Button, Typography } from '@mui/material'
import {news} from "../../../assets/images/index.js";
import useStyles from "./styles";
import classNames from 'classnames';

const NewsCard = ({article: {description, publishedAt, Source, title, url, urlToImage}, i, activeArticle}) => {
  const classes = useStyles();
  const [elRefs, setElRefs] = useState([]);
  const scrollToRef = (ref) => window.scroll(0,ref.current.offsetTop -50);

  useEffect(() => {
    setElRefs((refs) => Array(20).fill().map((_, j) => refs[j] || createRef()));
  }, []);
  useEffect(() => {
    if(i === activeArticle && elRefs[activeArticle]) {
      scrollToRef(elRefs[activeArticle])
    }
  },[i, activeArticle, elRefs])
  return (
    <Card ref={elRefs[i]} className={classNames(classes.card, activeArticle=== i ? classes.activeCard : null)}>
      <CardActionArea href={url} target="_blank">
        <CardMedia className={classes.media} image={urlToImage || news} />
        <div className={classes.details}>
          <Typography
            className={classes.title}
            variant="body2"
            color="textSecondary"
            component="h2"
          >
            {new Date(publishedAt).toDateString()}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="h2">
            {Source.name}
          </Typography>
        </div>
        <Typography gutterBottom variant="h5"></Typography>
        <CardContent>
          <Typography variant="body2" color="textSecondary" components="p">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className={classes.cardActions}>
        <Button size="small" color="primary">
          Learn More
        </Button>
        <Typography variant="h5" color="textSecondary">
          {i + 1}
        </Typography>
      </CardActions>
    </Card>
  );
}

export default NewsCard