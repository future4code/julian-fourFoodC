import React from 'react';
import {Switch, Route, BrowserRouter} from "react-router-dom";
import TelaInicial from './pages/TelaInicial';
import Login from './pages/Login';
import Cadastro from './pages/Cadastro';
import CadastroEndereco from './pages/CadastroEndereco';
import Home from './pages/Home'
import Busca from './pages/Busca'
import DetalhesPerfil from './pages/DetalhesPerfil';
import EditarPerfil from './pages/EditarPerfil';
import Carrinho from './pages/Carrinho';

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
        <Route exact path="/cadastro/endereco">
          <CadastroEndereco />
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
        <Route exact path="/perfil/editar">
          <EditarPerfil />
        </Route>
        <Route exact path="/carrinho">
          <Carrinho />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
