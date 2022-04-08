import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { URL } from "./Config";
import SearchPage from "./Components/SearchPage";
import AppLogo from "./images/logo_final.png";

const App = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    getLaunchData();
  }, []);

  const getLaunchData = async () => {
    try {
      const data = await axios.get(URL); // destructure data and give it an alias name
      setData(data.data.results); // send destructured data into state, all data is then sent to a disply data component
      console.log(data.data.results);
    } catch (error) {
      console.log("An unexpected error occured", error);
    }
  };

  const onClickSort = (order) => {
    console.log(order);
    const sorted = [...data];

    sorted.sort((a, b) => {
      const ascDate = new Date(a.window_end);
      const descDate = new Date(b.window_end);

      if (order === "asc") {
        if (ascDate.getTime() > descDate.getTime()) {
          return -1;
        } else if (ascDate.getTime() < descDate.getTime()) {
          return 1;
        }
      } else if (order === "desc") {
        if (ascDate.getTime() > descDate.getTime()) {
          return 1;
        } else if (ascDate.getTime() < descDate.getTime()) {
          return -1;
        }
      }
    });
    setData(sorted);
  };

  return (
    <>
      <div className="header">
        <img src={AppLogo} className="logo" alt="launch finder logo"></img>
        <h1>Upcoming rocket launches, from space agencies around the world.</h1>
      </div>

      <div className="flexContainer">
        {data ? (
          <SearchPage data={data} onClickSort={onClickSort} />
        ) : (
          <p>Launch data currently unavailable</p>
        )}
      </div>
    </>
  );
};

export default App;
