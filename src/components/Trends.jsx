import React from "react";

import '../assets/styles/components/Trends.scss';

import Amsterdam from '../assets/static/Amsterdam.jpg';
import Londres from '../assets/static/Londres.jpg';
import Madrid from '../assets/static/Madrid.jpg';
import Paris from '../assets/static/Paris.jpg';

const Trends = () => (
    <div className="trends">
        <div className="item1">
            <img src={Amsterdam} />
        </div>

        <div className="item2">
        <img src={Londres} />
        </div>

        <div className="item3">
        <img src={Madrid} />
        </div>

        <div className="item4">
        <img src={Paris} />
        </div>
    </div>
);

export default Trends;