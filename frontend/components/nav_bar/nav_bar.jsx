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
            <button onClick={() => openModal('signup')}>Sign up</button>
            <button onClick={() => openModal('login')}>Log in</button>
        </div>
    );

    return (    
        <header className="nav-bar">
            <Link to='/' className="header-link">
                <h1>AirHah</h1>
            </Link>
            <div>
                {display}
            </div>
        </header>
    );
};