import React from "react";
import Styles from "./ButtonLink.module.scss";

const ButtonLink = (props) => {

    return (
        <a role="button"
           onClick={props.click}
           className={[Styles.ButtonLink, props.customClass === 'BlueButton' ? Styles.BlueButton : null].join(' ')}
           style={props.otherStyle}
           href={props.link}>{props.children}</a>
    )
};

export default ButtonLink;