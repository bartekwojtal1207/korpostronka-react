import React, {Component} from "react";
import StyleApp from '../../hoc/Layout/Layout.module.scss';
import Styles from './JobsOffers.module.scss'
import JobsOffersItem from './JobsOffersItem';
import SectionTitle from "../UI/Titles/SectionTitle";

class JobsOffers extends Component {
    constructor(props) {
        super(props);

        this.state = {
            jobsOffers: [
                {
                    title: 'Product Owner Test',
                    description: 'Projekty E-commerce',
                    city: 'Wrocław',
                    link: 'www.www.pl'
                },
                {
                    title: 'Product Owner Test 2',
                    description: 'Projekty E-commerce 2',
                    city: 'Wrocław',
                    link: 'www.www.pl'
                }
            ]
        }
    }

    render() {
        const jobsOffers = this.state.jobsOffers;
        const jobsOffersItems = jobsOffers.map((el, index) => <JobsOffersItem key={index} title={el.title} description={el.description} link={el.link} city={el.city} />);

        return (
            <section className={Styles.JobsOffersSection}>
                <div className={StyleApp.Container}>
                    <SectionTitle>Znajdź ofertę dla siebie</SectionTitle>
                    <ul className={Styles.JobsOffersList}>
                        {jobsOffersItems}
                    </ul>
                </div>
            </section>
        )
    }
};

export default JobsOffers;