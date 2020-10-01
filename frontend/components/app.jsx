import React from 'react';
import SignupContainer from './session/signup_container';
import LoginContainer from './session/login_container';
import { Route } from 'react-router-dom';
import NavBarContainer from './nav_bar/nav_bar_container';
import { Link, Switch } from 'react-router-dom';
import Modal from './modal/modal';
import HousingIndexContainer from './housing/housing_index_container';
import HomeContainer from './home/home_container';
import housingShowContainer from './housing/housing_show_container';

export default () => (
    <div>
        <Modal />
        <Route path="/" component={NavBarContainer} />
        <Route exact path="/" component={HomeContainer} />
        <Route exact path="/housings" component={HousingIndexContainer} />
        <Route path="/housings/:housingId" component={housingShowContainer} />
    </div>
);