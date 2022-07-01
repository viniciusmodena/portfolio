import Section from "../Section";
import {
  CardContainer,
  Container,
  ContainterHeader,
  TechContainer,
  TechLogo,
} from "./style";
import css from "../../assets/css3-logo.png";
import html from "../../assets/html5-logo.png";
import js from "../../assets/js-logo.png";
import reactjs from "../../assets/reactjs-logo.png";
import git from "../../assets/git-logo.png";

const TechSection = () => {
  return (
    <Section id="technologies" name="Tecnologias">
      <Container>
        <CardContainer>
          <ContainterHeader>Front-End</ContainterHeader>
          <TechContainer>
            <TechLogo src={html} className="div1" />
            <TechLogo src={css} className="div2" />
            <TechLogo src={js} className="div3" />
            <TechLogo src={reactjs} className="div4" />
            <TechLogo src={git} className="div5" />
          </TechContainer>
        </CardContainer>
        {/* <CardContainer>
          <ContainterHeader>Back-End</ContainterHeader>
          <TechContainer>
            <TechLogo src={html} className="div1" />
            <TechLogo src={css} className="div2" />
            <TechLogo src={js} className="div3" />
            <TechLogo src={reactjs} className="div4" />
            <TechLogo src={git} className="div5" />
          </TechContainer>
        </CardContainer> */}
      </Container>
    </Section>
  );
};

export default TechSection;
