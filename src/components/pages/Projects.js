import React from 'react';
import '../../App.css';
import './Projects.css';

export default function Projects() {
  return (
    <>
      <h1 className="projects">PROJECTS</h1>

      <div className="projects_wrapper">

        {/* --- FILAMENT RECYCLER --- */}
        <section className="project_section">
          <h3>Filament Recycler – Design & Construction</h3>
          <p>
            To make 3D printing a more sustainable practice within UBC Rapid and the broader community,
            our team is designing and building a filament recycler. This system transforms failed prints
            and 3D-printing waste into fresh filament. It consists of a shredder, an extruder, and a spooler.
            Recent progress includes completing the preliminary shredder and extruder designs and procuring
            parts for the build phase.
          </p>

          <div className="image_grid">
            <img src="/images/filament_recycler1.jpg" alt="Filament Recycler 1" />
            <img src="/images/filament_recycler2.jpg" alt="Filament Recycler 2" />
            <img src="/images/filament_recycler3.jpg" alt="Filament Recycler 3" />
          </div>
        </section>

        {/* --- MAINTENANCE --- */}
        <section className="project_section">
          <h3>Maintenance</h3>
          <p>
            UBC Rapid currently operates 7 working 3D printers with 4 more being prepared for service.
            These printers are essential for our 3D printing service, allowing members to gain hands-on
            experience with clients. As they are used regularly, they require ongoing maintenance,
            calibration, and part replacement.
          </p>

          <div className="image_center">
            <img src="/images/projects4.JPG" alt="Printer maintenance" />
          </div>
        </section>

        {/* --- MULTI-MATERIAL UPGRADES --- */}
        <section className="project_section">
          <h3>Printer & Multi-Material Upgrades</h3>
          <p>
            We aim to upgrade our Prusa i3 MK2 printers with the Multi-Material Upgrade, providing
            the ability to print with up to four filaments simultaneously. This will enable the
            team to produce more complex and functional prints for design teams and clients.
          </p>

          <div className="image_center">
            <img className="img-medium" src="/images/extruding.jpg" alt="Multi-material printing" />
            </div>
        </section>

        {/* --- WORKSHOPS --- */}
        <section className="project_section">
          <h3>Workshops</h3>
          <p>
            UBC Rapid hosts annual workshops to train new recruits in 3D design, 3D printer operation,
            and technical skills needed to work safely and efficiently in the space.
          </p>

          <ul>
            <li>Operating and troubleshooting 3D printers</li>
            <li>General 3D-printer safety orientation</li>
            <li>CAD design fundamentals</li>
            <li>PCB design, production, and safety</li>
            <li>Website development and GitHub basics</li>
          </ul>

          <div className="image_center">
            <img src="/images/pcbworkshop.jpg" alt="PCB workshop" />
          </div>
        </section>

        {/* --- INTERNATIONAL WORKSHOP SPOTLIGHT --- */}
        <section className="project_section">
          <h3>International Workshop Spotlight – NUS</h3>
          <p>
            UBC Rapid hosted a collaborative session with the National University of Singapore’s Centre
            of Additive Manufacturing. We showcased our filament recycler and exotic materials testing project,
            while learning about the advanced AM research happening at NUS. This marked our first international
            academic connection, and we look forward to future collaboration.
          </p>

          <div className="image_grid">
            <img src="/images/NUS Workshop Exotic Materials.jpg" alt="NUS workshop 1" />
            <img src="/images/NUS Worshop img 1.jpg" alt="NUS workshop 2" />
          </div>
        </section>

      </div>
    </>
  );
}
