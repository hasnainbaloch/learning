import React, {useEffect, useState} from 'react';
import './DashboardLayout.css';

import { Header, Footer, Sidebar } from '../../View';

import { Redirect, Route } from 'react-router-dom';

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

const DashboardPrivateRoute = ({ component: Component, ...rest }) => {
    return (
        <Route {...rest} render={props => (
            localStorage.getItem('isLogin') ?
                <DashboardLayout>
                    <Component {...props} />
                </DashboardLayout>
                : <Redirect to="/login" />
        )} />
    )
};

export default DashboardPrivateRoute;
