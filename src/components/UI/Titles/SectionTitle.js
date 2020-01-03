import React from "react";
import Styles from './Title.module.scss';

const SectionTitle = (props) => {
    return (
        <h3 className={Styles.SectionTitle}>{props.children}</h3>
    )
};

export default SectionTitle