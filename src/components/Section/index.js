import { SectionContainer, SectionHeader } from "./style";

const Section = ({ id, name, children }) => {
  return (
    <SectionContainer id={id}>
      <SectionHeader>{name}</SectionHeader>
      {children}
    </SectionContainer>
  );
};

export default Section;
