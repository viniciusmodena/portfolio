import {
  FooterConteiner,
  FooterWrap,
  Link,
  LinksContainer,
  Logo,
  PageRights,
} from "./style";
import { FaLinkedin, FaGithub } from "react-icons/fa";
const Footer = () => {
  return (
    <FooterConteiner>
      <FooterWrap>
        <Logo>&lt;/Vinicius Modena&gt;</Logo>
        <LinksContainer>
          <Link href="https://github.com/viniciusmodena" target="_blank">
            <FaGithub />
            GitHub
          </Link>
          <Link
            href="https://www.linkedin.com/in/vinicius-modena-a2b881180/"
            target="_blank"
          >
            <FaLinkedin />
            Linkedin
          </Link>
        </LinksContainer>
        <PageRights>Criado por Vinicius Modena</PageRights>
      </FooterWrap>
    </FooterConteiner>
  );
};

export default Footer;
