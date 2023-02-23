import React, { useEffect, useState } from 'react';
import './App.css';
import { MainPage } from './Components/pages/MainPage';


export const App = () => {
  const [city, setSity] = useState('moscow')
  const [weatherMode, setWeatherMode] = useState('currentWeather')
  const [stateData, setStateData] = useState([])

  function init() {
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=d982b206b7125a363d94918d08ebf560`)
    .then((resp) => {return resp.json()})
    .then((data) => {

      console.log('data', data)
      console.log('city', data.name)
      setStateData(data)
  })

    .catch(() => {
        init()
      })
    }
    
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
      return(data)
      
      // localStorage.setItem('localData', JSON.stringify(data))
  })

    .catch(() => {
        init2()
      })
    }
    
    init2()
    
    setInterval(() => {
      init2()
    }, 1000000) //Обновляет инфу каждые 1000секунд

      // init()
    useEffect(() => {   
      init()
    }, <MainPage/>);    
    console.log(weatherMode)
  console.log(stateData)
    return (
      <div className="App">
        <MainPage data={stateData} setSity={setSity} setWeatherMode={setWeatherMode}/>
        <a href="https://www.pexels.com">
          <img src="https://images.pexels.com/lib/api/pexels-white.png" />
        </a>
      </div>
    );
}

export default App;
