import React from 'react'
import './index.css'

export const DigitalButton = ({title, mode}) => {
    return (
        mode === 'search' ? 
        <button className='DigitalButton'>{title}</button>            
        :
        <button className='DigitalButton'>{title}</button>            
    )
}