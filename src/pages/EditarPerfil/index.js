import React from 'react';
import styled from 'styled-components'
import IconeVoltar from '../../../img/back.svg'
import { useHistory } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';

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
`

const Header = styled.div`
  width: 100%;
  height: 64px;
  padding: 16px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #BFBFBF;
`

const EspacoHeader = styled.div`
    width: 23px;
`

const SecaoEditarPerfil = styled.div`
  width: 100%;
  padding: 24px 16px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
`

const InputContainer = styled.div`
    margin-bottom: 16px;
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

function EditarPerfil() {
    const history=useHistory();

  return (
    <TelaToda>
      <DivInterna>
          <Header>            
            <img src={IconeVoltar} onClick={()=>history.goBack()} alt="" />
            <p>Editar</p>
            <EspacoHeader />
          </Header>
          <SecaoEditarPerfil>
            <InputContainer>
                <TextField
                    id="outlined-helperText"
                    label="Nome*"
                    defaultValue="Bruna Oliveira"
                    variant="outlined"
                    fullWidth
                />
            </InputContainer>
            <InputContainer>
                <TextField
                    id="outlined-helperText"
                    label="E-mail*"
                    defaultValue="bruna_o@gmail.com"
                    variant="outlined"
                    fullWidth
                />
            </InputContainer>
            <InputContainer>
                <TextField
                    id="outlined-helperText"
                    label="CPF*"
                    defaultValue="333.333.333-33"
                    variant="outlined"
                    fullWidth
                />
            </InputContainer>
            <Botao>Salvar</Botao>
          </SecaoEditarPerfil>
      </DivInterna>
    </TelaToda>
  );
}

export default EditarPerfil;