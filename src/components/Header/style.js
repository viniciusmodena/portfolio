import styled from "styled-components";

export const HeaderContainer = styled.header`
  width: 100%;
  height: 50px;
`;

export const Containter = styled.div`
  background-color: ${(props) => props.theme.header.backgroundColor};
  width: 100%;
  height: 50px;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  -webkit-box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.75);
`;

export const HeaderWrap = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  max-width: 900px;
  @media (min-width: 769px) {
    justify-content: space-between;
  }
`;

export const NavContainer = styled.div`
  display: none;
  @media (min-width: 769px) {
    display: block;
  }
`;

export const Logo = styled.div`
  font-size: 24px;
  margin-left: 15px;

  font-family: "Special Elite", cursive;
  color: ${(props) => props.theme.header.color};
`;
