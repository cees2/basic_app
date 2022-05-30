import classes from './ModalHeader.module.css'
import { useContext } from 'react';
import StorageContext from '../../store/storage-context';

const ModalHeader = (props) => {
  const storageCtx = useContext(StorageContext);
    const modalNumber = props.modalId[1];
    return <header className={classes.modalHeader}>
    <ul className={classes.modalList}>
      <li>Modal {modalNumber} Header Title</li>
      <li>{storageCtx.message}</li>
    </ul>
  </header>
  };

  export default ModalHeader