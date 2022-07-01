import styled from "styled-components";

export const ProjectsCards = styled.div`
  max-width: 300px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  max-height: 600px;
  border-radius: 5px;
  padding: 15px 0;

  @media (min-width: 481px) {
    max-width: 700px;
    flex-direction: row;
  }

  @media (min-width: 769px) {
    max-width: 900px;
  }
`;

export const Card = styled.div`
  cursor: pointer;
  border: 2px solid #000;
  border-radius: 5px;
  background-color: ${(props) => props.theme.cardColor};
  color: #030c1c;
  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 20px;
  font-family: Georgia, "Times New Roman", Times, serif;
  width: 200px;
  height: 50px;
  padding: 15px 0;
  text-align: center;
  margin: 15px;
  text-transform: uppercase;

  &:hover {
    color: #e4edfb;
    border-color: #e4edfb;
  }
`;
