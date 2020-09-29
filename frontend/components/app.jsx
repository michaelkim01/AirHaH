import React from 'react';
import SignupContainer from './session/signup_container';
import LoginContainer from './session/login_container';
import { Route } from 'react-router-dom';
import NavBarContainer from './nav_bar/nav_bar_container';
import { Link, Switch } from 'react-router-dom';
import Modal from './modal/modal';
import HousingIndexContainer from './housing/housing_index_container';

export default () => (
    <div>
        <Modal />
        <header className="content-header">
            <Link to="/housings" className="housings-index-link">
                <h1>Housings</h1>
            </Link>
        </header>
        <Route path="/" component={NavBarContainer} />
        <Route path="/housings" component={HousingIndexContainer} />
    </div>
);