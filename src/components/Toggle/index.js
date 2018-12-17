import React from 'react'
import './toggle.css'

const Toggle = props => (
    <div class="toggle slide">
        <input id="c" type="checkbox" />
        <label for="c">
            <div class="card slide"></div>    
        </label>
    </div>
)

export default Toggle
