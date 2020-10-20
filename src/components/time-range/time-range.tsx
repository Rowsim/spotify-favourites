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
/*   const setTest = (timeRange: string) => {
    setSelectedTimeRange(timeRange);
  };
 */
  return (
    <div className="time-range">
      <div
        onClick={() => setSelectedTimeRange("short")}
        className={`time-range__item ${
          selectedTimeRange === "short" ? "time-range__item--selected" : ""
        }`}
      >
        Short
      </div>
      <div
        onClick={() => setSelectedTimeRange("medium")}
        className={`time-range__item ${
          selectedTimeRange === "medium" ? "time-range__item--selected" : ""
        }`}
      >
        Medium
      </div>
      <div
        onClick={() => setSelectedTimeRange("long")}
        className={`time-range__item ${
          selectedTimeRange === "long" ? "time-range__item--selected" : ""
        }`}
      >
        Long
      </div>
    </div>
  );
};
