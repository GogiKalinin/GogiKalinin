import React, { Component, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { MainPage } from './Components/pages/MainPage';


export const App = () => {
  let test_data
  let city = 'moscow'
  function init() {
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=d982b206b7125a363d94918d08ebf560`)
    .then((resp) => {return resp.json()})
    .then((data) => {
        
        console.log('data', data)
        console.log('city', data.name)
        localStorage.setItem('localData', JSON.stringify(data))
    })
    .catch(() => {
        init()
        // searchInp.value = ''
      })
    }
    
    init()
    
    setInterval(() => {
      init()
    }, 1000000) //Обновляет инфу каждые 10секунд
    
  
    return (
      <div className="App">
        <MainPage />
        <p>{init}</p>
      </div>
    );
}

export default App;
