import styled from "styled-components";

export const StyledTitle = styled.h1<{ fontSize?: string }>`
  font-size: ${(props) => (props.fontSize ? props.fontSize : "60px")};
  font-family: ${(props) => props.theme.fontAlt};
  color: ${(props) => props.theme.primary};
  cursor: default;
  transition: all 0.5s;

  @media only screen and (max-width: 768px) {
    font-size: 36px;
  }

  &:hover {
    -webkit-animation: neon-orange 1.5s ease-in-out 2 alternate;
    -moz-animation: neon-orange 1.5s ease-in-out 2 alternate;
    animation: neon-orange 1.5s ease-in-out 2 alternate;
    color: #fff;
  }

  @keyframes neon-orange {
    from {
      text-shadow: none;
    }
    to {
      text-shadow: 0 0 03px #fd6500, 0 0 6px #fd6500, 0 0 9px #fd6500,
        0 0 12px #fd6500, 0 0 15px #fd6500, 0 0 18px #fd6500, 0 0 21px #fd6500;
    }
  }
  @-webkit-keyframes neon-orange {
    from {
      text-shadow: 0 0 1px #fd6500, 0 0 2px #fd6500, 0 0 3px #fd6500,
        0 0 4px #fd6500, 0 0 5px #fd6500, 0 0 6px #fd6500, 0 0 7px #fd6500;
    }
    to {
      text-shadow: 0 0 03px #fd6500, 0 0 6px #fd6500, 0 0 9px #fd6500,
        0 0 12px #fd6500, 0 0 15px #fd6500, 0 0 18px #fd6500, 0 0 21px #fd6500;
    }
  }
  @-moz-keyframes neon-orange {
    from {
      text-shadow: 0 0 1px #fd6500, 0 0 2px #fd6500, 0 0 3px #fd6500,
        0 0 4px #fd6500, 0 0 5px #fd6500, 0 0 6px #fd6500, 0 0 7px #fd6500;
    }
    to {
      text-shadow: 0 0 03px #fd6500, 0 0 6px #fd6500, 0 0 9px #fd6500,
        0 0 12px #fd6500, 0 0 15px #fd6500, 0 0 18px #fd6500, 0 0 21px #fd6500;
    }
  }
`;
