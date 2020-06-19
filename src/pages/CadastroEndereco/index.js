import React from 'react';
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
  margin-top: 10px;
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
`

const CadastroEndereco = () => {

  const history = useHistory();

  const goToHome = () => {
    history.push("/home")    
  }

  const {form, changeValue} = useForm({ 
        street: "",
        number: "",
        neighbourhood: "",
        city: "",
        state: "",
        complement: ""
  })

  const onChangeInput = (event) => {
      const {name, value} = event.target;
      changeValue(name, value);
  }

  const cadastrarEndereco = (event) => {
    event.preventDefault();

    const body = {
      street: form.street,
      number: form.number,
      neighbourhood: form.neighbourhood,
      city: form.city,
      state: form.state,
      complement: form.complement        
    }

    axios
      .put('https://us-central1-missao-newton.cloudfunctions.net/fourFoodC/address', 
        body, {
        headers:{
          auth: localStorage.getItem("token")
        }
      })
      .then((response) => {
        console.log(response.data);   
        goToHome();   
      })
      .catch(error =>{
        console.log(error.response);
      })
  }

  return (
    <TelaToda>
    <DivInterna>
      
      <FormContainer onSubmit={cadastrarEndereco}>
      <img src={logo} alt="iFuture"/>
        <TextField
            label={'Logradouro*'}
            onChange={onChangeInput}
            type={"text"}
            name="street"
            value={form.street}
            variant="outlined"    

          />
        <TextField
            label={'Número*'}
            onChange={onChangeInput}
            type={'number'}
            name="number"
            value={form.number}
            variant="outlined"

        />
        <TextField
          label={'Complemento*'}
          onChange={onChangeInput}
          type={"text"}
          name="complement"
          value={form.complement}
          variant="outlined"
          
        />
        <TextField
            label={'Bairro*'}
            onChange={onChangeInput}
            type={'text'}
            name="neighbourhood"
            value={form.neighbourhood}
            variant="outlined"

        />
        <TextField
          label={'Cidade*'}
          onChange={onChangeInput}
          type={'text'}
          name="city"
          value={form.city}
          variant="outlined"
        />
        <TextField
          label={'Estado*'}
          onChange={onChangeInput}
          type={'text'}
          name="state"
          value={form.state}
          variant="outlined"
        />
        <BotaoInsc onClick = { cadastrarEndereco }> Salvar </BotaoInsc> 
      </FormContainer>
    </DivInterna>
  </TelaToda>  
  );
  }

export default CadastroEndereco;
