import React from 'react'
import './ledStrip.css'
import Led from '../Led'

const LedStrip = ({ leds }) => (
    <div className='led-strip'>
        {
            leds.map( (led,index) => <Led key={index} isActive={led.isActive} isBlink={led.isBlink} /> )
        }
    </div>
)

export default LedStrip