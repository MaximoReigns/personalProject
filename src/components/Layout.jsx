import React from 'react';
import HeaderLogin from './HeaderLogin';
import Header from './Header';

const Layout = ({ children }) =>(
    <div className="App">
        <HeaderLogin />
        <Header />
            {children}
        
    </div>
);

export default Layout;