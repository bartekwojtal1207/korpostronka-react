import React, {Component} from "react";
import StylesApp from '../../hoc/Layout/Layout.module.scss';
import Styles from './Teams.module.scss';
import SectionTitle from "../UI/Titles/SectionTitle";
import Slider from "react-slick";
import './slider.css';
import data from './teams.json';
import TeamsItems from "./TeamsItems";
import {Afiliacja,
    Analitycy,
    Handlowcy,
    DigitalAcquisition,
    HrIBackOffice,
    Marketing,
    ProjektyeCommerce,
    RozwojTechnologii,
    WsparcieSprzedazy} from "./icons/icons";

class Teams extends Component {
    constructor(props) {
        super(props);

        this.state = {
            teams: data.teams,
            sliderSettings: {
                dots: true,
                infinite: false,
                speed: 500,
                slidesToShow: 1,
                slidesToScroll: 1
            },
            activeSlide: 'analitycy'
        }
    }

    getIcon() {
        let name = this.state.activeSlide;

        switch (name) {
            case 'afiliacja':
                return <Afiliacja/>;
            case 'analitycy':
                return <Analitycy/>;
            case 'digitalacquisition':
                return <DigitalAcquisition/>;
            case 'handlowcy':
                return <Handlowcy/>;
            case 'hribackoffice':
                return <HrIBackOffice/>;
            case 'marketing':
                return <Marketing/>;
            case 'projektyeCommerce':
                return <ProjektyeCommerce/>;
            case 'rozwojTechnologii':
                return <RozwojTechnologii/>;
            case 'wsparcieSprzedazy':
                return <WsparcieSprzedazy/>;
            default:
                return <Afiliacja/>
        }
    }

    render() {
        const {teams, sliderSettings, activeSlide} = this.state;
        const icon = this.getIcon();
        const test= icon.type.name == activeSlide ? icon : null


        console.log(icon.type.name)
        console.log(activeSlide)
        if (icon.type.name == activeSlide) {
            console.log('www')
        }
        const sliderItem = Object.keys(teams).map((value, index) => <TeamsItems icon={activeSlide == teams[value].title ? icon : null}  key={index} title={teams[value].title} description={teams[value].description} />);

        return (
            <section className={Styles.TeamsSection}>
                <div className={StylesApp.Container}>
                    <SectionTitle>Zespoły</SectionTitle>
                    <Slider {...sliderSettings}>
                        {sliderItem}
                    </Slider>
                </div>
            </section>
        )
    }
};

export default Teams;