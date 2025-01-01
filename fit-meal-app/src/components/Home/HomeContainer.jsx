import React from "react";
import TodaySession from "./TodaySessions";
import ExtraMeal from "./ExtraMeal";

const HomeContainer = () => {
  return (
    <div className="container">
      <TodaySession />
      <ExtraMeal />
    </div>
  );
};

export default HomeContainer;

/*
      <div className="row">
        <div className="col">Snacks</div>
        <div className="col">Dinner</div>
        <div className="col">Lunch</div>
        <div className="col">Breakfast</div>
      </div>

      <div className="row">
        <div className="col">
          <div className="content">
            <p>Your Customise: 367 Calorie</p>
          </div>
        </div>
        <div className="col">
          <div className="content">
            <p>Today target: 243 Calorie</p>
          </div>
        </div>
        <div className="col">
          <div className="content">
            <ul>
              <li>1/2 Glass Milk</li>
              <li>1 Apple</li>
              <li>2 Slice of Bread</li>
            </ul>
          </div>
        </div>
        <div className="col">
          <div className="content">
            <p>8:00am</p>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col">
          <div className="content">
            <p>Today</p>
            <p>174 calories</p>
          </div>
        </div>
        <div className="col">
          <div className="content">
            <p>Samosa:</p>
            <p>40 gms</p>
          </div>
        </div>
        <div className="col">
          <div className="content">
            <p>Potato Chips:</p>
            <p>25 ml</p>
          </div>
        </div>
        <div className="col">
          <div className="content">
            <p>Snacks:</p>
            <p>Coffee:</p>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col">
          <div className="content">
            <p>Today Extra Meal</p>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col">
          <div className="content">
            <p>Diet Chat Recommended</p>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col">
          <div className="content">
            <p>Calories</p>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col">
          <div className="content">
            <p>14:02:2025</p>
          </div>
        </div>
      </div>
*/
