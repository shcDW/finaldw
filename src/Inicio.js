import React from 'react';
import Nav from './components/Nav';
import Imagen from './components/Imagen';
import Servicios from './components/Servicios';

const Inicio = () => {
  return (
    <div className="nav-bg">
    <Nav/>
    <Imagen/>
    <Servicios/>
    </div>
  );
};

export default Inicio;