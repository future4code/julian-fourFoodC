import React, {useState} from 'react';
import logo from '../../img/logo-future-eats-red.png';
import TextField from '@material-ui/core/TextField';
import { TelaToda, DivInterna, BotaoInsc, InputContainer, LinkCadastro } from './style';
import { useHistory } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import axios from 'axios';

const Login = () => {
  document.title="Login";
  const history = useHistory();
  const token = localStorage.getItem("token");
  
  if(token)
  	history.push('/home')

  const {form, changeValue} = useForm({email: '', senha: ''})
  const [erro, setErro] = useState(null)

  const onChangeInput = (event) => {
    const {name, value} = event.target;
    changeValue(name, value);
  }

  const goToHome = (event) => {
    event.preventDefault()
    const body = {
      email: form.email,
      password: form.senha
    }
    axios
      .post('https://us-central1-missao-newton.cloudfunctions.net/fourFoodC/login', body)
      .then((response) => {
        window.localStorage.setItem('token', response.data.token)
        response.data.user.hasAddress ? ( history.push('/home')) : (history.push('/cadastro/endereco'))
      })
      .catch(error=>{
        setErro(error.response.data.message)
      })
  }


  return (
    <TelaToda>
      <DivInterna>
        <img src={logo} alt="iFuture" />
        <InputContainer>
          <TextField
            id="outlined-helperText"
            label="Login"
            name="email"
            value={form.email}
            variant="outlined"
            onChange={onChangeInput}
            fullWidth
          />
        </InputContainer>
        <InputContainer>
          <TextField
            id="outlined-helperText"
            label="Senha"
            name="senha"
            type="password"
            value={form.senha}
            variant="outlined"
            onChange={onChangeInput}
            fullWidth
          />
        </InputContainer>
        {erro && <p>{erro}</p>}
        <BotaoInsc onClick={goToHome} > Entrar </BotaoInsc>
        <LinkCadastro to="/cadastro"><p>Não possui cadastro? Clique aqui</p></LinkCadastro>  
      </DivInterna>
    </TelaToda>
  );
}

export default Login;