import styled from "styled-components";

export const NavContainer = styled.nav`
  ul {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    @media (min-width: 769px) {
      flex-direction: row;
    }
  }

  li {
    list-style: none;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 10px;
    font-size: 1.5rem;
  }

  a {
    color: ${(props) => props.theme.header.color};
    text-decoration: none;
    font-family: "Special Elite", cursive;
    transition: all 0.5s;

    &:link,
    &:visited,
    &:active {
      text-decoration: none;
    }

    &:hover {
      cursor: pointer;
      -webkit-transform: scale(1.1);
      transform: scale(1.1);
      text-decoration: underline;
    }
  }
`;
