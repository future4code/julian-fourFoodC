import React from 'react';
import logo from './img/logo-future-eats.png'
import {TelaToda, DivInterna} from './style';




function TelaInicialPage() {
  return (
    <TelaToda>
      <DivInterna>
        <img src={logo} alt="iFuture" />
      </DivInterna>
    </TelaToda>
  );
}



export default TelaInicialPage;

