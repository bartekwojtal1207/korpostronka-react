import React from "react";
import Styles from './JobsOffers.module.scss';

const JobsOffersItem = (props) => {
    return (
        <li className={Styles.JobsOffersItem}>
            <a target={'_blank'} href={props.link}>
                <p className={Styles.JobsOffersItemTitle}>{props.title}</p>
                <span className={Styles.JobsOffersItemDescription}>{props.description}</span>
            </a>
            <span className={Styles.JobsOffersItemCity}>{props.city}</span>
            <a target={'_blank'} className={Styles.JobsOffersItemLink} href={props.link}>zobacz szczegóły</a>
        </li>
    )
};

export default JobsOffersItem;
