import React from 'react';
import './LandingLayout.css';
import { Header, Footer, Sidebar } from '../../View';
import { Link, Route } from 'react-router-dom';

function LandingLayout({ children, ...rest }) {
    return (
        <>
            <div className="header">
                <div>
                    <nav>
                        <ul>
                            <li>
                                <Link to="/dashboard/home">
                                    Dashboard
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

const LandingLayoutRoute = ({ component: Component, ...rest }) => {
    return (
        <Route {...rest} render={matchProps => (
            <LandingLayout>
                <Component {...matchProps} />
            </LandingLayout>
        )} />
    )
};

export default LandingLayoutRoute;
