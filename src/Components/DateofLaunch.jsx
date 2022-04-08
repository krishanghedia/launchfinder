import React from "react";

const DateofLaunch = (props) => {
  const dateOfLaunch = () => {
    let newDateString = props.dateOfLaunch;
    let launchDate = new Date(newDateString);
    return launchDate.toDateString();
  };

  return (
    <>
      <p className="date">{dateOfLaunch()}</p>
    </>
  );
};

export default DateofLaunch;
