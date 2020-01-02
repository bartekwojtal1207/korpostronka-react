import React from "react";
import styles from './Logo.module.scss';

const Logo = () => {
    return (
        <a href="https://firma.totalmoney.pl/" title="Strona główna" className={styles.Logo}>
            total<strong>money.</strong>pl
        </a>
    )
};

export default Logo;
