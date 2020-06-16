import React from 'react';
import {Switch, Route, BrowserRouter} from "react-router-dom";
import TelaInicial from './components/pages/TelaInicial';
import Login from './components/pages/Login';
import Cadastro from './components/pages/Cadastro';
import Home from './components/pages/Home'
import Busca from './components/pages/Busca'
import DetalhesPerfil from './components/pages/DetalhesPerfil';
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
        <Route exact path="/perfil">
            <DetalhesPerfil />
        </Route>
        <Route exact path="/carrinho">
            <MeuCarrinho />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
