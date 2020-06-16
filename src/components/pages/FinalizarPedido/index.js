import React from 'react';
import styled from 'styled-components'
import IconeEditar from '../../../img/edit.svg'
<<<<<<< HEAD:src/components/pages/DetalhesPerfil/index.js
import IconeHome from '../../../img/homepage.svg'
import IconeCarrinho from '../../../img/shopping-cart.svg'
import IconePerfil from '../../../img/avatar.svg'
=======
>>>>>>> 1057fc2d17b1ae53aa8a55b4a1d0fceb3021d1b2:src/components/pages/FinalizarPedido/index.js

const TelaToda = styled.div`
  margin: 0;
  padding: 0%;
  background-color: #d0d0d0;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const DivInterna = styled.div`
  width: 360px;
  box-sizing: border-box;
  height: 640px;
  margin: 5px;
  border: 1px solid black;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  position: relative;
`

const DivWrapper = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  width: 100%;
  height: 542px;
  margin-bottom: 49px;
  scrollbar-width: none;
  &::-webkit-scrollbar{
    display: none;
  }
`

const Header = styled.div`
  width: 100%;
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid #BFBFBF;
`

const SecaoDetalhesPerfil = styled.div`
  width: 100%;
  height: 99px;
  padding: 16px;
  box-sizing: border-box;
  position: relative;
`

const IconeEditarPerfil = styled.img`
  position: absolute;
  top: 16px;
  right: 16px;
`

const TextoPadrao = styled.p`
  margin: 0 0 8px 0;
  padding: 0;
`

const SecaoEndereco = styled.div`
  height: 76px;
  width: 100%;
  padding: 16px;
  box-sizing: border-box;
  background-color: #eeeeee;
  position: relative;
`

const TextoEndereco = styled.p`
  margin: 0 0 8px 0;
  padding: 0;
  color: #b8b8b8;
`

const IconeEditarEndereco = styled.img`
  position: absolute;
  top: 26px;
  right: 16px;
`

const SecaoHistorico = styled.div`
  width: 100%;
  padding: 16px;
  box-sizing: border-box;
`

const ContainerCardsHistorico = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
`

const CardHistorico = styled.div`
  width: 328px;
  height: 102px;
  margin: 8px 0;
  padding: 16px;
  box-sizing: border-box;
  border-radius: 8px;
  border: 1px solid #b8b8b8;
  text-align: left;
`

const NomeRestaurante = styled.p`
  color: #e8222e;
  margin: 0 0 8px 0;
  padding: 0;
`

const DataPedido = styled.p`
  font-size: 12px;
  margin: 0 0 8px 0;
  padding: 0;
`

const ValorPedido = styled.p`
  font-size: 16px;
  font-weight: bold;
  margin: 0 0 8px 0;
  padding: 0;
`

const Footer = styled.div`
  box-shadow: 0 -1px 3px 0 rgba(0,0,0,0.75);
  height: 49px;
  width: 100%;
  position: absolute;
  bottom: 0;
  background-color: #fff;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`

const ContainerIcone = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

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
            <IconeEditarPerfil src={IconeEditar} />
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