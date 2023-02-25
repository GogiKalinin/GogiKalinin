import React from 'react'
import { DigitalButton } from '../../atoms/DigitalButton'
import './index.css'

export const NavigationBlock = ({setWeatherMode}) => {
    const changeWeatherMode = (mode) => {
        setWeatherMode(mode)
        localStorage.setItem('weatherMode', mode)
    }
    return (
        <div className='NavigationBlock'>
            <DigitalButton title ='current' click = {()=>changeWeatherMode('current')}/>
            <DigitalButton title ='5 days' click={()=>changeWeatherMode('days')}/>
            <DigitalButton title ='3 hours' click={()=>changeWeatherMode('hours')}/>
        </div>
    )
}