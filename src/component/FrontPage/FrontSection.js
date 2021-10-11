import React from 'react'
import {Button} from './Button'
import '../../App.css'
import './FrontSection.css'
// import { useHistory } from 'react-router'

function FrontSection(props) {
    // const history = useHistory();
    return (
        <div className='front-container'>
            <h1>Park Your Car</h1>
            <p>we have a spot for you</p>
            <div className="front-btns">
                <Button 
                    className = 'btns' 
                    buttonStyle ='btn--outline'
                    buttonSize = 'btn--large'
                    // onclick ={history.push("/managerRequest")}
                >
                    GET STARTED as Manager
                </Button>
                <Button 
                    className = 'btns' 
                    buttonStyle ='btn--primary'
                    buttonSize = 'btn--large'
                >
                    REGISTER as User
                </Button>
            </div>
        </div>
    )
}

export default FrontSection;
