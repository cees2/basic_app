import classes from "./Header.module.css";
import Button from "./Button";
import { useState } from "react";
import Modal from "../Modal/Modal";
import ReactDOM from "react-dom";

const Header = () => {
  const [modalIsOpened, setModalIsOpened] = useState({
    modal1: false,
    modal2: false,
  });

  const openModal = (buttonId) => {
    if (buttonId === "b1") {
      setModalIsOpened({ modal1: true, modal2: false });
    } else {
      setModalIsOpened({ modal1: false, modal2: true });
    }
  };

  const modalCloseHandler = (modalId) => {
    setModalIsOpened({ modal1: false, modal2: false });
  };

  return (
    <header className={classes.mainHeader}>
      {modalIsOpened.modal1 &&
        ReactDOM.createPortal(
          <Modal modalId="m1" onClose={modalCloseHandler} />,
          document.getElementById("modal")
        )}
      {modalIsOpened.modal2 &&
        ReactDOM.createPortal(
          <Modal modalId="m2" onClose={modalCloseHandler} />,
          document.getElementById("modal")
        )}
      <Button buttonId="b1" onClicked={openModal} />
      <Button buttonId="b2" onClicked={openModal} />
    </header>
  );
};

export default Header;
