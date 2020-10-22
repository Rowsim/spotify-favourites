import React from "react";
import "./time-range.scss";

interface TimeRangeProps {
  selectedTimeRange: string;
  setSelectedTimeRange: Function;
}

export const TimeRange = ({
  selectedTimeRange,
  setSelectedTimeRange,
}: TimeRangeProps) => {
  const handleClick = (timeRange: string) => {
    const spotifyTopElement = document.querySelector(
      ".spotify-top"
    ) as HTMLDivElement;
    spotifyTopElement.style.opacity = "0.2";
    setSelectedTimeRange(timeRange);
    setTimeout(() => {
      spotifyTopElement.style.opacity = "1";
    }, 500);
  };

  return (
    <div className="time-range">
      <div
        onClick={() => handleClick("short")}
        className={`time-range__item ${
          selectedTimeRange === "short" ? "time-range__item--selected" : ""
        }`}
      >
        Short
      </div>
      <div
        onClick={() => handleClick("medium")}
        className={`time-range__item ${
          selectedTimeRange === "medium" ? "time-range__item--selected" : ""
        }`}
      >
        Medium
      </div>
      <div
        onClick={() => handleClick("long")}
        className={`time-range__item ${
          selectedTimeRange === "long" ? "time-range__item--selected" : ""
        }`}
      >
        Long
      </div>
    </div>
  );
};
