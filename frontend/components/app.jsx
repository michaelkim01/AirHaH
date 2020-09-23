import React from 'react';
import SignupContainer from './session/signup_container';
import LoginContainer from './session/login_container';
import { Route } from 'react-router-dom';
import NavBarContainer from './nav_bar/nav_bar_container';

export default () => (
    <div>
        <Route path="/" component={NavBarContainer} />
        <Route path="/signup" component={SignupContainer} />
        <Route path="/login" component={LoginContainer} />
    </div>
);