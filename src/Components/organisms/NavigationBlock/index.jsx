import React from 'react'
import { DigitalButton } from '../../atoms/DigitalButton'
import './index.css'

export const NavigationBlock = ({setWeatherMode}) => {
    return (
        <div className='NavigationBlock'>
            <DigitalButton title ='current' click = {setWeatherMode('current')}/>
            {/* <DigitalButton title ='5 days' onClick={()=>setWeatherMode('days')}/> */}
            {/* <DigitalButton title ='3 hours' onClick={()=>setWeatherMode('hours')}/> */}
        </div>
    )
}