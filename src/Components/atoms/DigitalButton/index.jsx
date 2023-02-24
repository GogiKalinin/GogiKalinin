import React from 'react'
import './index.css'

export const DigitalButton = ({title, mode, click}) => {
    return (
        mode === 'search' ? 
        <button className='DigitalButton' onClick={click}>{title}</button>            
        :
        <button className='DigitalButton' onClick={click}>{title}</button>            
    )
}