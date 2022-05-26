import React from 'react';
import '../App.css';
import { Button } from './Button';
import './TitleSection.css';

function TitleSection() {
    return (
        <div className="about">
            {/* <video src="/videos/gearbox_timelapse_x2.mp4" autoPlay loop muted /> */}
            {/* <img src="../../public/images/cloned_printer.JPG" /> */}
            <h1>UBC RAPID</h1>
            <h2>A 3D Printing Engineering Design Team</h2>
            <p>Starting at only $0.15 per gram and a $5 setup fee, our 3D printing service is the 
                most affordable on campus.
            </p>
            <div className="info-btns">
                <Button 
                    className='btns' 
                    buttonStyle='btn--outline'
                    buttSize='btn--large'
                    link='/printing'
                >
                    3D Printing Service
                </Button>
                <Button
                    className='btns'
                    buttonStyle='btn--primary'
                    buttonSize='btn--large'
                    onClick={console.log('do something')}
                    link='/consulting'
                >
                    Consulting Service
                </Button>
            </div>
        </div>
    );
}

export default TitleSection