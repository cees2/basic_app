import classes from "./Modal.module.css";
import { Fragment } from "react";
import Backdrop from "./Backdrop";
import ModalHeader from "./ModalHeader";
import ModalMain from "./ModalMain";
import CloseButton from "./CloseButton";

const Modal = (props) => {
  const closeModalHandler = () => {
    props.onClose(props.modalId);
  }

  return (
    <Fragment>
      <Backdrop />
      <div className={classes.modal}>
        <CloseButton closeModal={closeModalHandler}/>
        <ModalHeader modalId={props.modalId}/>
        <ModalMain modalId={props.modalId}/>
      </div>
    </Fragment>
  );
};

export default Modal;
