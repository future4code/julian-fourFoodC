import React from 'react';
import styled from 'styled-components'
import IconeHome from '../../../img/homepage.svg'
import IconeCarrinho from '../../../img/shopping-cart-red.svg'
import IconePerfil from '../../../img/avatar.svg'

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
  max-width: 100vw;
  height: 640px;
  max-height: 100vh;
  box-sizing: border-box;
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
  min-height: 542px;
  margin-bottom: 49px;
  scrollbar-width: none;
  &::-webkit-scrollbar{
    display: none;
  }
`

const Header = styled.div`
  width: 100%;
  height: 64px;
  padding: 16px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid #BFBFBF;
`

const SecaoEndereco = styled.div`
  height: 76px;
  width: 100%;
  padding: 16px;
  box-sizing: border-box;
  background-color: #eeeeee;
  position: relative;
`

const TextoCinza = styled.p`
  margin: 0 0 8px 0;
  padding: 0;
  color: #b8b8b8;
`

const TextoPadrao = styled.p`
  margin: 0 0 8px 0;
  padding: 0;
`

const ContainerPadrao = styled.div`
  width: 100%;
  padding: 16px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
`

const TextoCarrinhoVazio = styled.p`
  align-self: center;
`

const NomeRestaurante = styled.p`
  color: #e8222e;
  margin: 0 0 8px 0;
  padding: 0;
`

const CardProdutoCarrinho = styled.div`
  width: 328px;
  height: 112px;
  margin: 8px 0;
  padding: 16px;
  box-sizing: border-box;
  border-radius: 8px;
  border: 1px solid #b8b8b8;
  text-align: left;
`

const ValorFrete = styled.p`
  text-align: right;
  padding: 16px;
  margin: 0;
`

const DivSubtotal = styled.div`
  display: flex;
  padding: 0 16px;
  justify-content: space-between;
  align-items:center;
`

const ValorTotal = styled.p`
  margin: 0 0 8px 0;
  padding: 0;
  color: #e8222e;
  font-size: 18px;
  font-weight: bold;
`

const Botao = styled.button`
    color: black;
    background-color: #e8222e;
    padding: 12px;
    font-weight:bold;
    border: none;

    :hover {
        background-color: #b90510;
    }
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

function Carrinho() {
  const carrinho = []

  return (
    <TelaToda>
      <DivInterna>
        <DivWrapper>
          <Header>            
            <p>Meu carrinho</p>
          </Header>
          <SecaoEndereco>
            <TextoCinza>Endereço de entrega</TextoCinza>
            <TextoPadrao>Rua Alessandra Vieira, 42</TextoPadrao>
          </SecaoEndereco>
          <ContainerPadrao>
            {(carrinho.length === 0) && <TextoCarrinhoVazio>Carrinho vazio</TextoCarrinhoVazio>}
            {carrinho.length>0 && <>
              <NomeRestaurante>Bullger Vila Madalena</NomeRestaurante>
              <TextoCinza>R.Fradique Coutinho, 1136 - Vila Madalena</TextoCinza>
              <TextoCinza>30-45 min</TextoCinza>
            </>}
            {carrinho.map(produto=>{
              return(
              <CardProdutoCarrinho>
                
              </CardProdutoCarrinho>
            )})}
          </ContainerPadrao>
          <ContainerPadrao>
            <ValorFrete>Frete R$0.00</ValorFrete>
            <DivSubtotal>
              <TextoPadrao>SUBTOTAL</TextoPadrao>
              <ValorTotal>R$0.00</ValorTotal>
            </DivSubtotal>
          </ContainerPadrao>
          <ContainerPadrao>
            <Botao>Confirmar</Botao>
          </ContainerPadrao>
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

export default Carrinho;