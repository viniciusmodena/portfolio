import styled from "styled-components";

export const Aside = styled.aside`
  display: ${(props) => (props.isOpen ? "flex" : "hidden")};
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  height: 100vw;
  width: 300px;
  background-color: ${(props) => props.theme.backgroundColor};
`;

export const AsideHeader = styled.div`
  width: 100%;
  position: relative;
  padding: 5px;
`;

export const Button = styled.button`
  cursor: pointer;
  background-color: transparent;
  /* padding: 0.6rem; */
  position: absolute;
  top: 5px;
  right: 5px;
`;
