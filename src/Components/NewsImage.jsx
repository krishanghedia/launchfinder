import React from "react";

const NewsImage = (props) => {
  console.log(props.newsData);
  return (
    <div>
      {props.newsData &&
        props.newsData.map((newsImage, idx) => {
          return <img src={newsImage.imageUrl}></img>;
        })}
    </div>
  );
};

export default NewsImage;
