import styled from "styled-components";

export const Container = styled.div`
  width: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (min-width: 769px) {
    flex-direction: row;
  }
`;

export const CardContainer = styled.div`
  width: 300px;
  border: 1px solid #000;
  border-radius: 15px;
  margin: 20px;
`;

export const ContainterHeader = styled.div`
  width: 100%;
  background-color: ${(props) => props.theme.cardColor};
  font-size: 24px;
  color: ${(props) => props.theme.color};
  text-align: center;
  padding: 10px 0;
  border-radius: 15px 15px 0 0;
`;

export const TechContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: repeat(5, 1fr);
  grid-column-gap: 0px;
  grid-row-gap: 0px;

  background-color: grey;
  border-radius: 0 0 15px 15px;
  padding: 10px 20px;

  .div1 {
    grid-area: 1 / 3 / 3 / 5;
  }
  .div2 {
    grid-area: 2 / 1 / 4 / 3;
  }
  .div3 {
    grid-area: 2 / 5 / 4 / 7;
  }
  .div4 {
    grid-area: 4 / 2 / 6 / 4;
  }
  .div5 {
    grid-area: 4 / 4 / 6 / 6;
  }
`;

export const TechLogo = styled.img`
  width: 86px;
`;
