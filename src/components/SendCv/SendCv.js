import React from "react";
import StylesApp from '../../hoc/Layout/Layout.module.scss';
import Styles from './SendCv.module.scss'
import SectionTitle from "../UI/Titles/SectionTitle";
import img from './laptop.jpg';

const SendCv = () => {
    return (
        <section className={Styles.SendCV} style={{"background" : "linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)),url(" + img + ")"}}>
            <div className={StylesApp.Container}>
                <SectionTitle customClass={'White'}>Wyślij CV</SectionTitle>
                <p>Nie znalazłeś interesującej oferty pracy? Nic straconego! Wyślij nam dokumenty aplikacyjne, a my skontaktujemy się z Tobą, kiedy tylko pojawi się coś ciekawego i pasującego do Twoich kwalifikacji.</p>
            </div>
        </section>
    )
};

export default SendCv;