import React from 'react';
import { Link } from 'react-router-dom';

export default ({ currentUser, logout }) => {
    const display = currentUser ? (
        <div>
            <p>Hello, {currentUser.name}</p>
            <button onClick={logout}>Log out</button>
        </div>
    ) : (
        <div>
            <Link className="btn" to="/signup">Sign up</Link>
            <Link className="btn" to="/login">Log in</Link>
        </div>
    );

    return (
        <header className="nav-bar">
            <h1 className="logo">AirHaH</h1>
            <div>
                {display}
            </div>
        </header>
    );
};