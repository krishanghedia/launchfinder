import React from "react";

const NewsDate = (props) => {
  const [{ publishedAt: articlePublished }] = props.newsData;

  const getArticleDate = () => {
    const articleDate = articlePublished;
    const createArticleDate = new Date(articleDate);
    const articleDateAndTime = [];
    articleDateAndTime.push(createArticleDate.toUTCString());
    return articleDateAndTime;
  };

  return <>{getArticleDate()}</>;
};

export default NewsDate;
