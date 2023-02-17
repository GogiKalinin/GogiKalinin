import React, { Component, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { MainPage } from './Components/pages/MainPage';


export const App = () => {
    useEffect(() => {
      // const nowCategory = localStorage.getItem("nowCategory");
      // if (nowCategory !== null) {
      //   selectNavItem(
      //     setShowMainElements,
      //     productArray,
      //     nowCategory,
      //     setAllProducts,
      //     navigationItems,
      //     setNavigationItems
      //   );
      // }
      fetch("https://dummyjson.com/products")
        .then((res) => console.log(res.products))
        .then((res) => console.log(res))
        .then((res) => res.json())
        // .then((res) => setData(res.products));
    }, []);

    let weather = fetch()
    let url = 'https://api.openweathermap.org/data/2.5/weather?lat={50}&lon={50}&appid={7289dea3bffb551e47613d04c265b4ff}';
    return (
      <div className="App">
        <MainPage />
      </div>
    );
}

export default App;
