import React from 'react';
import '../App.css';
import { Button } from './Button';
import './TitleSection.css';

function TitleSection() {
    return (
        <div className='info-container'>
            <video src="/videos/gearbox_timelapse_x2.mp4" autoPlay loop muted />
            <h1>UBC RAPID</h1>
            <p>A 3D Printing Engineering Design Team</p>
            <div className="info-btns">
                <Button 
                    className='btns' 
                    buttonStyle='btn--outline'
                    buttSize='btn--large'
                >
                    Consulting Service
                </Button>
                <Button
                    className='btns'
                    buttonStyle='btn--primary'
                    buttonSize='btn--large'
                    onClick={console.log('hey')}
                >
                    Printing Service <i className='far fa-play-circle' />
                </Button>
            </div>
        </div>
    );
}

export default TitleSection