import React from 'react';
import { Link } from 'react-router-dom';
import Main from '../components/Main';
import InformationCovid from '../components/InformationCovid';
import SpecialOffers from '../components/SpecialOffers';

import '../assets/styles/global.scss';

const Home = () => (
    <>
      <Main />
      <InformationCovid />
      <SpecialOffers />
    </>
);

export default Home;