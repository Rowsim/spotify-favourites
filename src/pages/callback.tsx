/* eslint-disable no-restricted-globals */
import React, { useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import { getUserAccessToken } from "../services/spotify-auth";
const queryString = require("query-string");

const CallbackPage = () => {
  const [successfulSignIn, setSuccessfulSignIn] = useState(false);

  useEffect(() => {
    const queryParams = queryString.parse(location.search);

    if (queryParams.code && queryParams.state) {
      getUserAccessToken(queryParams.code, queryParams.state).then((success) =>
        setSuccessfulSignIn(success)
      );
    }
  });

  return (
    <>{successfulSignIn ? <Redirect to="/" /> : <div>Signing in..</div>}</>
  );
};

export default CallbackPage;
