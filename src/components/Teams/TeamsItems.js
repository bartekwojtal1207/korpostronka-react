import React from "react";

const TeamsItems = (props) => {
    return (
        <div key={props.key}>
            <p>{props.title}</p>
            <span>{props.description}</span>
        </div>
    )
};

export default TeamsItems