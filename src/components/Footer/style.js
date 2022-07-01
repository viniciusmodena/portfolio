import styled from "styled-components";

export const FooterConteiner = styled.footer`
  width: 100%;
  background-color: ${(props) => props.theme.footer.backgroundColor};
  border-top: 1px solid #530;
  position: relative;
`;

export const FooterWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px 0;
  min-height: 120px;

  /* @media (min-width: 769px) {
    align-items: flex-end;
  } */
`;

export const LinksContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: row;
  padding: 0px 10px;
`;
export const Link = styled.a`
  color: ${(props) => props.theme.footer.color};
  font-size: 16px;
  text-decoration: none;
  margin: 0 20px;

  @media (min-width: 769px) {
    font-size: 26px;
  }
`;

export const PageRights = styled.div`
  color: ${(props) => props.theme.footer.color};
  margin-top: 10px;

  @media (min-width: 769px) {
    font-size: 26px;
  }

  @media (min-width: 1280px) {
    position: absolute;
    bottom: 20px;
    left: 20px;
  }
`;

export const Logo = styled.div`
  font-size: 24px;
  margin: 10px 0;

  font-family: "Special Elite", cursive;
  color: ${(props) => props.theme.header.color};

  @media (min-width: 769px) {
    font-size: 36px;
  }
`;
