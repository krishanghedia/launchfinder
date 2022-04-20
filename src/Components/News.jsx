import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { NEWS_URL } from "../Config";
import NewsDate from "./NewsDate";
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
                <img
                  src={news.imageUrl}
                  className="newsImage"
                  alt="article related content"
                ></img>
                <div className="newsArticleContent">
                  <NewsDate newsData={newsData} />
                  <a href={news.url}>
                    <h3 className="articleHeading">{news.title}</h3>
                  </a>
                  <div>
                    <p>{news.summary.slice(0, 70)}...</p>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </>
  );
};

export default News;
