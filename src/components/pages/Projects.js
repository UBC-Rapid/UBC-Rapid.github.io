import React from 'react';
import '../../App.css';
import './Projects.css';

export default function Projects() {
    return (
        <>
            <h1 className='projects'>PROJECTS</h1>
            <div className='projects_wrapper'>
               
                <br></br>
                <h3> PRINTER MAINTENANCE</h3>
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
                    <center><img src="/images/pcbworkshop.jpg" alt=""></img></center>
                </p>
                <br></br>
                <h3>NUS Workshop</h3>
                <p> info about the workshop
                </p>
                <center><img src="/images/NUS Workshop Exotic Materials.jpg" alt=""></img></center>
                <center><img src="/images/NUS Worshop img 1.jpg" alt=""></img></center>
            

                
            </div>
        </>
    );
}
