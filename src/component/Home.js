import React, { Component } from 'react';
import HomeLogonComponent from './HomeLogon.js';
import HomeLogoutComponent from './HomeLogout.js';
import './Home.css';

class HomeComponent extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let homePart = null;
        const props = this.props;
        if(this.props.user ) {
            homePart = <HomeLogonComponent {...props}/>
        }
        else
        {
            homePart = <HomeLogoutComponent {...props}/>
        }
        return homePart;
    }
}

export default HomeComponent;

