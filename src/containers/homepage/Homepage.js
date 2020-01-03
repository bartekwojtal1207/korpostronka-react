import React, { Component } from 'react';
import WhatWeDo from "../../components/WhatWeDo/WhatWeDo";
import Numbers from "../../components/Numbers/Numbers";

class Homepage extends Component {

    render () {
        return (
            <div>
                <WhatWeDo/>
                <Numbers/>
            </div>
        )
    }
}

export default Homepage;