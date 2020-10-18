const cryptoRandomString = require("crypto-random-string");
const sha256 = require("crypto-js/sha256");
const Base64 = require("crypto-js/enc-base64");

//env variables?
const CLIENT_ID = "a3c9a895bbe94102a08574ba4f4adc9e";
const REDIRECT_URI = "http://localhost:3000/callback";
const SCOPES =
  "user-top-read,streaming,user-read-recently-played,user-read-playback-state,user-library-read,user-read-currently-playing,user-modify-playback-state";

const base64URLEncode = (hash: any): string => {
  return hash
    .toString(Base64)
    .replace(/=/g, "")
    .replace(/\+/g, "-")
    .replace(/\//g, "_");
};

export const spotifyAuthRequestUri = async () => {
  const verifierCode = cryptoRandomString({ length: 48, type: "url-safe" });
  console.log(`setting verifier code to: ${verifierCode}`);
  localStorage.setItem("verifierCode", verifierCode);

  const challengeCode = base64URLEncode(await sha256(verifierCode));

  const stateCode = cryptoRandomString({ length: 10, type: "url-safe" });
  localStorage.setItem("stateCode", stateCode);

  return `https://accounts.spotify.com/authorize?response_type=code&client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&code_challenge_method=S256&code_challenge=${challengeCode}&state=${stateCode}&scope=${SCOPES}`;
};

export const getUserAccessToken = async (
  authCode: string,
  stateResponse: string
): Promise<UserToken> => {
  const stateCode = localStorage.getItem("stateCode");
  console.log(`origin state: ${stateCode}`);
  if (stateCode === stateResponse) {
    const spotifyTokenRequest = {
      client_id: CLIENT_ID,
      grant_type: "authorization_code",
      code: authCode,
      redirect_uri: REDIRECT_URI,
      code_verifier: localStorage.getItem("verifierCode"),
    };

    const spotifyTokens = await fetch(
      "https://accounts.spotify.com/api/token",
      {
        method: "POST",
        body: encodeFormData(spotifyTokenRequest),
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    );

    return spotifyTokens.json();
  }

  return {};
};

interface UserToken {
  access_token?: string;
  refresh_token?: string;
}

const encodeFormData = (data: any) => {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
};
