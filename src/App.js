import React, { useState } from 'react';
import './App.css';
import { MainPage } from './Components/pages/MainPage';


export const App = () => {
  
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
      })
    }
    
    init()
    
    setInterval(() => {
      init()
    }, 1000000) //Обновляет инфу каждые 1000секунд


    let town = 'moscow';
  function init2() {
    fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${town}&appid=d982b206b7125a363d94918d08ebf560`)
    .then((resp) => {return resp.json()})
    .then((data) => {

      console.log('data', data)
      console.log('city', data.name)
      
      localStorage.setItem('localData', JSON.stringify(data))
  })

    .catch(() => {
        init2()
      })
    }
    
    init2()
    
    setInterval(() => {
      init2()
    }, 1000000) //Обновляет инфу каждые 1000секунд
    
  // console.log(JSON.parse(localStorage.getItem('localData')))
  const [stateData, setStateData] = useState(JSON.parse(localStorage.getItem('localData')))
  // console.log(stateData)
    return (
      <div className="App">
        {/* <MainPage data={stateData}/> */}
        <a href="https://www.pexels.com">
          <img src="https://images.pexels.com/lib/api/pexels-white.png" />
        </a>
      </div>
    );
}

export default App;
