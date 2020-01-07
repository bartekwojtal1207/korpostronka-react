import React, {Component} from "react";
import StylesApp from '../../hoc/Layout/Layout.module.scss';
import Styles from './Teams.module.scss';
import SectionTitle from "../UI/Titles/SectionTitle";
import Slider from "react-slick";
import data from './teams.json';
import TeamsItems from "./TeamsItems";


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
            }
        }
    }

    render() {
        const {teams, sliderSettings} = this.state;
        const sliderItem = Object.keys(teams).map((value, index) => <TeamsItems key={index} title={teams[value].title} description={teams[value].description} />);

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