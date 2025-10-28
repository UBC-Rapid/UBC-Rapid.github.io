import React from 'react';
import '../../App.css';
import './FilamentRecycler.css';
import { Button } from '../Button';

export default function FilamentRecycler() {
    return (
        <>
            <h1 className='filament_recycler'>FILAMENT RECYCLER</h1>
            <div className='consulting_wrapper'>
                <h2>FILAMENT RECYCLER</h2>
                <br /><br />
                
                <p>
                    UBC Rapid will be expanding the variety of materials available for 
                    student and faculty rapid prototyping projects. Currently, most printers 
                    available to UBC undergraduate students are limited to either ABS and PLA. 
                    While both materials are useful in prototyping, they severely limit the 
                    types of parts students can produce. This project aims to fill in the gaps of knowledge by 
                    developing resources for using non-standard materials on 3D printers, 
                    and ultimately make other materials (such as composites) available for 
                    student/faculty use. Filaments to be tested include:
                </p>
                <ul> 
                    <li>TPU</li>
                    <li>Carbon Fiber</li>
                    <li>Stone Fill</li>
                    <li>Wood Fill</li>
                </ul>

                <div className='consulting_img_wrapper project'>
                    {/* Placeholder for images related to Filament Recycler project */}
                </div>
            </div>
        </>
    );
}
