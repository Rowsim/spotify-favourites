import React, { useContext, useEffect } from "react";
import styled from "styled-components";
import { AppContext } from "../../AppContext";
import { getUserProfile } from "../../services/spotify-service";

export const UserIcon = () => {
  const { userProfile, setUserProfile } = useContext(AppContext);

  useEffect(() => {
    if (!userProfile.display_name) {
      getUserProfile().then((result) => setUserProfile(result));
    }
  });

  return (
    <>
      {userProfile.display_name && (
        <StyledUserIcon>
          <img
            src={userProfile.images && userProfile.images[0] ? userProfile.images[0].url : ""}
            alt="profile"
          />
          <a
            target="blank"
            href={userProfile.external_urls.spotify}
            className="user-name"
          >
            {userProfile.display_name.toLocaleLowerCase()}
          </a>
        </StyledUserIcon>
      )}
    </>
  );
};

const StyledUserIcon = styled.div`
  display: flex;
  align-items: center;
  margin-top: 2px;
  cursor: pointer;

  &:hover {
    .user-name {
      color: #fd6500;
    }
  }

  img {
    height: 32px;
    width: 32px;
    border-radius: 50%;
    margin-right: 8px;
  }

  .user-name {
    transition: color 0.3s ease-in-out;
    font-size: 14px;
    color: white;
    text-decoration: underline;
  }
`;
