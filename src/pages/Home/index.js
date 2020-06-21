import React from 'react';
import {Container, Nav, Topbar, Input} from './style'
import { BrowserRouter, NavLink } from 'react-router-dom';
import Paginas from './Paginas'


/* vou ter que usar o axios com endpoint para pegar o tipo
  de comida para o link

  no components paginas fazer comm que cada uma renderize apenas o 
  tipo de comida 
*/

const search = Paginas.restaurante
  .filter((restaurante) => {
    return restaurante.name.toLocaleÇLowerCase().includes(inputValue)
  })
    .map((item)=>{
      return(
        <Card key='item' className="Card">
        <Imagem src={item.logoUrl}></Imagem>

         <Nome className="Nome">
           <p>{item.name}</p>
         </Nome>

         <Info className='Info'>
           <p>{item.deliveryTime} min</p>
           <p>Frete R${item.shipping.toFixed(2)}</p>
         </Info>
         </Card>
      )
    })

const Home = () => { 
  return (
    <BrowserRouter>
      <Topbar className="Container">
        <h3>ifuture</h3>
        <Input placeholder='Restaurante'></Input>
      </Topbar>
      <Container>
        <Nav>
          <NavLink to='/home/pagina1'>pag 1</NavLink>
          <NavLink to='/home/pagina2'>pag 2</NavLink>
          <NavLink to='/home/pagina3'>pag 3</NavLink>
        </Nav>
        <Paginas />
      </Container>
    </BrowserRouter>
  );

 
}

export default Home;