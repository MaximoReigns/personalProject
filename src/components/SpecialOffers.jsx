import React from 'react';
import { Link } from 'react-router-dom';

import '../assets/styles/components/SpecialOffers.scss';

import Summer from '../assets/static/summer-70-off.png';
import TimeToTravel from '../assets/static/time-to-travel.png';
import card from '../assets/static/icons/card.png';
import guarantee from '../assets/static/icons/guarantee.png';
import safe from '../assets/static/icons/safe.png';
import save from '../assets/static/icons/save.png';


const SpecialOffers = () =>(
    <div className="special">
        <div className="special__promo">
            <h1>Promociones para viajar</h1>
        </div>

        <div className="special__info">
            <p>
            <img src={save} alt="save-icon" width="60px" />
            <strong>Ahorra y Disfruta al Mejor Precio</strong>
            </p>
            <p>
            <img src={card} alt="save-icon" width="60px" />
            <strong>Aceptamos Tarjetas y Transferencias</strong>
            </p>
            <p>
            <img src={safe} alt="save-icon" width="60px" />
            <strong>Compra Segura</strong>
            </p>
            <p>
            <img src={guarantee} alt="save-icon" width="60px" />
            <strong>Mejor Tarifa Garantizada</strong>
            </p>
        </div>
    </div>
);

export default SpecialOffers;