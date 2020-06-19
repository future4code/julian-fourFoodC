import React from 'react';
import logo from '../../img/logo-future-eats.png'
import {TelaToda, DivInterna} from './style';
import { useHistory } from 'react-router-dom';

function TelaInicial() {
  document.title="iFuture"
  const history = useHistory();

  const goToLogin = () => {
    history.push("/login")
  }

  return (
    <TelaToda>
      <DivInterna>
        <img src={logo} alt="iFuture" onClick={goToLogin}/>
      </DivInterna>
    </TelaToda>
  );
}

export default TelaInicial;