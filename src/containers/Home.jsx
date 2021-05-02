import React from 'react';
import { Link } from 'react-router-dom';
import Main from '../components/Main';
import InformationCovid from '../components/InformationCovid';
import SpecialOffers from '../components/SpecialOffers';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';

import '../assets/styles/global.scss';

const Home = () => (
    <>
      <Main />
      <InformationCovid />
      <SpecialOffers />
      <Categories title="Tendencias"> 
        <Carousel>
          
        </Carousel>
      </Categories>
    </>
);

export default Home;