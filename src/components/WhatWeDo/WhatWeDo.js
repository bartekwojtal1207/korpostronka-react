import React, {useState} from "react";
import SectionTitle from "../UI/Titles/SectionTitle";
import StylesApp from '../../hoc/Layout/Layout.module.scss'
import Styles from './WhatWeDo.module.scss';
import ButtonLink from "../UI/Buttons/ButtonLink";
import img from './whatWeDo.jpg';

const WhatWeDo = () => {
    const [showMobileText, setShowMobileText] = useState(false);

    return (
        <section className={Styles.WhatWeDo}>
            <div className={[StylesApp.Container, Styles.WhatWeDoContent].join(' ')}>
                <SectionTitle>Co robimy?</SectionTitle>
                <p>Totalmoney.pl to internetowa porównywarka kredytów, kont i
                    lokat. Ponad 10 lat ciężko pracowaliśmy, aby dziś móc się pochwalić - jesteśmy największym
                    serwisem e-commerce finansowego w Polsce.
                    { (showMobileText) ? <span>Jesteśmy częścią WP Holding, co umożliwia nam wymianę informacji, wiedzy i know-how z liderem rynku wśród grup medialnych, ale wciąż podkreślamy swoją niezależność i fakt, że nie jesteśmy korporacją.</span> : null }
                </p>

                <ButtonLink click={() => setShowMobileText(!showMobileText)} otherStyle={{marginBottom: '15px'}} customClass={'BlueButton'}>Czytaj więcej</ButtonLink>

                <img src={img} alt="zdjęcie"/>
            </div>
        </section>
    )
};

export default WhatWeDo;