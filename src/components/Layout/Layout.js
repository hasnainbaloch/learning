import React from 'react';
import './layout.css';
import { Header, Footer, Sidebar } from '../View';


function Layout({ children }) {
    return (
        <>
            <div className="header">
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

export default Layout;
