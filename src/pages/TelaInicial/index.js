import React from 'react';
<<<<<<< HEAD:src/pages/TelaInicial/index.js
import logo from '../../img/logo-future-eats.png'
=======
import logo from '../../../img/logo-future-eats.gif'
>>>>>>> master:src/components/pages/TelaInicial/index.js
import {TelaToda, DivInterna} from './style';
import { useHistory } from 'react-router-dom';

function TelaInicial() {

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