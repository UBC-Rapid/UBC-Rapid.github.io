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
            <h2>A Rapid Prototyping Engineering Design Team</h2>
            <br></br>
            <h2>
                <a href="#/join-us" class="highlight-link">Applications Now Open for 2024/25</a>
            </h2>
            <center><div className="info-btns">
                <Button 
                    className='btns' 
                    buttonStyle='btn--outline'
                    buttSize='btn--large'
                    newTab='false'
                    link='#/printing'
                >
                    3D Printing Service
                </Button>
                <Button
                    className='btns'
                    buttonStyle='btn--outline'
                    buttonSize='btn--large'
                    newTab='false'
                    link='#/modelling'
                >
                    CAD Modelling Service
                </Button>
            </div></center>
        </div>
    );
}

export default TitleSection