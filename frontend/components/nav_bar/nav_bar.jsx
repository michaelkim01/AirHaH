import React from 'react';
import { Link } from 'react-router-dom';

export default ({ currentUser, logout, openModal }) => {
    const display = currentUser ? (
        <div>
            <p>Hello, {currentUser.first_name}!</p>
            <button onClick={logout}>Log out</button>
        </div>
    ) : (
        <div>
            <button onClick={}>My Reservations</button>
            <button onClick={() => openModal('signup')}>Sign up</button>
            <button onClick={() => openModal('login')}>Log in</button>
        </div>
    );

    return (    
        <header className="nav-bar">
            <Link to='/' id="header-link">
                <h1>AirHah</h1>
            </Link>
            <div>
                {display}
            </div>
        </header>
    );
};
