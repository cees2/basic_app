import classes from "./StorageItemsList.module.css";
import StorageItem from "./StorageItem";
import { useContext } from "react";
import StorageContext from "./../../store/storage-context";

const StorageItemList = () => {
  const storageCtx = useContext(StorageContext);

  return (
    <main>
      <div className={classes.wrapper}>
        <div className={classes.formResult}>form result</div>
        <ul className={classes.mainList}>
          {storageCtx.itemsInStorage.map((item) => (
            <StorageItem values={item} key={item.id} />
          ))}
        </ul>
      </div>
    </main>
  );
};

export default StorageItemList;
