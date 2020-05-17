import React, { Component } from 'react';

import { 
    Link 
  } from "react-router-dom";

import Styles from './navbar.module.scss';

class Navbar extends Component {
    constructor(props) {
        super(props);

    }

    render() {

        const {
            navlinks
        } = this.props

        return (
            <div className={ Styles.navbarContainer } >
                <ul className={ Styles.list }>
                    {
                        navlinks.map( item =>  (
                                <li>
                                    <Link to={ item.url } key={item.url}>
                                        { item.pathName }
                                    </Link>
                                </li>
                            )
                        )
                    }
                </ul>
            </div>
        );
    }
}

export default Navbar;
