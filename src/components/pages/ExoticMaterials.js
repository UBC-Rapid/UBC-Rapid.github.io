import React from 'react';
import '../../App.css';
import './ExoticMaterials.css';
import { Button } from '../Button';

export default function ExoticMaterials() {
    return (
        <>
            <h1 className='exotic_materials'>EXOTIC MATERIALS</h1>
            <div className='consulting_wrapper'>
                <h2>EXOTIC MATERIAL TESTING</h2>
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
                    <img src="/images/exoticmaterials1.jpg" alt="TPU sample" />
                    <img src="/images/exoticmaterials2.PNG" alt="Carbon fiber test" />
                    <img src="/images/exoticmaterials3.PNG" alt="Stone fill prototype" />
                    <img src="/images/exoticmaterials4.jpg" alt="Wood fill print" />
                </div>

                <h3>OBJECTIVE</h3>
                <p>
                    Our goal is to expand the material capabilities of UBC’s 3D printing ecosystem. 
                    By testing and documenting new materials, we aim to make advanced filaments 
                    accessible to UBC students, staff, and research teams for rapid prototyping and 
                    experimental applications. We will provide our findings on each materials below.
                </p>

                <br /><br />
            </div>
        </>
    );
}