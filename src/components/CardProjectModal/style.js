import styled from "styled-components";

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 15px;
  border: 1px solid #000;
  width: 300px;
  background-color: #bfcebf;

  @media (min-width: 481px) {
    width: 400px;
  }

  @media (min-width: 769px) {
    width: 700px;
  }
`;
export const ContainerHead = styled.div`
  width: 100%;
  text-align: center;
  padding: 10px 0;
  background: linear-gradient(
    90deg,
    rgba(85, 64, 0, 1) 0%,
    rgba(84, 32, 0, 1) 100%
  );
  border-radius: 15px 15px 0 0;

  h2 {
    font-size: 22px;
    color: ${(props) => props.theme.color};
    @media (min-width: 769px) {
      font-size: 32px;
    }
  }
`;

export const ContainerBody = styled.div`
  display: flex;
  width: 100%;
  img {
  }

  p {
    font-size: 18px;
    margin: 10px 20px;
    text-align: justify;

    @media (min-width: 769px) {
      font-size: 26px;
    }
  }
`;

export const TechsContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin: 5px;
`;

export const TechCard = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 5px 10px;
  margin: 5px 15px;
  background-color: #fff;
  color: #030c1c;
  border: 1px solid #030c1c;
  border-radius: 5px;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;

  a {
    cursor: pointer;
    text-decoration: none;
    font-size: 18px;
    padding: 5px;
    border: 1px solid #030c1c;
    border-radius: 5px;
    background-color: #008500;
    color: ${(props) => props.theme.color};
    margin: 20px;
    width: 100px;
    text-align: center;

    &:link,
    &:visited,
    &:active {
      text-decoration: none;
    }

    &:hover {
      border-color: #030c1c;
      color: #030c1c;
    }
  }
`;
