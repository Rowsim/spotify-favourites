import React from "react";
import pineappleImg from "../../assets/images/pineapple.png";
import "./setup-load.scss";

const SetupLoading = () => (
  <div className="setup-load">
    <img alt="loading" src={pineappleImg} />
    <p>Setting things up!</p>
  </div>
);

export default SetupLoading;
