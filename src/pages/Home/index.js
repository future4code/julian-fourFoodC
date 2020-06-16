import React, { useState, useEffect } from 'react';
import './style.css'
import axios from 'axios';





const Home = () => {   
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

  useEffect(()=>{
    axios.get('https://us-central1-missao-newton.cloudfunctions.net/fourFoodC/restaurants',{
      headers:{
       auth: localStorage.getItem("token")
      }
    })
    .then(response=>{
      console.log(response)
    })
    .catch(err=>{
      console.log(err, "Deu erro a bagaça")
    })
  
  },[])


  return (
    <div className="Container">
      <div className='logo'>
        <h3>ifuture</h3>
      </div>

      <input placeholder="Restaurantes" />

      <div className="Card" >
        {lista.map(item=>{
          return(
            <div key='item'>
             <img src={item.logoUrl}></img>

              <span className="Nome">
                <p>{item.name}</p>
              </span>

              <span className='info'>
                <p>{item.deliveryTime} min</p>
                <p>Frete R${item.shipping.toFixed(2)}</p>
              </span>
              </div>
          )
        })}
         
      </div>

    </div>
  );

 
}

export default Home;
