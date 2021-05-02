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
        <div className="special__items">
            <div className="special__items--box">
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
        <div className="special__items--2">
            <Link to="/Login">
            <img src={TimeToTravel} alt="Time-to-Travel" width="500px" />
            </Link>
        </div>

        <div className="special__items--3">
            <Link to="/Login">
            <img src={Summer} alt="Time-to-Travel" width="500px" />
            </Link>
        </div>
    </div>
);

export default SpecialOffers;