import React from "react";
import StylesApp from '../../hoc/Layout/Layout.module.scss';
import Styles from './SendCv.module.scss'
import SectionTitle from "../UI/Titles/SectionTitle";
import img from './laptop.jpg';
import ButtonLink from "../UI/Buttons/ButtonLink";

const SendCv = () => {
    const ButtonOtherStyle = {
        'backgroundImage': '-webkit-linear-gradient(0deg, #3d87cc 0%, #4e9ee9 52.002%, #54a4ee 100%)',
        'width': '140px',
        'color': '#FFF',
        'height': '48px',
        'fontSize': '16px',
        'fontWeight': '600'
    };

    return (
        <section className={Styles.SendCV} style={{"backgroundImage" : "linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)),url(" + img + ")"}}>
            <div className={StylesApp.Container}>
                <SectionTitle customClass={'White'}>Wyślij CV</SectionTitle>
                <p>Nie znalazłeś interesującej oferty pracy? <br/> Nic straconego! Wyślij nam dokumenty aplikacyjne, a my skontaktujemy się z Tobą, kiedy tylko pojawi się coś ciekawego i pasującego do Twoich kwalifikacji.</p>
                <ButtonLink otherStyle={ButtonOtherStyle} customClass='BlueButton'>Aplikuj</ButtonLink>
            </div>
        </section>
    )
};

export default SendCv;