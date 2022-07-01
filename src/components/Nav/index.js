import { NavContainer } from "./style";

const Nav = ({ handleClose }) => {
  return (
    <NavContainer>
      <ul>
        <li>
          <a href="/#about-me" onClick={handleClose}>
            Sobre Mim
          </a>
        </li>
        <li>
          <a href="/#technologies" onClick={handleClose}>
            Tecnologias
          </a>
        </li>
        <li>
          <a href="/#projects" onClick={handleClose}>
            Projetos
          </a>
        </li>
      </ul>
    </NavContainer>
  );
};

export default Nav;
