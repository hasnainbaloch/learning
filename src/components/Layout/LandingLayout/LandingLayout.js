import React from 'react';
import './LandingLayout.css';
import { Footer } from '../../View';

import { Redirect, Route, Link } from 'react-router-dom';

function LandingLayout({ children, ...rest }) {
    return (
        <>
            <div className="header">
                <div>
                    <nav>
                        <ul>
                            <li>
                                <Link to="/login">
                                    Login
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
            <div className="layout">
                <div className="body">
                    {children}
                </div>
            </div>
            <div className="footer">
                <Footer />
            </div>
        </>
    )
}

const PublictRoute = ({ component: Component, ...rest }) => {
    return (
        <Route {...rest} render={props => (
            localStorage.getItem('isLogin') ?
                <Redirect to="/dashboard" />
                :
                <LandingLayout>
                    <Component {...props} />
                </LandingLayout>
        )} />
    )
};

export default PublictRoute;
