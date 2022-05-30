import classes from './CloseButton.module.css'

const CloseButton = (props) => {
    return <button className={classes.closeButton} onClick={props.closeModal}>X</button>
}

export default CloseButton