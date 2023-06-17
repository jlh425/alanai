import React, { useState, useEffect } from 'react'
import alanBtn from '@alan-ai/alan-sdk-web';
import NewsCards from './components/NewsCards/NewsCards';
import {alanlogo} from '../assets/images/alanlogo.svg'
import wordsToNumbers from 'words-to-numbers';
import useStyles from "./styles"

const App = () => {
    const [newsArticles, setNewsArticles] = useState([]);
    const [activeArticle, setActiveArticle] = useState(-1);
    const classes = useStyles();

    useEffect(() => {
      alanBtn({
        key: "e8d40d3f6ca8bd8c2920fc4e497f9c102e956eca572e1d8b807a3e2338fdd0dc/stage",
        onCommand: ({ command, articles, number}) => {
          if (command === 'newHeadlines') {
              setNewsArticles(articles);
              setActiveArticle(-1)
          } else if (command === 'highlight') {
            setActiveArticle((prevActiveArticle) => prevActiveArticle + 1);
          } else if (command === 'open'){
            const parsedNumber = number.length > 2 ? wordsToNumbers(number, {}) : number;
            const article = articles[parsedNumber -1 ];
            if(parsedNumber > 20){
              alanBtn().playText('There are not that many articles on the page')
            } else if(article){
              window.open(article.url, '_blank')
              alanBtn().playText('Opening...')
            }
            
          }
        }
      });
    }, []);
  return (
    <div>
      <div>
        <img src={alanlogo} className={classes.alanLogo} alt="Alan logo" />
      </div>
      <NewsCards articles={newsArticles} activeArticle={activeArticle} />
    </div>
  );
}

export default App