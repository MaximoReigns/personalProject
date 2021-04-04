import React from 'react';
import '../assets/styles/components/Header.scss'

const Header = () => (
    <header className="header">
        <div className="header__menu">
            <ul className="header__menu--list">
                <li className="list--1"><a href="#">Ofertas</a></li>
                <li className="list--2"><a href="#">Paquetes</a></li>
                <li className="list--3"><a href="#">Hoteles</a></li>
                <li className="list--4"><a href="#">Tours</a></li>
                <li className="list--5"><a href="#">Xcaret</a></li>
                <li className="list--6"><a href="#">Cancún</a></li>
                <li className="list--7"><a href="#">Riviera Maya</a></li>
                <li className="list--8"><a href="#">Disney</a></li>
                <li className="list--9"><a href="#">Nickelodeon</a></li>
                <li className="list--10"><a href="#">Las Vegas</a></li>
                <li className="list--11"><a href="#">Orlando</a></li>
                <li className="list--11"><a href="#">Universal</a></li>
            </ul>
        </div>
    </header>
);

export default Header;