import React from 'react';
import styled from 'styled-components'
import logo from './img/logo-future-eats.png'

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
  background-color: #e8222e;
  display: flex;
  align-items: center;
  justify-content: center;
`

function App() {
  return (
    <TelaToda>
      <DivInterna>
        <img src={logo} alt="iFuture" />
      </DivInterna>
    </TelaToda>
  );
}

export default App;
