import React from 'react';
import '../assets/styles/components/HeaderLogin.scss'

const HeaderLogin = () => (
    <header className="header__login">
        <div className="header__login--left">
        <img className="header__img" src="/src/assets/images/LogoTravelGreen.png" alt="logo"width="120px" href="/"/>
        </div>

        <div className="header__login--right">
            <ul className="header__list">
                <li className="icon"><img src="#" alt="icon-logo" width="50px"/></li>
                <li className="login"><a href="#">Iniciar Sesión</a></li>
                <li className="create"><a href="#">Crear Cuenta</a></li>
                <li className="reservation"><a href="#">Consulta Reservación</a></li>
            </ul>
        </div>
    </header>
);

export default HeaderLogin;