import React from 'react';
import Nav from './components/Nav';
import Imagen from './components/Imagen';
import Servicios from './components/Servicios';
import Contacto from './components/Contacto';

const Inicio = () => {
  return (
    <div className="nav-bg">
    <Nav/>
    <Imagen/>
    <Servicios/>
    <Contacto/>
    </div>
  );
};

export default Inicio;