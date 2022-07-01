import styled from "styled-components";

export const ThemeButton = styled.button`
  font-size: 26px;
  background-color: transparent;
  border: 1px solid ${(props) => props.theme.header.color};
  border-radius: 50%;
  justify-content: center;
  align-items: center;
  padding: 4px;
  color: ${(props) => props.theme.header.color};
  display: ${(props) => (props.mobile ? "flex" : "none")};

  @media (min-width: 769px) {
    display: ${(props) => (!props.mobile ? "flex" : "none")};
  }
`;
