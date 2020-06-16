import React from 'react';
import {Switch, Route, BrowserRouter} from "react-router-dom";
import TelaInicial from './components/pages/TelaInicial';
import Login from './components/pages/Login';
import Cadastro from './components/pages/Cadastro';
import Home from './components/pages/Home'
import Busca from './components/pages/Busca'
<<<<<<< HEAD
import DetalhesPerfil from './components/pages/DetalhesPerfil';
=======
import FinalizarPedido from './components/pages/FinalizarPedido';
>>>>>>> 1057fc2d17b1ae53aa8a55b4a1d0fceb3021d1b2
import MeuCarrinho from './components/pages/MeuCarrinho';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
            <TelaInicial />
        </Route>
        <Route exact path="/login">
            <Login />
        </Route>
        <Route exact path="/cadastro">
            <Cadastro />
        </Route>
        <Route exact path="/home">
            <Home />
        </Route>
        <Route exact path="/busca">
            <Busca />
        </Route>
<<<<<<< HEAD
        <Route exact path="/perfil">
            <DetalhesPerfil />
=======
        <Route exact path="/finalizar">
            <FinalizarPedido />
>>>>>>> 1057fc2d17b1ae53aa8a55b4a1d0fceb3021d1b2
        </Route>
        <Route exact path="/carrinho">
            <MeuCarrinho />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
