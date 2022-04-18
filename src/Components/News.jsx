import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { NEWS_URL } from "../Config";
import NewsImage from "./NewsImage";
import "../App.css";

const News = () => {
  const [newsData, setNewsData] = useState(null);

  useEffect(() => {
    getNewsData();
  }, []);

  const getNewsData = async () => {
    try {
      const newsData = await axios.get(NEWS_URL);
      setNewsData(newsData.data);
    } catch (error) {
      console.log("An unexpected error occured", error);
    }
  };

  return (
    <>
      <div className="newsHeading">
        <h2>Latest News</h2>
      </div>

      <div className="newsFlexContainer">
        {newsData &&
          newsData.map((news, idx) => {
            return (
              <div className="newsArticleContainer" key={idx}>
                <img src={news.imageUrl} className="newsImage"></img>
                <div className="newsArticleContent">
                  <a href={news.url}>
                    <h3>{news.title}</h3>
                  </a>
                  <p>{news.summary}</p>
                </div>
              </div>
            );
          })}
      </div>
    </>
  );
};

export default News;
