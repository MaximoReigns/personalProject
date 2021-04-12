import React from 'react';
import { Link } from 'react-router-dom';

import '../assets/styles/components/InformationCovid.scss'

const InformationCovid = () =>(
    <div className="information">
        <div className="information__text">
            <p>
            Travel establece con aplicación de normas sanitarias <Link to ="/"> COVID-19 </Link>
            </p>
        </div>
    </div>
);

export default InformationCovid;