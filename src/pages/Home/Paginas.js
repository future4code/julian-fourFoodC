import React, { useState } from 'react'
import { PaginaCor, Card, Imagem, Nome, Info} from './style'
import { Switch, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion'


function Paginas(){

    const location = useLocation()

    return (
      <AnimatePresence>
        <Switch location={location} key={location.key}>
          <Route path='/home/pagina1' component={Pagina1}></Route>
          <Route path='/home/pagina2' component={Pagina2}></Route>
          <Route path='/home/pagina3' component={Pagina3}></Route>
        </Switch>
    </AnimatePresence>
    )
  }
  
  const slide = {
    mostrar: {
      x: 0, 
      opacity: 1,
    
      transition: {
        delay: .3
      }
    },
  
    esconder:{
      x: -50,
      opacity: 0,
     
    },
  
    inicial:{
      x: "100%",
      opacity: 0
    }
  }
  
  function Pagina1(props){
    const [lista, setLista] = useState([  {
        "id": "1",
        "description": "Habib's é uma rede de restaurantes de comida rápida brasileira especializada em culinária árabe, os restaurantes vendem mais de 600 milhões de esfirras por ano. A empresa emprega 22 mil colaboradores e tem 421 unidades distribuídas em mais de cem municípios em 20 unidades federativas.",
        "shipping": 6,
        "address": "Rua das Margaridas, 110 - Jardim das Flores",
        "name": "Habibs",
        "logoUrl": "http://soter.ninja/futureFoods/logos/habibs.jpg",
        "deliveryTime": 60,
        "category": "Árabe"
      }])

    return <PaginaCor 
      variants={slide}
      animate="mostrar" 
      initial="inicial" 
      exit="esconder"
      >
          {lista.map(item=>{
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
        })}
      </PaginaCor>
  }

  function Pagina2(){
    const [lista, setLista] = useState([  {
        "id": "1",
        "description": "Habib's é uma rede de restaurantes de comida rápida brasileira especializada em culinária árabe, os restaurantes vendem mais de 600 milhões de esfirras por ano. A empresa emprega 22 mil colaboradores e tem 421 unidades distribuídas em mais de cem municípios em 20 unidades federativas.",
        "shipping": 6,
        "address": "Rua das Margaridas, 110 - Jardim das Flores",
        "name": "Habibs",
        "logoUrl": "http://soter.ninja/futureFoods/logos/habibs.jpg",
        "deliveryTime": 60,
        "category": "Árabe"
      }])

    return (
    <PaginaCor 
      variants={slide}
      animate="mostrar" 
      initial="inicial" 
      exit="esconder"
      >
          {lista.map(item=>{
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
        })}
      </PaginaCor>
    )
  }

  function Pagina3(){
    const [lista, setLista] = useState([  {
      "id": "1",
      "description": "Habib's é uma rede de restaurantes de comida rápida brasileira especializada em culinária árabe, os restaurantes vendem mais de 600 milhões de esfirras por ano. A empresa emprega 22 mil colaboradores e tem 421 unidades distribuídas em mais de cem municípios em 20 unidades federativas.",
      "shipping": 6,
      "address": "Rua das Margaridas, 110 - Jardim das Flores",
      "name": "Habibs",
      "logoUrl": "http://soter.ninja/futureFoods/logos/habibs.jpg",
      "deliveryTime": 60,
      "category": "Árabe"
    }])

  return (<PaginaCor 
    variants={slide}
    animate="mostrar" 
    initial="inicial" 
    exit="esconder"
    >
        {lista.map(item=>{
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
      })}
    </PaginaCor>)
  }

  export default Paginas