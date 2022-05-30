import classes from './Button.module.css';

const Button = (props) => {
    const buttonClicked = () => {
        props.onClicked(props.buttonId)
    }
    const content = `Open modal ${props.buttonId[1]}`
    return <button className={classes.openModalButton} onClick={buttonClicked}>{content}</button>
}

export default Button;