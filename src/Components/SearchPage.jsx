import React from "react";
import { useState } from "react";
import LaunchContent from "./LaunchContent";
import halImage from "../images/hal.png";
import "../App.css";
import "../media-queries.css";

const SearchPage = (props) => {
  let launches = props.data;
  const [query, setQuery] = useState("");
  const [loadMore, setLoadMore] = useState(3);

  const onInputHandler = (e) => {
    setQuery(e.target.value);
  };

  const loadMoreItems = () => {
    setLoadMore((prevValue) => prevValue + 3);
  };

  if (query) {
    launches = launches.filter((item) => {
      if (item.pad.location.name.toLowerCase().includes(query.toLowerCase())) {
        return true;
      } else {
        return false;
      }
    });
  }

  console.log(loadMore);

  return (
    <>
      <div className="inputContainer">
        <select
          onChange={(e) => props.onClickSort(e.target.value)}
          className="sort"
        >
          <option>Sort by Launch Date</option>
          <option value="asc">Sort by Latest</option>
          <option value="desc">Sort by Earliest</option>
        </select>

        <input
          type="text"
          placeholder="Enter a country, e.g USA, China..."
          onInput={onInputHandler}
          value={query}
        ></input>
      </div>

      {launches &&
        launches.slice(0, loadMore).map((launch, idx) => {
          return (
            <div key={idx} className="launchDataContainer">
              <LaunchContent launch={launch} />
            </div>
          );
        })}

      {launches && launches.length === 0 && (
        <div className="errorContainer">
          <p className="errorText halText">
            "I'm sorry. I'm afraid I can't do that."
          </p>
          <div>
            <span className="errorText">Please enter a valid pad location</span>
          </div>
          <div className="halImage">
            <img src={halImage} className="hal" alt="HAL 9000" />
          </div>
        </div>
      )}

      <div className="loadMoreContainer">
        {loadMore >= launches.length || query ? null : (
          <button onClick={loadMoreItems} className="loadMoreButton">
            Load More
          </button>
        )}
      </div>
    </>
  );
};
export default SearchPage;
