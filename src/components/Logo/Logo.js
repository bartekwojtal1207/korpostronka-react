import React from "react";
import styles from './Logo.module.scss';

const Logo = () => {
    return (
        <a href="https://www.totalmoney.pl" title="www.totalmoney.pl" className={styles.Logo}>
            total<strong>money.</strong>pl
        </a>
    )
};

export default Logo;
