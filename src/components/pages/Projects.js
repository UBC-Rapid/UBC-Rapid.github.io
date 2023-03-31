import React from 'react';
import '../../App.css';
import './Projects.css';

export default function Projects() {
    return (
        <>
            <h1 className='projects'>PROJECTS</h1>
            <div className='projects_wrapper'>
                <h3>3D PRINTING</h3>
                <p>Starting at only $0.15/gram and a $5 setup fee, our printing service is one of the most 
                    affordable on  campus! Using our available printers, we aim to offer low-cost, 
                    high quality 3D printing services to UBC students, staff, and faculty. 
                    We are staffed by students with many years of experience in 3D-printing and offer quality 
                    prints with multiple resolutions, infill settings, and filament types to choose from.
                </p>
                <center><img src="/images/octopus.jpg" alt=""></img></center>
                <br></br>
                <h3>CONSULTING</h3>
                <p>Our Consulting team is now providing the first CAD modelling and design 
                    consultation service on campus! Our members work with clients to design and prototype CAD 
                    models through multiple iterations so that they can achieve their desired print. 
                    The project timeline begins with needs and requirements consultation, followed by 
                    multiple rounds of prototyping, then printing of the final product.
                </p>
                <center><img src="/images/projects1.png" alt=""></img></center>
                <br></br>
                <h3>3D PRINTER DESIGN AND CONSTRUCTION</h3>
                <p>We  enjoy experimenting and pushing the boundaries of what 3D printers can  
                    do, optimizing them to work faster, smarter and add clever features.  
                    So, we have launched one of our most ambitious project to date: 
                    To build UBC Rapid's first original compact 3D printer, ideal for engineering 
                    students with limited space or hobbyists that would like to travel with their 
                    printer. With the construction of our first custom-made printer soon coming to an end, 
                    we are working on completing the concept for the printer frame, and adapting the Marlin 
                    firmware and controls for the scissor lifted bed. Some other Printer development ideas 
                    considered include a Monorail printer, and a Cable driven printer. 
                </p>
                <center><img src="/images/projects5.jpg" alt=""></img></center>
                <br></br>
                <h3>FILAMENT RECYCLER DESIGN AND CONSTRUCTION</h3>
                <p>To make 3D printing a more sustainable practice within the team and in the broader 
                    UBC community our team is aiming to build a custom filament recycler. 
                    The system, consisting of the shredder, the extruder, and the spooler, 
                    will be able to shred and melt filament scraps from FDM printers, then extrude 
                    new spools of filaments. Currently, this project is at its design and development 
                    phase, with the team working on complex assemblies. 
                </p>
                <center><img src="/images/projects7.jpg" alt=""></img></center>
                <br></br>
                <h3>EXOTIC MATERIAL TESTING</h3>
                <p>UBC Rapid will be expanding the variety of materials available for 
                    student and faculty rapid prototyping projects. Currently, most printers 
                    available to UBC undergraduate students are limited to either ABS and PLA. 
                    While both materials are useful in prototyping, they severely limit the 
                    types of parts students can produce. The biggest challenge is the lack 
                    of generally accepted guidelines for printing in materials other than 
                    PLA and ABS; this project aims to fill in the gaps of knowledge by 
                    developing resources for using non-standard materials on 3D printers, 
                    and ultimately make other materials (such as composites) available for 
                    student/faculty use. Filaments to be tested include:
                </p>
                <ul> 
                    <li>Metal (Aluminum, Brass, Bronze, Stainless Steel)</li>
                    <li>Carbon fiber</li>
                    <li>Flexible (TPU, TPE)</li>
                    <li>Polycarbonate</li>
                    <li>PTFE (Nylon)</li>
                    <li>Water soluble</li>
                    <li>PETG</li>
                    <li>Conductive</li>
                    <li>Magnetic</li>
                    <li>Wax and many more!</li>
                </ul>
                <center><img src="/images/projects3.JPG" alt=""></img></center>
                <br></br>
                <h3>MAINTENANCE</h3>
                <p>Working and well-calibrated 3D printers are the core of UBC Rapid’s 
                    operations. Currently, UBC Rapid has 6 working printers and 5 more 
                    printers preparing for service. 3 of these printers are set aside 
                    for the 3D printing service, which gives new members the opportunity 
                    to work with clients and develop experience with 3D printing. However, 
                    as these printers are used the most, these printers often require more 
                    love in the form of replacement parts and monthly repairs.
                </p>
                <center><img src="/images/projects4.JPG" alt=""></img></center>
                <br></br>
                <h3>PRINTER AND MULTI-MATERIAL UPGRADES</h3>
                <p>UBC Rapid aims to upgrade the current Prusa i3 MK2 printers with the 
                    ability to print with multiple filaments at once. Using the official 
                    Prusa i3 MK2 Multi Material upgrade kits, UBC Rapid will be able to 
                    print up to four materials onto a single part.
                </p>
                <center><img src="/images/extruding.jpg" alt=""></img></center>
                <br></br>
                <h3>WORKSHOPS</h3>
                <p>UBC Rapid hosts workshops to teach new recruits about 3D printers. 
                    These workshops last one term and repeat every year after recruiting 
                    new members. These workshops are mandatory for all new recruits as 
                    they include skills required to work safely and efficiently in the 
                    workspace. Workshops include, but are not limited to:
                </p>
                <ul>
                    <li>How to use software required to operate UBC Rapid’s 3D printers</li>
                    <li>Operating and troubleshooting 3D printers</li>
                    <li>General 3D printer safety orientations</li>
                </ul>
                <p>Workshops rotate between individual work and group work. By the end 
                    of the workshops, recruits may operate printers for the UBC Rapid Printing Service. 
                    As some workshop content is applicable to student life beyond 3D 
                    printers, students who successfully complete the workshops will 
                    have a future edge in leading teams or in jobs requiring fluency in 
                    CAD software.
                </p>
                <center><img src="/images/projects6.jpg" alt=""></img></center>
            </div>
        </>
    );
}
