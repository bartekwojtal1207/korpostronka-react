import React from "react";
import Styles from './Title.module.scss';

const SectionTitle = (props) => {
    return (
        <h3  style={props.otherStyle} className={[Styles.SectionTitle, props.customClass === 'White' ? Styles.SectionTitleWhite : null].join(' ')}>
            {props.children}
        </h3>
    )
};

export default SectionTitle;
