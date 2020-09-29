import React from 'react';
import SignupContainer from './session/signup_container';
import LoginContainer from './session/login_container';
import { Route } from 'react-router-dom';
import NavBarContainer from './nav_bar/nav_bar_container';
import { Link, Switch } from 'react-router-dom';
import Modal from './modal/modal';
import HousingIndexContainer from './housing/housing_index_container';
import Home from './home/home';

export default () => (
    <div>
        <Modal />
        <Route exact path="/" component={Home} />
        <Route path="/" component={NavBarContainer} />
        <Link to="/housings" className="housings-index-link">
                <h1>Housings</h1>
        </Link>
        <Route exact path="/housings" component={HousingIndexContainer} />
    </div>
);