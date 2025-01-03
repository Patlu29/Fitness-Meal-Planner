import React from "react";
import TodaySession from "./TodaySessions";
import ExtraMeal from "./ExtraMeal";
import "../styles/Content.css";

const HomeContainer = () => {
  return (
    <div className="container">
      <TodaySession />
      <ExtraMeal />
    </div>
  );
};

export default HomeContainer;
