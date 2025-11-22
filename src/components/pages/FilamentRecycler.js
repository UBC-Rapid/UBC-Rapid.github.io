import React, { useState } from 'react';
import '../../App.css';
import './FilamentRecycler.css';
import { Button } from '../Button';

export default function FilamentRecycler() {

    // State for dropdowns (To be implemented later)
    const [open, setOpen] = useState({
        shredder: false,
        extruder: false,
        spooler: false,
    });

    const toggle = (key) => {
        setOpen(prev => ({ ...prev, [key]: !prev[key] }));
    };


    // Main render
    return (
        <>
            <h1 className='filament_recycler'>FILAMENT RECYCLER</h1>

            <div className='recycler_wrapper'>
                <h2>FILAMENT RECYCLING</h2>
                <br /><br />
                

                {/* Introduction to the project */}
                <p>
                    To make 3D printing a more sustainable practice within 
                    the team and in the broader UBC community, our team is 
                    aiming to design and build a Filament Recycler. This 
                    innovative system transforms 3D printing waste, including
                    failed prints and supports, into fresh filament rolls.
                </p>    
                <div className='image_grid'>
                    <img src="/images/filament_recycler1.jpg" alt="1" />
                    <img src="/images/filament_recycler2.jpg" alt="2" />
                    <img src="/images/filament_recycler3.jpg" alt="3" />
                </div>
                    <br /><br />
                <p>
                    The entire system consists of three key machines:
                </p>
                
                {/* List of machines in dropdown menu*/}
                {/* ========= Shredder ========= */}
                <div className="recycler_dropdown">
                    <div className="recycler_dropdown_header" onClick={() => toggle("shredder")}>
                        <h3>SHREDDER</h3>
                        <span>{open.shredder ? "▲" : "▼"}</span>
                    </div>

                    {open.shredder && (
                        <div className="recycler_dropdown_content">
                            <p> The filament shredder's purpose is to break down 
                                old filament into smaller pieces for melting. Our 
                                design uses an Arduino board to drive a NEMA 34 
                                stepper motor connected to a 50:1 gearbox. This 
                                setup prioritizes torque over speed, ensuring 
                                efficient shredding. We are currently in the process 
                                of creating housing for the electrical components 
                                and connecting the motor to the shredding blades.
                            </p>
                            {/* <img src= " Shredder Image " alt = "Shredder concept / prototype" /> */}
                        </div>
                    )}
                </div>

                {/* ========= Extruder ========= */}
                <div className="recycler_dropdown">
                    <div className="recycler_dropdown_header" onClick={() => toggle("extruder")}>
                        <h3>EXTRUDER</h3>
                        <span>{open.extruder ? "▲" : "▼"}</span>
                    </div>

                    {open.extruder && (
                        <div className="recycler_dropdown_content">
                            <p>The extruder component is responsible for melting the shredded filament
                                and forming it into new, print-ready, filament. Our design uses a screw 
                                rotation mechanism that forces the shredded material through the shaft, 
                                melting it and mixing it evenly. Currently we are working on combining 
                                all the electrical components, and developing design suggestions to mount 
                                on the main assembly.
                            </p>
                            {/* <img src= " Extruder Image " alt = "Extruder concept / prototype" /> */}
                        </div>
                    )}
                </div>

                {/* ========= Spooler ========= */}
                <div className="recycler_dropdown">
                    <div className="recycler_dropdown_header" onClick={() => toggle("spooler")}>
                        <h3>SPOOLER</h3>
                        <span>{open.spooler ? "▲" : "▼"}</span>
                    </div>

                    {open.spooler && (
                        <div className="recycler_dropdown_content">
                            <p>The spooler is the final component of the filament recycler, 
                                responsible for winding the newly extruded filament onto spools 
                                for easy storage and use. We are currently prototyping a spooler
                                 design that uses an Arduino to control the rotation of a DC 
                                 motor, allowing for consistent and even winding of the filament 
                                 onto the spools. We are now working on the electrical components 
                                 and motor integration for the spooler system.
                            </p>
                            {/* <img src= " Spooler Image " alt = "Spooler concept / prototype" /> */}
                        </div>
                    )}
                </div>    
            </div>
        </>
    );
}
