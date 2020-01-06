import React, { Component } from 'react';
import WhatWeDo from "../../components/WhatWeDo/WhatWeDo";
import Numbers from "../../components/Numbers/Numbers";
import Teams from "../../components/Teams/Teams";

class Homepage extends Component {

    render () {
        return (
            <div>
                <WhatWeDo/>
                <Numbers/>
                <Teams/>
            </div>
        )
    }
}

export default Homepage;