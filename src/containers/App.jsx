import React from 'react';
import HeaderLogin from '../components/HeaderLogin';
import Header from '../components/Header';
import Main from '../components/Main';
import '../assets/styles/global.scss';

const App = () => (
    <div>
        <HeaderLogin />
        <Header />
        <Main />
    </div>
);

export default App;