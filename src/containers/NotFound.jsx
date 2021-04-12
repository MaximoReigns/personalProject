import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () =>(
    <>
      <h1>404 - No encontrado!</h1>
      <Link to="/">
        Go Home
      </Link>
    </>
);

export default NotFound;