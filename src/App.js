import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { URL } from "./Config";
import AppLogo from "./images/logo_final.png";
import SearchPage from "./Components/SearchPage";
import News from "./Components/News";

const App = () => {
  const [data, setData] = useState(null);
  const [screen, setScreen] = useState(0);

  useEffect(() => {
    getLaunchData();
  }, []);

  const getLaunchData = async () => {
    try {
      const data = await axios.get(URL);
      setData(data.data.results);
    } catch (error) {
      console.log("An unexpected error occured", error);
    }
  };

  // sort launch data by date

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
        <nav>
          <div className="logoContainer" onClick={() => setScreen(0)}>
            <img src={AppLogo} className="logo" alt="launch finder logo"></img>
          </div>
          <div className="news">
            <p onClick={() => setScreen(1)}>News</p>
          </div>
        </nav>
      </div>
      {screen === 0 && (
        <div className="flexContainer">
          <h1>
            Upcoming rocket launches and news from space agencies around the
            world
          </h1>
          {data ? (
            <SearchPage data={data} onClickSort={onClickSort} />
          ) : (
            <p>Launch data currently unavailable</p>
          )}
        </div>
      )}
      {screen === 1 && <News screen={screen} />}
    </>
  );
};

export default App;
