import React from 'react'
import './toggle.css'

const Toggle = ({ isActive, onClick, id }) => (
    <div className={`${isActive ? 'active' : ''} toggle slide`} onClick={() => onClick(id)}>
        <input id="check" type="checkbox" />
        <span className="label">
            <div className="card slide"></div>    
        </span>
    </div>    
)

Toggle.defaultProps = {
    isActive: false
}


export default Toggle
