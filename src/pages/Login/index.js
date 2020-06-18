import React, {useState} from 'react';
import logo from '../../img/logo-future-eats-red.png';
import TextField from '@material-ui/core/TextField';
import { TelaToda, DivInterna, BotaoInsc } from './style';
import { useHistory } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import axios from 'axios';

const Login = () => {
  const history = useHistory();
  const token = localStorage.getItem("token");
  
  if(token)
  	history.push('/home')

  const {form, changeValue} = useForm({email: '', senha: ''})
  const [erro, setErro] = useState(null);

  const onChangeInput = (event) => {
    const {name, value} = event.target;
    changeValue(name, value);
  }

  const goToCadastro= ()=>{
    history.push('/cadastro');
  }

  const goToHome = (event) => {
    event.preventDefault()
    const body = {
      email: form.email,
      password: form.senha
    }
    axios.post('https://us-central1-missao-newton.cloudfunctions.net/{{fourFoodC}}/login', body).then((response) => {
      window.localStorage.setItem('token', response.data.token)
      {response.data.user.hasAddress ? ( history.push('/home')) : (history.push('/cadastro'))}
    });
  }


  return (
    <TelaToda>
      <DivInterna>
        <img src={logo} alt="iFuture" />
        

          <TextField
            id="outlined-helperText"
            label="Login"
            name="email"
            value={form['email']}
            variant="outlined"
            onChange={onChangeInput}
          />

          <TextField
            id="outlined-helperText"
            label="Senha"
            name="senha"
            value={form['senha']}
            variant="outlined"
            onChange={onChangeInput}

          />
          <BotaoInsc onSubmit={goToHome} > Entrar </BotaoInsc>
          <p>Não possui cadastro?<p onSubmit={goToCadastro} >Clique aqui</p></p>
          
    </DivInterna>
  </TelaToda>
  );
}

export default Login;