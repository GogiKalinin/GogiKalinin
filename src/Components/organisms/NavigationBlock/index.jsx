import React from 'react'
import { DigitalButton } from '../../atoms/DigitalButton'
import './index.css'

export const NavigationBlock = () => {
    return (
        <div className='NavigationBlock'>
            <DigitalButton title ='current'/>
            <DigitalButton title ='5 days'/>
            <DigitalButton title ='3 hours'/>
        </div>
    )
}