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
            <button onClick={() => openModal('signup')}>Signup</button>
            <button onClick={() => openModal('login')}>Login</button>
        </div>
    );

    return (
        <header className="nav-bar">
            <div>
                {display}
            </div>
        </header>
    );
};