import React, { useState } from 'react';
import '../../App.css';
import './ExoticMaterials.css';

export default function ExoticMaterials() {

    const [open, setOpen] = useState({
        tpu: false,
        carbon: false,
        stone: false,
        wood: false
    });

    const toggle = (key) => {
        setOpen(prev => ({ ...prev, [key]: !prev[key] }));
    };

    return (
        <>
            <h1 className='exotic_materials'>EXOTIC MATERIALS</h1>

            <div className='exotic_wrapper'>

                <h2>EXOTIC MATERIAL TESTING</h2>
                <br /><br />

                <p>
                    UBC Rapid will be expanding the variety of materials available for 
                    student and faculty rapid prototyping projects...
                </p>

                {/* ========= TPU ========= */}
                <div className="exotic_dropdown">
                    <div className="exotic_dropdown_header" onClick={() => toggle("tpu")}>
                        <h3>TPU</h3>
                        <span>{open.tpu ? "▲" : "▼"}</span>
                    </div>

                    {open.tpu && (
                        <div className="exotic_dropdown_content">
                            <p>Short description about TPU goes here.</p>
                            <img src="/images/exoticmaterials1.jpg" alt="TPU sample" />
                        </div>
                    )}
                </div>

                {/* ========= Carbon Fiber ========= */}
                <div className="exotic_dropdown">
                    <div className="exotic_dropdown_header" onClick={() => toggle("carbon")}>
                        <h3>Carbon Fiber</h3>
                        <span>{open.carbon ? "▲" : "▼"}</span>
                    </div>

                    {open.carbon && (
                        <div className="exotic_dropdown_content">
                            <p>Short description about Carbon Fiber goes here.</p>
                            <img src="/images/exoticmaterials2.PNG" alt="Carbon fiber test" />
                        </div>
                    )}
                </div>

                {/* ========= Stone Fill ========= */}
                <div className="exotic_dropdown">
                    <div className="exotic_dropdown_header" onClick={() => toggle("stone")}>
                        <h3>Stone Fill</h3>
                        <span>{open.stone ? "▲" : "▼"}</span>
                    </div>

                    {open.stone && (
                        <div className="exotic_dropdown_content">
                            <p>Short description about Stone Fill goes here.</p>
                            <img src="/images/exoticmaterials3.PNG" alt="Stone fill prototype" />
                        </div>
                    )}
                </div>

                {/* ========= Wood Fill ========= */}
                <div className="exotic_dropdown">
                    <div className="exotic_dropdown_header" onClick={() => toggle("wood")}>
                        <h3>Wood Fill</h3>
                        <span>{open.wood ? "▲" : "▼"}</span>
                    </div>

                    {open.wood && (
                        <div className="exotic_dropdown_content">
                            <p>Short description about Wood Fill goes here.</p>
                            <img src="/images/exoticmaterials4.jpg" alt="Wood fill print" />
                        </div>
                    )}
                </div>

                <br /><br />
            </div>
        </>
    );
}
