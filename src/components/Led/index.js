import React from 'react'
import './led.css'

const Led = ({ isActive,  isBlink }) => (
    <div 
        style={{ backgroundColor: `${isActive ? 'yellow' : '' }` }}
        className={`led ${ isActive && isBlink ? 'blink' : 'off' } `}
    />
)

export default Led