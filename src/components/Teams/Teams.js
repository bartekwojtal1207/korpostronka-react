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
                slidesToScroll: 1,
                // beforeChange: (currentSlide) => this.changeSlide(currentSlide),
                lazyLoad: 'progressive'
            },
            activeSlide: 0
        }
    }

    changeSlide(currentSlide) {
        const slides = document.querySelectorAll('.slick-slide');
        const arraySlides = [...slides];
        // console.log(currentSlide)
        // console.log(arraySlides[currentSlide + 1])
        this.setState({activeSlide: (currentSlide + 1)})
    }

    getIcon(currentSlide) {

        switch (currentSlide) {
            case 0:
                return <Analitycy/>;
            case 1:
                return <WsparcieSprzedazy/>;
            case 2:
                return <Afiliacja/>;
            case 3:
                return <Handlowcy/>;
            case 4:
                return <Marketing/>;
            case 5:
                return <DigitalAcquisition/>;
            case 6:
                return <RozwojTechnologii/>;
            case 7:
                return <ProjektyeCommerce/>;
            case 8:
                return <HrIBackOffice/>;
            default:
                return <Analitycy/>
        }
    }

    render() {
        console.log('render')
        const {teams, sliderSettings, activeSlide} = this.state;

        const sliderItem = Object.keys(teams).map((value, index) =>
            <TeamsItems icon={ index === activeSlide ?  this.getIcon(activeSlide) : null}
                        key={index}
                        name={teams[value].title}
                        title={teams[value].title}
                        description={teams[value].description} />);

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