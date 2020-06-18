import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {Container, Nav} from './style'
import { BrowserRouter, NavLink, useHistory } from 'react-router-dom';
import Paginas from './Paginas'


/* vou ter que usar o axios com endpoint para pegar o tipo
  de comida para o link

  no components paginas fazer comm que cada uma renderize apenas o 
  tipo de comida 
*/

const Home = () => { 
  return (
    <BrowserRouter>
      <div className="Container">
        <h3>ifuture</h3>
        <input placeholder='Restaurante'></input>
      </div>
      <Container>
        <Nav>
          <NavLink to='/home/pagina1'>pag 1</NavLink>
          <NavLink to='/home/pagina2'>pag 2</NavLink>
          <NavLink to='/home/pagina3'>pag 3</NavLink>
        </Nav>
        <Paginas />
      </Container>
    </BrowserRouter>
  );

 
}

export default Home;