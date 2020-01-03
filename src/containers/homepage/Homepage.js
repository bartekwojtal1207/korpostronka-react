import React, { Component } from 'react';
import stylesApp from '../../App.module.scss';
import WhatWeDo from "../../components/WhatWeDo/WhatWeDo";

class Homepage extends Component {

    render () {
        return (
            <div>
                <WhatWeDo/>
            </div>
        )
    }
}

export default Homepage;