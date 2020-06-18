import styled from 'styled-components'
import {Link} from 'react-router-dom'

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
  box-sizing: border-box;
  padding: 88px 16px 16px;
  height: 640px;
  margin: 5px;
  border: 1px solid black;
  background-color: white;
  display: flex;
  align-items: center;
  flex-direction: column; 
`

export const InputContainer = styled.div`
    margin: 16px;
`

export const BotaoInsc = styled.button`
  color: black;
  background-color: #e8222e;
  padding: 12px;
  font-size: 15px;
  font-weight:bold;
  border: none;
  width: 245px;
  :hover {
      background-color: #b90510;
  }
`

export const LinkCadastro = styled(Link)`
  text-decoration: none;
  color: black;
`