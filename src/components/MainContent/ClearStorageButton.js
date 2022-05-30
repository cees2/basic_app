import classes from "./ClearStorageButton.module.css";
import { useContext } from "react";
import StorageContext from "../../store/storage-context";

const ClearStorageButton = () => {
  const storageCtx = useContext(StorageContext)
  return (
    <div className={classes.clearButtonWrapper}>
      <button className={classes.clearButton} onClick={storageCtx.removeAllItems}>Wyczysc local storage</button>
    </div>
  );
};

export default ClearStorageButton;
