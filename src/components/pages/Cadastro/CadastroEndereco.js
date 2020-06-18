import React, { useState, useEffect } from 'react';
import logo from '../../../img/logo-future-eats-red.png'
import TextField from '@material-ui/core/TextField';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components'
import axios from 'axios';

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
const FormContainer = styled.div`
`;

const CadastroEndereco = () => {

    const history = useHistory();

    const goToHome = () => {
      history.push("/home")    
  }

    const [address, setAddress] = useState([])
    const [form, setForm] = ({ 
        street: "",
        number: "",
        neighbourhood: "",
        city: "",
        state: "",
        complement: ""
    })

    const onChangeInput = (event) => {
        const newValue = event.target.value
        const fieldName = event.target.name

        setForm({...form, [fieldName]: newValue})
    }
    return [form, onChangeInput]
}

    useEffect(() => {
        axios.put('https://us-central1-missao-newton.cloudfunctions.net/fourFoodC/address'
        )
        .then((response) => {
            setForm(response.data.address);            
        })
    },[])

    const onSubmitApplication = (event) => {
        event.preventDefault()
        const body = {
            street: form.street,
            number: form.number,
            neighbourhood: form.neighbourhood,
            city: form.city,
            state: form.state,
            complement: form.complement        
        }
    }

  return (
    <TelaToda>
    <DivInterna>
      <img src={logo} alt="iFuture"/>
      <FormContainer onSubmit={onSubmitApplication}>
      <TextField
          label={'Logradouro*'}
          onChange={onChangeInput}
          type={"text"}
          value={form['street']}
          variant="outlined"    

        />
      <TextField
          label={'Número*'}
          onChange={onChangeInput}
          type={'text'}
          value={form['number']}
          variant="outlined"

        />
        <TextField
          label={'Complemento*'}
          onChange={onChangeInput}
          type={"text"}
          value={form['complement']}
          variant="outlined"
          
        />
      <TextField
          label={'Bairro*'}
          onChange={onChangeInput}
          type={'text'}
          value={form['neighbourhood']}
          variant="outlined"

        />
         <TextField
          label={'Cidade*'}
          onChange={onChangeInput}
          type={'text'}
          value={form['city']}
          variant="outlined"

        />
          <TextField
          label={'Estado*'}
          onChange={onChangeInput}
          type={'text'}
          value={form['state']}
          variant="outlined"

        />
    <BotaoInsc onClick = { goToHome }> Salvar </BotaoInsc> 
    </FormContainer>
    </DivInterna>
  </TelaToda>  
  );
  }

export default CadastroEndereco;
