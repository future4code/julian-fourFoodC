import React from 'react';
import styled from 'styled-components'
import IconeEditar from '../../../img/edit.svg'
import IconeHome from '../../../img/homepage.svg'
import IconeCarrinho from '../../../img/shopping-cart.svg'
import IconePerfil from '../../../img/avatar-red.svg'
import {Link} from 'react-router-dom'
import {TelaToda, DivInterna, DivWrapper, Header, SecaoDetalhesPerfil,
        IconeEditarPerfil, TextoPadrao, SecaoEndereco, TextoEndereco,
        IconeEditarEndereco, SecaoHistorico, ContainerCardsHistorico,
        CardHistorico, NomeRestaurante, DataPedido, ValorPedido,
        Footer, ContainerIcone
  } from './style.js'

function DetalhesPerfil() {
  const historicoPedidos = [
    {
      nome: "Bullguer Vila Madalena",
      data: "23 outubro 19",
      valor: 67.0
    },
    {
      nome: "Vinil Burger Butantã",
      data: "30 setembro 19",
      valor: 89.0
    },
    {
      nome: "Bullguer Vila Madalena",
      data: "10 setembro 19",
      valor: 77.0
    }
  ]

  return (
    <TelaToda>
      <DivInterna>
        <DivWrapper>
          <Header>
            <p>Meu perfil</p>
          </Header>
          <SecaoDetalhesPerfil>
            <TextoPadrao>Bruna Oliveira</TextoPadrao>
            <TextoPadrao>bruna_o@gmail.com</TextoPadrao>
            <TextoPadrao>333.333.333-33</TextoPadrao>
            <Link to='/perfil/editar'>
              <IconeEditarPerfil src={IconeEditar} />
            </Link>
          </SecaoDetalhesPerfil>
          <SecaoEndereco>
            <TextoEndereco>Endereço cadastrado</TextoEndereco>
            <TextoPadrao>Rua Alessandra Vieira, 42 - Santana</TextoPadrao>
            <IconeEditarEndereco src={IconeEditar} />
          </SecaoEndereco>
          <SecaoHistorico>
            <TextoPadrao>Histórico de pedidos</TextoPadrao>
            <hr />
            <ContainerCardsHistorico>
              {(historicoPedidos.length === 0) && <p>Você não realizou nenhum pedido</p>}
              {historicoPedidos.map(pedido=>{
                return(
                <CardHistorico>
                  <NomeRestaurante>{pedido.nome}</NomeRestaurante>
                  <DataPedido>{pedido.data}</DataPedido>
                  <ValorPedido>SUBTOTAL R${pedido.valor.toFixed(2)}</ValorPedido>
                </CardHistorico>
              )})}
            </ContainerCardsHistorico>
          </SecaoHistorico>
        </DivWrapper>
        <Footer>
          <ContainerIcone>
            <img src={IconeHome} alt="" />
          </ContainerIcone>
          <ContainerIcone>
            <img src={IconeCarrinho} alt="" />
          </ContainerIcone>
          <ContainerIcone>
            <img src={IconePerfil} alt="" />
          </ContainerIcone>
        </Footer>
      </DivInterna>
    </TelaToda>
  );
}

export default DetalhesPerfil;