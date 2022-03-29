import React from 'react';
import '../../App.css';
import Cards from '../Cards';
import './Projects.css';

export default function Projects() {
    return (
        <>
        
        <h1 className='projects'>PROJECTS</h1>

        <div className='projects-Page'>
            <div className='projects-Container'>
                <div className='projects-Wrapper'>
                    <p>
                    <h3>CONSULTING AND 3D PRINTING</h3> 
                    <br></br>
                    Our main and most popular team activity! Starting at only $0.15/gram and a  5$ setup fee, our printing service is one of the most affordable on  campus! Using our 6 available printers, we aim to offer low-cost, high quality 3D printing services to UBC students, staff, and faculty.
                    <br></br><br></br>
                    Recently last year, our brand new Consulting team has also  kicked off, now providing the first CAD modelling and design consultation service on campus!
                    <br></br>
                    <img src={"../images/projects1.jpg"} className='projects1' />
                    
                    </p>
                </div>

                {/*<div className='projects-logo'>*/}
                {/*</div>*/}
            </div>

        </div>

        <div className='projects-Page'>
            <div className='projects-Container'>
                <div className='projects-Wrapper'>
                    <p>
                    <h3>3D PRINTER DESIGN AND CONSTRUCTION</h3>
                    <br></br>
                    We  enjoy experimenting and pushing the boundaries of what 3D printers can  do, optimizing them to work faster, smarter and add clever features.  This year, we have launched our newest and most ambitious project to date: To build UBC Rapid's first original compact 
                    3D printer, ideal for engineering students with limited space or hobbyists that would like to travel with their printer. The printer is still in its early development stages. Some other Printer development ideas considered include a Monorail printer, and a Cable driven printer.
                    
                    <img src={"../images/projects2.png"} className='projects2' />
                    
                    </p>
                </div>
            </div>

        </div>

        <div className='projects-Page'>
            <div className='projects-Container'>
                <div className='projects-Wrapper'>
                    <p>
                    <h3>EXOTIC MATERIAL TESTING</h3>
                    <br></br>
                    UBC Rapid will be expanding the variety of materials available for student and faculty rapid prototyping projects. Currently, most printers available to UBC undergraduate students are limited to either ABS and PLA. While both materials are useful in prototyping, they severely limit
                    the types of parts students can produce. The biggest challenge is the lack of generally accepted guidelines for printing in materials other than PLA and ABS; this project aims to fill in the gaps of knowledge by developing resources for using non-standard materials on 3D printers, 
                    and ultimately make other materials (such as composites) available for student/faculty use. Filaments to be tested include:                    
                    </p>
                    <br></br><br></br>
                    <p>
                    <ul>
                        <li>Metal (Aluminum, Brass, Bronze, Stainless Steel)</li><br></br>
                        <li>Carbon fiber</li><br></br>
                        <li>Flexible (TPU, TPE)</li><br></br>
                        <li>Polycarbonate</li><br></br>
                        <li>PTFE (Nylon)</li><br></br>
                        <li>Water Soluble</li><br></br>
                        <li>PETG</li><br></br>
                        <li>Conductive</li><br></br>
                        <li>Magnetic</li><br></br>
                        <li>Wax</li><br></br>
                        <li>and many more!</li>
                    </ul>
                    
                    <img src={"../images/projects3.png"} className='projects3' />

                    </p>
                </div>
            </div>
        </div>

        <div className='projects-Page'>
            <div className='projects-Container'>
                <div className='projects-Wrapper'>
                    <p>
                    <h3>MAINTENANCE</h3>

                    Working and well-calibrated 3D printers are the core of UBC Rapid’s operations. Currently, UBC Rapid has 6 working printers and 5 more printers preparing for service. 3 of these printers are set aside for the 3D printing service, which gives new members the opportunity to work with 
                    clients and develop experience with 3D printing. However, as these printers are used the most, these printers often require more love in the form of replacement parts and monthly repairs.
                    
                    <img src={"../images/projects4.jpg"} className='projects4' />
                    
                    </p>
                </div>
            </div>
        </div>

        <div className='projects-Page'>
            <div className='projects-Container'>
                <div className='projects-Wrapper'>
                    <p>
                    <h3>PRINTER AND MULTI-MATERIAL UPGRADES</h3>

                    UBC Rapid aims to upgrade the current Prusa i3 MK2 printers with the ability to print with multiple filaments at once. Using the official Prusa i3 MK2 Multi Material upgrade kits, UBC Rapid will be able to print up to four materials onto a single part.                    
                    
                    <img src={"../images/projects5.jpg"} className='projects5' />
                    
                    </p>
                </div>
            </div>
        </div>

        <div className='projects-Page'>
            <div className='projects-Container'>
                <div className='projects-Wrapper'>
                    <p>
                    <h3>WORKSHOPS</h3>

                    UBC Rapid hosts workshops to teach new recruits about 3D printers. These workshops last one term and repeat every year after recruiting new members. These workshops are mandatory for all new recruits as they include skills required to work safely and efficiently in the workspace. 
                    Workshops include, but are not limited to:

                    how to use software required to operate UBC Rapid’s 3D printers

                    operating and troubleshooting 3D printers

                    general 3D printer safety orientations

                    Workshops rotate between individual work and group work. By the end of the workshops, recruits may work in a team of 5 to build a 3D printer and operate printers for the UBC Rapid Printing Service. As some workshop content is applicable to student life beyond 3D printers, students 
                    who successfully complete the workshops will have a future edge in leading teams or in jobs requiring fluency in CAD software.                    
                    
                    
                    
                    </p>
                </div>
                <img src={"../images/projects6.jpg"} className='projects6' />
            </div>
        </div>
        
        </>
    );
}
