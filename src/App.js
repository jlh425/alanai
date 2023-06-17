import React, { useState, useEffect } from 'react'
import alanBtn from '@alan-ai/alan-sdk-web';
import NewsCards from './components/NewsCards/NewsCards';
import {alanlogo} from '../assets/images/alanlogo.svg'
import useStyles from "./styles"

const App = () => {
    const [newsArticles, setNewsArticles] = useState([]);
    const classes = useStyles();

    useEffect(() => {
      alanBtn({
        key: "e8d40d3f6ca8bd8c2920fc4e497f9c102e956eca572e1d8b807a3e2338fdd0dc/stage",
        onCommand: ({ command, articles}) => {
          if (command === 'newHeadlines') {

          }
        },
      });
    }, []);
  return (
    <div>
      <div>
        <img src={alanlogo} className={classes.alanLogo} alt="Alan logo" />
      </div>
      <NewsCards articles={newsArticles} />
    </div>
  );
}

export default App