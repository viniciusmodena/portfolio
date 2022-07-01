import { useState } from "react";
import CardProjectModal from "../CardProjectModal";
import Section from "../Section";
import projects from "./projectsList";
import { Card, ProjectsCards, SectionTitle } from "./style";

const ProjectsSection = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [project, setProject] = useState({
    name: "",
    description: "",
    techs: [""],
    linkGitHub: "",
    linkDeploy: "",
  });

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <Section id="projects" name="Projetos">
      {/* <SectionTitle>
        <h2>Projetos</h2>
      </SectionTitle> */}
      <ProjectsCards>
        {projects.map((item, index) => (
          <Card
            key={index}
            projectName={item.name}
            onClick={() => {
              setIsOpen(true);
              setProject(item);
            }}
          >
            {item.name}
          </Card>
        ))}
      </ProjectsCards>

      <CardProjectModal
        open={isOpen}
        handleClose={handleClose}
        handleOpen={handleOpen}
        project={project}
      />
    </Section>
  );
};

export default ProjectsSection;
