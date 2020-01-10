import React, { Component } from 'react';
import WhatWeDo from "../../components/WhatWeDo/WhatWeDo";
import Numbers from "../../components/Numbers/Numbers";
import Teams from "../../components/Teams/Teams";
import JobsOffers from "../../components/JobsOffers/JobsOffers";

class Homepage extends Component {

    render () {
        return (
            <div>
                <WhatWeDo/>
                <Numbers/>
                <Teams/>
                <JobsOffers/>
            </div>
        )
    }
}

export default Homepage;