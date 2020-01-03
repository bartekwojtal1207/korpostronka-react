import React from 'react';
import styles from './App.module.scss';

//containes
import Layout from "./hoc/Layout/Layout";
import Homepage from "./containers/homepage/Homepage";


const App = () => {
    return (
        <Layout>
            <Homepage/>
        </Layout>
    );
};

export default App;
