import React from 'react';
import {Switch, Route, BrowserRouter} from "react-router-dom";
<<<<<<< HEAD
import TelaInicial from './components/pages/TelaInicial';
import Login from './components/pages/Login';
import Cadastro from './components/pages/Cadastro';
import Home from './components/pages/Home'
import Busca from './components/pages/Busca'
import DetalhesPerfil from './components/pages/DetalhesPerfil';
import EditarPerfil from './components/pages/EditarPerfil';
import Carrinho from './components/pages/Carrinho';
=======
import TelaInicial from './pages/TelaInicial';
import Login from './pages/Login';
import Cadastro from './pages/Cadastro';
import Home from './pages/Home'
import Busca from './pages/Busca'
import FinalizarPedido from './pages/FinalizarPedido';
import MeuCarrinho from './pages/MeuCarrinho';
>>>>>>> 4820fa1ad8d7b211d9c4ec62e5da569cb7ad3bef

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
