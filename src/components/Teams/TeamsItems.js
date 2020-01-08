import React, { Component} from 'react';

const TeamsItems = (props) => {
    return (
        <div key={props.key}>
            {props.icon}
            <p>{props.title}</p>
            <span>{props.description}</span>
        </div>
    )
};

export default TeamsItems;