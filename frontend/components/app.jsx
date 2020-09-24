import React from 'react';
import SignupContainer from './session/signup_container';
import LoginContainer from './session/login_container';
import { Route } from 'react-router-dom';
import NavBarContainer from './nav_bar/nav_bar_container';
import { Link, Switch } from 'react-router-dom';
import Modal from './modal/modal';

export default () => (
    <div>
        <Modal />
        <header>
            <Link to='/' className="header-link">
                <h1>AirHah</h1>
            </Link>
        </header>
        <Switch>
            <Route path="/" component={NavBarContainer} />
        </Switch>
    </div>
);