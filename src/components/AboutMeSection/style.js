import styled from "styled-components";
import profile from "../../assets/profile-picture.jpg";

export const AboutMeContainer = styled.div`
  width: fit-content;
  max-width: 400px;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: center;
  padding: 5px;
  margin: 0 10px;

  @media (min-width: 481px) {
    max-width: 700px;
  }

  @media (min-width: 769px) {
    max-width: 900px;
    display: grid;

    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: 1fr;
    grid-column-gap: 0px;
    grid-row-gap: 0px;
  }
`;

export const Profile = styled.div`
  background-image: url(${profile});
  background-size: cover;
  border-radius: 50%;
  width: 200px;
  height: 200px;
  grid-area: 1 / 1 / 2 / 2;
  margin-right: 20px;
`;

export const Text = styled.div`
  grid-area: 1 / 2 / 2 / 5;

  p {
    font-size: 24px;
    color: ${(props) => props.theme.color};
    text-align: justify;
    @media (min-width: 769) {
      text-align: right;
    }
  }
`;
