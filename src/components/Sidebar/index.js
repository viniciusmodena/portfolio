import { useState } from "react";
import Nav from "../Nav";
import "./styles.css";
import { slide as Menu } from "react-burger-menu";

const Sidebar = ({ button }) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);
  const handleBurguer = () => setIsOpen(!isOpen);

  return (
    <Menu
      right
      width={250}
      isOpen={isOpen}
      onOpen={handleBurguer}
      onClose={handleClose}
    >
      {button}
      <Nav handleClose={handleClose} />
    </Menu>
  );
};

export default Sidebar;
