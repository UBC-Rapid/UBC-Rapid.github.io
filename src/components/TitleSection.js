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
            <center><div className="info-btns">
                <Button
                    className='btns'
                    buttonStyle='btn--outline'
                    buttonSize='btn--medium'
                    newTab='false'
                    link='#/modelling'
                >
                    CAD Modelling Service
                </Button>
                <Button 
                    className='btns' 
                    buttonStyle='btn--outline'
                    buttSize='btn--medium'
                    newTab='false'
                    link='#/exotic_materials'
                >
                    Exotic Materials
                </Button>
                <Button 
                    className='btns' 
                    buttonStyle='btn--outline'
                    buttSize='btn--medium'
                    newTab='false'
                    link='#/filament_recycler'
                >
                    Filament Recycler
                </Button>
                <Button 
                    className='btns' 
                    buttonStyle='btn--outline'
                    buttSize='btn--medium'
                    newTab='false'
                    link='#/projects'
                >
                    Our Projects
                </Button>
            </div></center>

            
        </div>
        
        
    );
}

export default TitleSection