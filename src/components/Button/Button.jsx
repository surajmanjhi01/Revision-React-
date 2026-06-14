import "./Button.css"
import { MdMessage } from "react-icons/md";

const Button = (props) => {
    const {isOutline,icon,text,...rest} = props;
    return (
        <button 
        {...rest}
        className={isOutline ? "outline-btn" : "primary-btn"}>
            <MdMessage 
            />   
            {icon}
            {text}
        </button>

    )
}
export default Button;