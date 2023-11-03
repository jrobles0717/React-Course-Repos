import "./ChartBar.css";

import React from "react";

const ChartBar = ({ value, maxValue, max, label }) => {
  let barFIllHeight = "0%";

  if (maxValue > 0) {
    barFIllHeight = Math.round((value / maxValue) * 100) + "%";
  }

  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        <div
          className="chart-bar__fill"
          style={{ height: barFIllHeight }}
        ></div>
      </div>
      <div className="chart-bar__label">{label}</div>
    </div>
  );
};

export default ChartBar;
