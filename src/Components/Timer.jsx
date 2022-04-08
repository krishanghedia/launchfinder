import React, { useEffect, useState } from "react";

let currentUpdate;
const Timer = (props) => {
  const [update, setUpdate] = useState(false);
  currentUpdate = update;

  const timePadder = (num) => {
    // for accuracy, add "0" if num is less than 10
    if (num < 10) {
      return "0" + num;
    }
    return num;
  };

  const launchDate = new Date(props.timer); // get time from API data and set new date
  const difference = launchDate.getTime() - Date.now(); // get current time

  const days = timePadder(Math.floor(difference / (1000 * 60 * 60 * 24)));
  const hours = timePadder(
    Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  );
  const minutes = timePadder(
    Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
  );
  const seconds = timePadder(Math.floor((difference % (1000 * 60)) / 1000));

  useEffect(() => {
    setInterval(
      () => {
        setUpdate(!currentUpdate);
      },
      days > 3 ? 60000 : 100
      // performance related timer update. Slow down timer if day is greater than 3
    );
  }, []);

  const imminentLaunchTextColourChange = days <= 3 ? "rgb(20 165 37)" : "#fff";

  return (
    <div className="launchCountdownContainer">
      <div
        className="launchCountdownContent"
        style={{ color: imminentLaunchTextColourChange }}
      >
        <div className="daysContainer">
          <p className="days">Days</p>
          <div>
            <p className="days">{days}</p>
          </div>
        </div>

        <div className="hoursContainer">
          <p className="hours">Hours</p>
          <div>
            <p className="hours">{hours}</p>
          </div>
        </div>

        <div className="minutesContainer">
          <p className="minutes">Minutes</p>
          <div>
            <p className="minutes">{minutes}</p>
          </div>
        </div>

        <div className="secondsContainer">
          <p className="seconds">Seconds</p>
          <div>
            <p className="seconds">{days < 4 && ` ${seconds}`}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timer;
