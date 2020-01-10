import React, { Component } from 'react';
import WhatWeDo from "../../components/WhatWeDo/WhatWeDo";
import Numbers from "../../components/Numbers/Numbers";
import Teams from "../../components/Teams/Teams";
import JobsOffers from "../../components/JobsOffers/JobsOffers";
import SendCv from "../../components/SendCv/SendCv";

class Homepage extends Component {

    render () {
        return (
            <div>
                <WhatWeDo/>
                <Numbers/>
                <Teams/>
                <JobsOffers/>
                <SendCv/>
            </div>
        )
    }
}

export default Homepage;