import { getWithExpiry, setWithExpiry } from "../util/storage-util";

const cryptoRandomString = require("crypto-random-string");
const sha256 = require("crypto-js/sha256");
const Base64 = require("crypto-js/enc-base64");

const REDIRECT_URI =
  process.env.AUTH_REDIRECT_URI || "http://localhost:3000/callback";
const CLIENT_ID = "a3c9a895bbe94102a08574ba4f4adc9e";
const REQUEST_SCOPES = "user-top-read";

export enum GrantType {
  AUTH = "authorization_code",
  REFRESH = "refresh_token",
}

export const spotifyAuthRequestUri = async () => {
  const verifierCode = cryptoRandomString({ length: 48, type: "url-safe" });
  localStorage.setItem("verifierCode", verifierCode);

  const challengeCode = base64URLEncode(await sha256(verifierCode));

  const stateCode = cryptoRandomString({ length: 10, type: "url-safe" });
  localStorage.setItem("stateCode", stateCode);

  return `https://accounts.spotify.com/authorize?response_type=code&client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&code_challenge_method=S256&code_challenge=${challengeCode}&state=${stateCode}&scope=${REQUEST_SCOPES}`;
};

export const checkSpotifyTokenAndRefresh = () => {
  const token = getWithExpiry("spotifyToken");

  if (token) {
    return token;
  } else if (getUserAccessToken(GrantType.REFRESH)) {
    return localStorage.getItem("spotifyRefreshToken");
  }

  return null;
};

export const getUserAccessToken = async (
  grantType: GrantType,
  stateResponse?: string,
  authCode?: string
): Promise<boolean> => {
  if (grantType === GrantType.REFRESH) {
    const spotifyRefreshTokenRequest = {
      grant_type: grantType,
      refresh_token: localStorage.getItem("spotifyRefreshToken"),
      client_id: CLIENT_ID,
    };

    return fetchTokenFromSpotify(spotifyRefreshTokenRequest);
  } else if (localStorage.getItem("stateCode") === stateResponse) {
    const spotifyTokenRequest = {
      client_id: CLIENT_ID,
      grant_type: grantType,
      code: authCode,
      redirect_uri: REDIRECT_URI,
      code_verifier: localStorage.getItem("verifierCode"),
    };

    return await fetchTokenFromSpotify(spotifyTokenRequest);
  }

  return false;
};

const fetchTokenFromSpotify = async (spotifyTokenRequest: {}): Promise<
  boolean
> => {
  const spotifyTokens = await fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    body: encodeFormData(spotifyTokenRequest),
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
  });

  const tokens = await spotifyTokens.json();
  if (tokens.access_token) {
    setWithExpiry("spotifyToken", tokens.access_token, tokens.expires_in);
    localStorage.setItem("spotifyRefreshToken", tokens.refresh_token);
    return true;
  }

  return false;
};

const base64URLEncode = (hash: any): string => {
  return hash
    .toString(Base64)
    .replace(/=/g, "")
    .replace(/\+/g, "-")
    .replace(/\//g, "_");
};

const encodeFormData = (data: any) => {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
};
interface UserToken {
  access_token: string;
  refresh_token: string;
  expires_in: number;
}
