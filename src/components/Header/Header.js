import React from "react";
import Style from './Header.module.scss';
import ButtonLink from "../UI/Buttons/ButtonLink";

const Header = (props) => {
    return (
        <header className={Style.Header}>
            <div className={props.stylesApp.Container}>
                <h1>Dołącz do nas !</h1>
                <p>
                    Poznaj nas lepiej, sprawdź kogo właśnie
                    szukamy, lub wyślij nam swoje dokumenty - skontaktujemy się z Tobą, kiedy pojawi się wakat na
                    wymarzone stanowisko.</p>
                <div>
                    <ButtonLink  href="#ourOffers" otherStyle={{marginBottom: '20px'}}>Zobacz kogo szukamy </ButtonLink>
                    <ButtonLink>Skontaktuj się z nami </ButtonLink>
                </div>

            </div>
        </header>
    )
};

export default Header;