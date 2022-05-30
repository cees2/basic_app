import classes from './StorageItem.module.css';

const StorageItem = (props) => {
    return <li className={classes.mainListElements}>
        <h2>{props.values.name}</h2>
        <p>{props.values.city}</p>
        <p>{props.values.telefon}</p>
        <p>{props.values.email}</p>
    </li>
}

export default StorageItem;