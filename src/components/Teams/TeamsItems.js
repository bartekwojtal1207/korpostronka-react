import React from 'react';
import Style from './Teams.module.scss';

const TeamsItems = (props) => {
    return (
        <div key={props.key} className={Style.TeamsItem}>
            {props.icon}
            <p className={Style.TeamsItemTitle}>{props.title}</p>
            <p className={Style.TeamsItemDescription}>{props.description}</p>
        </div>
    )
};

export default TeamsItems;