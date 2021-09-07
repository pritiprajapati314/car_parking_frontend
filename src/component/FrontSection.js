import React from 'react'
import {Button} from './Button'
import '../App.css'
import './FrontSection.css'

function FrontSection() {
    return (
        <div className='front-container'>
            <h1>Park Your Car</h1>
            <p>we have a spot for you</p>
            <div className="front-btns">
                <Button 
                    className = 'btns' 
                    buttonStyle ='btn-outline'
                    buttonSize = 'btn--large'
                >
                    GET STARTED
                </Button>
                <Button 
                    className = 'btns' 
                    buttonStyle ='btn-primary'
                    buttonSize = 'btn--large'
                >
                    REGISTER
                </Button>
            </div>
        </div>
    )
}

export default FrontSection;
