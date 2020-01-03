import React from "react";
import Styles from "./ButtonLink.module.scss";

const ButtonLink = (props) => {
    return (
        <a role="button"
            className={[Styles.ButtonLink].join(' ')}
           style={props.otherStyle}
           href={props.link}>{props.children}</a>
    )
};

export default ButtonLink;