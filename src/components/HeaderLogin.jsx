import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/components/HeaderLogin.scss'
import logo from '../assets/static/LogoTravelGreen.png';

const HeaderLogin = () => (
    <header className="header__login">
        <div className="header__login--left">
        <Link to ="/">
            <img className="header__img" src={logo} alt="logo" width="120px"/>
        </Link>
        </div>
        <div className="header__login--right">
            <ul className="header__list">
                <li className="icon"><img src="#" alt="icon-logo" width="50px"/></li>
                <li className="login"><Link to="/Login">Iniciar Sesión</Link></li>
                <li className="create"><a href="#">Crear Cuenta</a></li>
                <li className="reservation"><a href="#">Consulta Reservación</a></li>
            </ul>
        </div>
    </header>
);

export default HeaderLogin;