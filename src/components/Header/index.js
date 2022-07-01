import Nav from "../Nav";
import Sidebar from "../Sidebar";
import {
  Containter,
  HeaderContainer,
  HeaderWrap,
  Logo,
  NavContainer,
} from "./style";

const Header = ({ children }) => {
  return (
    <HeaderContainer id="outer-container">
      {/* <Sidebar pageWrapId={"page-wrap"} outerContainerId={"outer-container"} /> */}
      <Containter id="page-wrap">
        <HeaderWrap>
          <Logo>&lt;Vinicius Modena&gt;</Logo>
          <NavContainer>
            <Nav />
          </NavContainer>
          {children}
        </HeaderWrap>
      </Containter>
    </HeaderContainer>
  );
};

export default Header;
