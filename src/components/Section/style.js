import styled from "styled-components";

export const SectionContainer = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
`;

export const SectionHeader = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 12px 0;
  margin-bottom: 20px;
  background: rgb(85, 64, 0);
  background: linear-gradient(
    90deg,
    ${(props) => props.theme.section.backgroundColor1} 0%,
    ${(props) => props.theme.section.backgroundColor2} 100%
  );
  color: ${(props) => props.theme.color};
  font-family: "Special Elite", cursive;
  font-size: 26px;
`;
