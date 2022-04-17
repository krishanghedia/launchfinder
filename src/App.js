import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { TEST_URL, URL } from "./Config";
import SearchPage from "./Components/SearchPage";
import AppLogo from "./images/logo_final.png";
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
            <button className="btn" onClick={() => setScreen(1)}>
              News
            </button>
          </div>
        </nav>
        <h1>
          Upcoming rocket launches and news from space agencies around the world
        </h1>
      </div>
      {screen === 0 && (
        <div className="flexContainer">
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
