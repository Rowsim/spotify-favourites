import React from "react";
import { FavouritesType } from "./favourites-type/favourites-type";
import { TimeRange } from "./time-range/time-range";
import "./top-controls.scss";

export const TopControls = () => (
  <div className="top-controls">
    <FavouritesType />
    <TimeRange />
  </div>
);
