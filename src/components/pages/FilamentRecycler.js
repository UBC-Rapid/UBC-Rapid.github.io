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
                    <br /><br />
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
                            <p>Short description about the shredder goes here.</p>
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
                            <p>Short description about the extruder goes here.</p>
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
                            <p>Short description about the spooler goes here.</p>
                            {/* <img src= " Spooler Image " alt = "Spooler concept / prototype" /> */}
                        </div>
                    )}
                </div>    
            </div>
        </>
    );
}
