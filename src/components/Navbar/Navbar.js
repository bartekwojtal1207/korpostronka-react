import React from "react";
import Logo from '../Logo/Logo';
import BurgerMenu from "../BurgerMenu/BurgerMenu";
import styles from './Navbar.module.scss';

const Navbar = (props) => {

    return (
        <nav className={styles.Nav}>
            <div className={props.stylesApp.Container}>
                <Logo />
                <BurgerMenu />
            </div>
        </nav>
    )
};

export default Navbar;