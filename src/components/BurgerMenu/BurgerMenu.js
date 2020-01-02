import React, { useState } from "react";
import Styles from './BurgerMenu.module.scss';

const BurgerMenu = () => {
    const [openMenu, setOpenMenu] = useState(false);

    return (
        <div className={Styles.BurgerMenu}>
            <div className={ [Styles.NavIcon3, openMenu ? Styles.Open : null].join(' ')} onClick={() => setOpenMenu(!openMenu)}>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    )
};

export default BurgerMenu;