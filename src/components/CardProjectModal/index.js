import {
  ButtonsContainer,
  CardContainer,
  ContainerBody,
  ContainerHead,
  TechCard,
  TechsContainer,
} from "./style";
import { Modal } from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const CardProjectModal = ({ open, handleClose, handleOpen, project }) => {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <CardContainer style={style}>
        <ContainerHead id="modal-modal-title">
          <h2>{project.name}</h2>
        </ContainerHead>
        <ContainerBody id="modal-modal-description">
          <p>{project.description}</p>
        </ContainerBody>
        <TechsContainer>
          {project.techs.map((tech, index) => (
            <TechCard key={index}>{tech}</TechCard>
          ))}
        </TechsContainer>
        <ButtonsContainer>
          <a href={project.linkGitHub} target="_blank">
            Repositorio
          </a>
          <a href={project.linkDeploy} target="_blank">
            Visitar
          </a>
        </ButtonsContainer>
      </CardContainer>
    </Modal>
  );
};

export default CardProjectModal;
