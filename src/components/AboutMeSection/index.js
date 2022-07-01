import Section from "../Section";
import { AboutMeContainer, Profile, Text } from "./style";

const AboutMeSection = () => {
  return (
    <Section id="about-me" name="Sobre mim">
      <AboutMeContainer>
        <Profile />
        <Text>
          <p>
            Hey! Eu sou Vinicius Modena!
            <br />
            Eu sempre gostei de encontrar e resolver problemas, buscar o melhor
            jeito para optimizar uma tarefa e simplesmente conhecer coisas
            novas, por isso o mundo de programação e tecnologia em geral me
            atrai tanto, pois me permite fazer o que eu mais gosto. Eu sou um
            Desenvolvedor Front-End no caminho de me tornar um Desenvolvedor
            FullStack.
          </p>
        </Text>
      </AboutMeContainer>
    </Section>
  );
};

export default AboutMeSection;
