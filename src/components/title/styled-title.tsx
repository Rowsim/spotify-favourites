import styled from "styled-components";

export const StyledTitle = styled.h1<{ fontSize?: string }>`
  font-size: ${(props) => (props.fontSize ? props.fontSize : "60px")};
  font-family: ${(props) => props.theme.fontAlt};
  color: ${(props) => props.theme.primary};
  font-weight: unset;
  @media only screen and (max-width: 768px) {
    font-size: 34px;
  }
`;
