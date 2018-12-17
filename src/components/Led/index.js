import React from 'react'
import './led.css'

const Led = ({ isActive,  isBlink }) => (
    <div 
        style={{ backgroundColor: `${isActive ? 'yellow' : '' }` }}
        className={`${ isActive && isBlink ? 'blink' : 'led' } `}
    />
)

export default Led