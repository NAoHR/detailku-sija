import {TransitContext} from "./Transition_Context";
import { useContext } from "react";
import Link from "next/link";

const CustomLink = (props) => {
    const {path} = props;
    const TransitHandler = useContext(TransitContext);
    return (
        <Link href="#" as={path}>
            <a className="pm_remover" onClick={() => TransitHandler(path)}>
                {props.children}
            </a>
        </Link>
    )
}

export default CustomLink;