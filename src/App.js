import React from 'react';
import { Switch, Route, BrowserRouter} from "react-router-dom";
import {CadastroEnderecoPage, LoginPage, SignUpPage, TelaInicialPage} from './Components/AreaPessoal';
import {ConfimaçãoPage, PedidoEmAndamentoPage, RestaurantePage, SearchNoResultsPage} from './Components/Busca';
import {EditarCadastroPage, EditarEndereçoPage, PerfilHistoricoVazioPage, PerfilPage} from './Components/FinalizarPedido';
import {FeedPage, SearchPlacehoderPage, SearchResultsPage} from './Components/Home';
import {CarrinhoComProdutosPage, CarrinhoVazioPage} from './Components/MeuCarrinho';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
        </Route>
        <Route exact path="/CadastroEnderecoPage">
            <CadastroEnderecoPage />
        </Route>
        <Route exact path="/LoginPage">
            <LoginPage />
        </Route>
        <Route exact path="/SignUpPage">
            <SignUpPage />
        </Route>
        <Route exact path="/TelaInicialPage">
            <TelaInicialPage />
        </Route>
        <Route exact path="/ConfimaçãoPage">
            <ConfimaçãoPage />
        </Route>
        <Route exact path="/PedidoEmAndamentoPage">
            <PedidoEmAndamentoPage />
        </Route>
        <Route exact path="/RestaurantePage">
            <RestaurantePage />
        </Route>
        <Route exact path="/SearchNoResultsPage">
            <SearchNoResultsPage />
        </Route>
        <Route exact path="/EditarCadastroPage">
            <EditarCadastroPage />
        </Route>
        <Route exact path="/EditarEndereçoPage">
            <EditarEndereçoPage />
        </Route>
        <Route exact path="/PerfilHistoricoVazioPage">
            <PerfilHistoricoVazioPage />
        </Route>
        <Route exact path="/PerfilPage">
            <PerfilPage />
        </Route>
        <Route exact path="/FeedPage">
            <FeedPage />
        </Route>
        <Route exact path="/SearchPlacehoderPage">
            <SearchPlacehoderPage />
        </Route>
        <Route exact path="/SearchResultsPage">
            <SearchResultsPage />
        </Route>
        <Route exact path="/CarrinhoComProdutosPage">
            <CarrinhoComProdutosPage />
        </Route>
        <Route exact path="/CarrinhoVazioPage">
            <CarrinhoVazioPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
