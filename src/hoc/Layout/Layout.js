import React, { Component } from 'react';

import stlyes from './Layout.module.scss';
import Navbar from '../../components/Navbar/Navbar'

class Layout extends Component {

    render() {
        return (
         <div>
                <Navbar stylesApp={stlyes}/>
                {/*<div className={stlyes.Container}>*/}
                {/*    {this.props.children}*/}
                {/*</div>*/}
         </div>
        );
    }
}

export default Layout;
