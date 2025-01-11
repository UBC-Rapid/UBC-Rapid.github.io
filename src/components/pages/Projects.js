import React from 'react';
import '../../App.css';
import './Projects.css';

export default function Projects() {
    return (
        <>
            <h1 className='projects'>PROJECTS</h1>
            <div className='projects_wrapper'>
                <h3>3D PRINTING</h3>
                <p>With our cost recovery system, our printing service is the most 
                    affordable on  campus! Using our available printers, we provide low-cost, 
                    high quality 3D printing services to  UBC-affiliated groups and organizations, 
                    including research teams, design teams, clubs and other UBC-affiliated entities. 
                    We assist with selecting materials, size of print, and other features for use 
                    with FDM and Resin printers. This is one of the largest operations within our 
                    team and we are staffed by students with many years of experience in 3D-printing 
                    and offer quality prints.
                </p>
                <center><img src="/images/octopus.jpg" alt=""></img></center>
                <br></br>
                <h3>CAD MODELLING</h3>
                <p>Our Modelling team is providing the first CAD modelling and design 
                    support service at the UBC campus! Our members work with clients to design and prototype CAD 
                    models through multiple iterations so that they can achieve their desired design. 
                    The project timeline begins with needs and requirements assesment, followed by 
                    multiple rounds of prototyping, then printing of the final product.
                </p>
                <center><img src="/images/projects1.png" alt=""></img></center>
                <br></br>
                <h3>FILAMENT RECYCLER DESIGN AND CONSTRUCTION</h3>
                <p> To make 3D printing a more sustainable practice within the team and in the broader UBC community, 
                    our team is aiming to design and build a Filament Recycler. This innovative system transforms 
                    3D printing waste, including failed prints and supports, into fresh filament rolls. The entire system 
                    consists of three key machines: a shredder that reduces the plastic into granules, an extruder that 
                    then melts the shredded plastic and shapes it into the correct filament size, and a spooler that 
                    winds the filament back into rolls. Recent progress includes completing the preliminary design of our 
                    shredder and extruder, as well as procuring some parts to be used towards the build phase. 
                </p>
                <center><img src="/images/projects7.jpg" alt=""></img></center>
                <br></br>
                <h3>EXOTIC MATERIAL TESTING</h3>
                <p>UBC Rapid will be expanding the variety of materials available for 
                    student and faculty rapid prototyping projects. Currently, most printers 
                    available to UBC undergraduate students are limited to either ABS and PLA. 
                    While both materials are useful in prototyping, they severely limit the 
                    types of parts students can produce. This project aims to fill in the gaps of knowledge by 
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
                    <li>Resin</li>
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
                    operations. Currently, UBC Rapid has 7 working printers and 4 more 
                    printers preparing for service. Most of these printers are set aside 
                    for the 3D Printing service, which gives new members the opportunity 
                    to work with clients and develop experience with 3D printing. However, 
                    as these printers are used, they often require more 
                    love in the form of replacement parts and monthly repairs.
                </p>
                <center><img src="/images/projects4.JPG" alt=""></img></center>
                <br></br>
                <h3>PRINTER AND MULTI-MATERIAL UPGRADES</h3>
                <p>UBC Rapid aims to upgrade the current Prusa i3 MK2 printers with the 
                    ability to print with multiple filaments at once. Using the official 
                    Prusa i3 MK2 Multi Material upgrade kits, we will be able to 
                    print up to four materials onto a single part.
                </p>
                <center><img src="/images/extruding.jpg" alt=""></img></center>
                <br></br>
                <h3>WORKSHOPS</h3>
                <p>UBC Rapid hosts workshops to teach new recruits about 3D design and printing. 
                    These workshops repeat every year after recruiting 
                    new members. The workshops include skills required to work safely and efficiently in the 
                    workspace. There are also specialized workshops in areas like web-development and PCB design.
                    Workshops include, but are not limited to:
                </p>
                <ul>
                    <li>How to use software required to operate UBC Rapid’s 3D printers</li>
                    <li>Operating and troubleshooting 3D printers</li>
                    <li>General 3D printer safety orientations</li>
                    <li>PCB design, printing, and safety</li>
                    <li>Website development and GitHub basics</li>
                </ul>
                <p>Workshops rotate between individual work and group work. By the end 
                    of the workshops, recruits may operate printers for the UBC Rapid Printing Service. 
                    As some workshop content is applicable to student life beyond 3D 
                    printers, students who successfully complete the workshops will 
                    have a future edge in leading teams or in jobs requiring fluency in 
                    CAD software.
                </p>
                <center><img src="/images/pcbworkshop.jpg" alt=""></img></center>
            </div>
        </>
    );
}
