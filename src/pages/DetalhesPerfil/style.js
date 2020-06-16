import styled from 'styled-components'

export const TelaToda = styled.div`
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

export const DivInterna = styled.div`
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

export const DivWrapper = styled.div`
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

export const Header = styled.div`
  width: 100%;
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid #BFBFBF;
`

export const SecaoDetalhesPerfil = styled.div`
  width: 100%;
  height: 99px;
  padding: 16px;
  box-sizing: border-box;
  position: relative;
`

export const IconeEditarPerfil = styled.img`
  position: absolute;
  top: 16px;
  right: 16px;
`

export const TextoPadrao = styled.p`
  margin: 0 0 8px 0;
  padding: 0;
`

export const SecaoEndereco = styled.div`
  height: 76px;
  width: 100%;
  padding: 16px;
  box-sizing: border-box;
  background-color: #eeeeee;
  position: relative;
`

export const TextoEndereco = styled.p`
  margin: 0 0 8px 0;
  padding: 0;
  color: #b8b8b8;
`

export const IconeEditarEndereco = styled.img`
  position: absolute;
  top: 26px;
  right: 16px;
`

export const SecaoHistorico = styled.div`
  width: 100%;
  padding: 16px;
  box-sizing: border-box;
`

export const ContainerCardsHistorico = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
`

export const CardHistorico = styled.div`
  width: 328px;
  height: 102px;
  margin: 8px 0;
  padding: 16px;
  box-sizing: border-box;
  border-radius: 8px;
  border: 1px solid #b8b8b8;
  text-align: left;
`

export const NomeRestaurante = styled.p`
  color: #e8222e;
  margin: 0 0 8px 0;
  padding: 0;
`

export const DataPedido = styled.p`
  font-size: 12px;
  margin: 0 0 8px 0;
  padding: 0;
`

export const ValorPedido = styled.p`
  font-size: 16px;
  font-weight: bold;
  margin: 0 0 8px 0;
  padding: 0;
`

export const Footer = styled.div`
  box-shadow: 0 -1px 3px 0 rgba(0,0,0,0.75);
  height: 49px;
  width: 100%;
  position: absolute;
  bottom: 0;
  background-color: #fff;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`

export const ContainerIcone = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`