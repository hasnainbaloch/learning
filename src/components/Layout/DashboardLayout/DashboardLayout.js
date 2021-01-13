import React from 'react';
import './DashboardLayout.css';
import { Header, Footer, Sidebar } from '../../View';
import { Route } from 'react-router-dom';

function DashboardLayout({ children, ...rest }) {
    return (
        <>
            <div className="header1">
                <Header />
            </div>
            <div className="layout">
                <div className="sidebar">
                    <Sidebar />
                </div>
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

const DashboardLayoutRoute = ({ component: Component, ...rest }) => {
    return (
        <Route {...rest} render={matchProps => (
            <DashboardLayout>
                <Component {...matchProps} />
            </DashboardLayout>
        )} />
    )
};

export default DashboardLayoutRoute;
