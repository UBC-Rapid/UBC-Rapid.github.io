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
                            <p>TPU (Thermoplastic Polyurethane) is a flexible thermoplastic elastomer that combines rubber-like elasticity with plastic durability. It can be molded and 3D printed at elevated temperatures while retaining its ability to recover shape when cooled. TPU offers excellent abrasion resistance, impact strength, and elongation at break, making it ideal for parts that need flexibility and resilience, such as seals, grips, and protective components.</p>
                            <p>Although TPU is highly versatile, it has limitations. Its lower stiffness and yield strength compared to rigid filaments like PLA or ABS make it unsuitable for structural parts under heavy loads. Printing TPU can also be challenging because its softness can cause stringing or clogging if settings are not optimized. Despite these drawbacks, TPU remains a preferred choice for designs that prioritize elasticity and shock absorption.</p>
                            <p>To print TPU successfully, use a nozzle temperature around 200 °C and a bed temperature near 50 °C to reduce warping. Keep the print speed slow and cooling low to maintain layer adhesion. Retraction should be minimal to avoid stringing, and using a higher infill improves strength and elastic recovery. These adjustments make TPU easier to handle and ensure reliable results.</p>
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
                            <p>Carbon fiber-reinforced nylon is a strong, lightweight filament designed for demanding applications. It combines the toughness of nylon with the stiffness of carbon fibers, producing parts that are durable, heat-resistant, and dimensionally stable. This makes it ideal for functional prototypes, tooling, and components in industries like automotive and aerospace, where strength and precision matter.</p>
                            <p>While the material offers excellent performance, it requires careful handling. Carbon fiber nylon is abrasive, so a hardened steel nozzle is essential, and the filament should be kept dry to avoid print defects. It’s also less ductile than pure nylon, so it’s not suited for parts that need flexibility. When printed correctly, however, it delivers professional-grade results with impressive strength and stability.</p>
                            <p>For best results, print at a high nozzle temperature (around 260 °C) and use a heated bed near 80 °C to reduce warping. Keep the cooling fan off and maintain a moderate print speed to ensure strong layer adhesion. Retraction should be minimal or disabled to prevent fiber buildup, and the filament should be stored in a dry environment or dried before use. These steps help achieve accurate, durable prints that take full advantage of the material’s properties.</p>
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
                            <p>Stonefil PLA is a specialty filament that combines standard PLA with powdered stone, creating prints that look and feel like real stone. This gives models a matte finish and natural texture, making it a popular choice for decorative pieces, sculptures, and artistic designs. While the appearance is striking, the material behaves much like regular PLA in terms of strength and rigidity, so it is best suited for aesthetic projects rather than functional parts.</p>
                            <p>The addition of stone powder makes the filament heavier and more abrasive, which can wear down standard nozzles quickly. It also increases brittleness, so the filament can snap if handled roughly. These characteristics mean Stonefil is not ideal for high-stress applications, but it excels when the goal is a realistic stone texture and a premium look.</p>
                            <p>To print Stonefil successfully, use a hardened steel nozzle to handle the abrasive particles and prevent damage. A slightly larger nozzle helps avoid clogging. Printing at around 210 to 220 °C with a bed temperature near 55 °C works well, and keeping the speed slow at about 15 to 20 mm/s ensures smooth extrusion. Good cooling helps maintain crisp layers, and moderate retraction prevents stringing. With these adjustments, Stonefil produces beautiful, stone-like prints that stand out for their texture and finish.</p>
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
