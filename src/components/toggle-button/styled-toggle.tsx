import styled from "styled-components";

export const StyledToggle = styled.div<{ selected?: boolean }>`
  color: ${(props) => props.theme.primary};
  background: ${(props) =>
    props.selected ? props.theme.secondary : props.theme.background};
  border: 1px solid ${(props) => props.theme.secondary};
  padding: 6px;
  font-weight: 500;
  cursor: pointer;
  font-size: 16px;
  -moz-transition: all 0.2s ease-in;
  -o-transition: all 0.2s ease-in;
  -webkit-transition: all 0.2s ease-in;
  transition: all 0.2s ease-in;
  pointer-events: ${(props) => (props.selected ? "none" : "auto")};

  &:hover {
    color: ${(props) =>
      props.selected ? props.theme.primary : props.theme.secondary};
    cursor: ${(props) => (props.selected ? "default" : "pointer")};
  }
  &:active {
    opacity: ${(props) => (props.selected ? "1" : "0.6")};
  }
`;
