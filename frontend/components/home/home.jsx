import React from 'react';
import { Link } from 'react-router-dom';

export default () => (
    <div className="content-header">
        <Link to="/housings" className="housings-index-link">
            <h1>Housings</h1>
        </Link>
    </div>
)