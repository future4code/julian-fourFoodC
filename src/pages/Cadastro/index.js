import React, {useState} from 'react';
import logo from '../../img/logo-future-eats-red.png'
import TextField from '@material-ui/core/TextField';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components'
import axios from 'axios';
import {useForm} from '../../hooks/useForm'

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

export const DivInterna = styled.div`
  width: 360px;
  box-sizing: border-box;
  height: 640px;
  margin: 5px;
  border: 1px solid black;
  background-color: white;
  display: grid;
  align-items: center;
  justify-content: center;
  flex-direction: column; 

`
const BotaoInsc = styled.button`
  color: black;
  background-color: #e8222e;
  padding: 12px;
  font-size: 15px;
  font-weight:bold;
  border: none;

  :hover {
      background-color: #b90510;
  }
` 
const FormContainer = styled.form`
  display: grid;
  align-items: center;
  gap: 12px;
  text-align: center;
`   

const TextoErro = styled.p`
  margin: 8px;
  color: red;
`

const Cadastro = () => {
  const history = useHistory();
  const token = localStorage.getItem("token");
  
  if(token)
  	history.push('/home')
  
  const [erro, setErro] = useState(null)
  const {form, changeValue} = useForm({
    name: "",
    email: "",
    cpf: "",
    password: "",
    confirmpassword: ""
  })

  const onChangeinput = (event) => {
    const {name, value} = event.target;
    changeValue(name, value);
  }

  const goToAdress = () => {
    history.push("/cadastro/endereco")
    
  }

  const cadastrarCliente = (event) => {
    event.preventDefault();

    if(form.password===form.confirmpassword){
      const body = {
        name: form.name,
        email: form.email,
        cpf: form.cpf,
        password: form.password
      }

      axios
        .post('https://us-central1-missao-newton.cloudfunctions.net/fourFoodC/signup',
        body)     
        .then((response) => {
          window.localStorage.setItem('token', response.data.token)
          goToAdress();   
        })
        .catch(error =>{
          setErro(error.response.data.message)
        })
    }
    else{
      setErro("Senhas não conferem")
    }
  }

  return (
    <TelaToda>
    <DivInterna>
      <FormContainer onSubmit={cadastrarCliente}>
        <img src={logo} alt="iFuture"/>
        <TextField
          label={"Nome*"}
          onChange={onChangeinput}
          type={"text"}
          name="name"
          value={form.name}
          variant="outlined"
        />
        <TextField
          label={"E-mail*"}
          onChange={onChangeinput}
          type={"text"}
          name="email"
          value={form.email}
          variant="outlined"
        />
        <TextField
          label={"CPF*"}
          onChange={onChangeinput}
          type={"number"}
          name="cpf"
          value={form.cpf}
          variant="outlined"
        />
        <TextField
          label={"Senha*"}
          onChange={onChangeinput}
          type={"password"}
          name="password"
          value={form.password}
          variant="outlined"
        />
         <TextField
          label={"Confirmar*"}
          onChange={onChangeinput}
          type={"password"}
          name="confirmpassword"
          value={form.confirmpassword}
          variant="outlined"
        />
        {erro && <TextoErro>{erro}</TextoErro>}
      <BotaoInsc> Criar </BotaoInsc> 
    </FormContainer>
    </DivInterna>
  </TelaToda>
  );
}


export default Cadastro;
