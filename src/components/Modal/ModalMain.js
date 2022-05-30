import classes from "./ModalMain.module.css";
import StorageContext from "../../store/storage-context";
import { useContext, useRef } from "react";

const ModalMain = (props) => {
  const storageCtx = useContext(StorageContext);
  const nameRef = useRef();
  const emailRef = useRef();
  const telefonRef = useRef();
  const cityRef = useRef();
  const modalNumber = `${props.modalId[1]}`;

  const clearInput = () => {
    if (props.modalId === "m1") {
      telefonRef.current.value = "";
      cityRef.current.value = "";
    }
    nameRef.current.value = "";
    emailRef.current.value = "";
    storageCtx.newMessage("zresetowano formularz");
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();

    let inputCollection = {
      id: Math.random(),
      name: nameRef.current.value,
      email: emailRef.current.value,
    };

    if (props.modalId === "m1") {
      inputCollection = {
        ...inputCollection,
        telefon: telefonRef.current.value,
        city: cityRef.current.value,
      };
    }
    storageCtx.insertItem(inputCollection);
    storageCtx.newMessage("dodano uzytkownika");
  };

  const modalContent =
    modalNumber === "1" ? (
      <form onSubmit={formSubmitHandler}>
        <div className={classes.inputs}>
          <div className={classes.singleInput}>
            <label htmlFor="name">Imie</label>
            <input type="text" id="name" ref={nameRef}></input>
          </div>
          <div className={classes.singleInput}>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" ref={emailRef}></input>
          </div>
          <div className={classes.singleInput}>
            <label htmlFor="tel">Telefon</label>
            <input
              type="number"
              maxLength="9"
              id="tel"
              ref={telefonRef}
            ></input>
          </div>
          <div className={classes.singleInput}>
            <label htmlFor="miasto">Miasto</label>
            <input type="text" id="name" ref={cityRef}></input>
          </div>
        </div>
        <div className={classes.buttons}>
          <button className={classes.footerButton}>
            button- dodaj uzytkownika do Local storage
          </button>
          <button
            onClick={clearInput}
            className={classes.footerButton}
            type="button"
          >
            button- wyczysc formularz
          </button>
        </div>
      </form>
    ) : (
      <div className={classes.modal2Main}>
        <div className={classes.modalImage}>600x400</div>
        <form onSubmit={formSubmitHandler}>
          <div className={classes.inputs} style={{ marginTop: "10%" }}>
            <div className={classes.singleInput}>
              <label htmlFor="nick">Nick</label>
              <input type="nick" id="nick" ref={nameRef}></input>
            </div>
            <div className={classes.singleInput}>
              <label htmlFor="email">Email</label>
              <input type="email" id="email" ref={emailRef}></input>
            </div>
          </div>
          <div className={classes.buttons}>
            <button className={classes.footerButton}>
              button- dodaj uzytkownika do Local storage
            </button>
            <button
              className={classes.footerButton}
              onClick={clearInput}
              type="button"
            >
              button- wyczysc formularz
            </button>
          </div>
        </form>
      </div>
    );

  return <main className={classes.modalMain}>{modalContent}</main>;
};

export default ModalMain;
