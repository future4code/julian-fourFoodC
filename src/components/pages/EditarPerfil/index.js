import React from 'react';
import styled from 'styled-components'
import IconeVoltar from '../../../img/back.svg'
import { useHistory } from 'react-router-dom';

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
  padding: 16px;
  box-sizing: border-box;
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
            
          </SecaoEditarPerfil>
      </DivInterna>
    </TelaToda>
  );
}

export default EditarPerfil;