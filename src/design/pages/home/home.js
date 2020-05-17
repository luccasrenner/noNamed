import React, { Component } from 'react';

import Styles from './home.module.scss';

import Navbar from '../../components/navbar/navbar';


const navbarLinks = [
    {
        pathName: 'Home',
        url: '/',
    },
    {
        pathName: 'Profile',
        url: '/profile',
    }
]



class Home extends Component {
    constructor() {
        super();

    }

    render() {
        return (
            <div className={ Styles.HomePage } >
                <Navbar navlinks={ navbarLinks } />
            </div>
        );
    }
}

export default Home;
