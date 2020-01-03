import React from "react";
import Styles from './Numbers.module.scss';
import Logo from './numbers.jpg'
import StylesApp from '../../hoc/Layout/Layout.module.scss'
import SectionTitle from "../UI/Titles/SectionTitle";
import ButtonLink from "../UI/Buttons/ButtonLink";
import NumberItems from "./NumberItems/NumberItems";

const Numbers = () => {

    return (
        <section className={Styles.Numbers} style={{'backgroundImage': 'linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url("' + Logo + '")'}}>
            <div className={StylesApp.Container}>
                <SectionTitle  otherStyle={{marginBottom: '50px'}} customClass={'White'}>
                    Najkrócej o <br/> Totalmoney.pl
                </SectionTitle>

                <NumberItems/>
            </div>
        </section>
    )
};

export default Numbers;
