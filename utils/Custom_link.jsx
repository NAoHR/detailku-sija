import {TransitContext} from "./Transition_Context";
import { useContext } from "react";

const CustomLink = (props) => {
    const {path,color} = props;
    const TransitHandler = useContext(TransitContext);
    function anchorHandler(e){
        e.preventDefault();
        return TransitHandler(path);
    }
    return (
            <a href={path} className="pm_remover" onClick={anchorHandler} >
                {props.children}
            </a>
    )
}

export default CustomLink;