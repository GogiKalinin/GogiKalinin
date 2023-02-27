import React, { useEffect, useState } from 'react';
import './App.css';
import { MainPage } from './Components/pages/MainPage';


export const App = () => {
  const [city, setCity] = useState('moscow')
  const [weatherMode, setWeatherMode] = useState('current')
  const [stateData, setStateData] = useState([])

  console.log(weatherMode)
  console.log(city)

  function init() {
    console.log(city)
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=d982b206b7125a363d94918d08ebf560`)
    .then((resp) => {return resp.json()})
    .then((data) => {

      console.log('data', data)
      console.log('city', data.name)
      setStateData(data)
      console.log(stateData)
  })

    .catch(() => {
        init()
      })
    }
    
    setInterval(() => {
      init()
    }, 1000000) //Обновляет инфу каждые 1000секунд


    // let town = 'moscow';
  // function init2() {
  //   fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${town}&appid=d982b206b7125a363d94918d08ebf560`)
  //   .then((resp) => {return resp.json()})
  //   .then((data) => {

  //     console.log('data', data)
  //     console.log('city', data.name)
  //     return(data)
      
  //     // localStorage.setItem('localData', JSON.stringify(data))
  // })

  //   .catch(() => {
  //       init2()
  //     })
  //   }
    
  //   init2()
    
    // setInterval(() => {
    //   init2()
    // }, 1000000) //Обновляет инфу каждые 1000секунд

    useEffect(() => {   
      init()
    }, <MainPage />);    
    console.log(weatherMode)
  console.log(stateData)

    return (
      <div className="App">
        <MainPage data={stateData} setCity={setCity} weatherMode={weatherMode} setWeatherMode={setWeatherMode}/>
      </div>
    );
}

export default App;
