import React from 'react'
import {
    Link
} from "react-router-dom";
import './sidebar.css';

function Sidebar() {
return (
    <div className="sidebar">
        <nav>
        <ul>
            <li>
            <Link to="/">Home</Link>
            </li>
            <li>
            <Link to="/about">About</Link>
            </li>
            <li>
            <Link to="/users">Users</Link>
            </li>
        </ul>
        </nav>
    </div>
)
}

export default Sidebar
