import React, { useState } from "react";
import "../../App.css";
import "./FilamentRecycler.css";

export default function FilamentRecycler() {
  const [open, setOpen] = useState({
    shredder: false,
    extruder: false,
    spooler: false,
  });

  const toggle = (key) => {
    setOpen((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <>
      <h1 className="filament_recycler">FILAMENT RECYCLER</h1>

      <div className="recycler_wrapper">
        <h2>FILAMENT RECYCLING</h2>

        <p>
          To make 3D printing a more sustainable practice within the team and in
          the broader UBC community, our team is aiming to design and build a
          Filament Recycler. This innovative system transforms 3D printing waste,
          including failed prints and supports, into fresh filament rolls.
        </p>

        <p className="recycler_lead">
          The entire system consists of three key machines:
        </p>

        <div className="machine_grid">
          {/* ===== SHREDDER ===== */}
          <div className="machine_item">
            <div
              className={`machine_card ${open.shredder ? "open" : ""}`}
              onClick={() => toggle("shredder")}
              role="button"
              tabIndex={0}
            >
              <img
                className="machine_img"
                src="/images/filament_recycler1.jpg"
                alt="Shredder"
              />
              <div className="machine_tint"></div>

              {!open.shredder && (
                <div className="machine_title_center">
                  <h3>SHREDDER</h3>
                </div>
              )}
            </div>

            <div className={`machine_below ${open.shredder ? "open" : ""}`}>
              <p>
                The filament shredder's purpose is to break down old filament
                into smaller pieces for melting. Our design uses an Arduino board
                to drive a NEMA 34 stepper motor connected to a 50:1 gearbox.
                This setup prioritizes torque over speed, ensuring efficient
                shredding. We are currently in the process of creating housing
                for the electrical components and connecting the motor to the
                shredding blades.
              </p>
            </div>
          </div>

          {/* ===== EXTRUDER ===== */}
          <div className="machine_item">
            <div
              className={`machine_card ${open.extruder ? "open" : ""}`}
              onClick={() => toggle("extruder")}
              role="button"
              tabIndex={0}
            >
              <img
                className="machine_img"
                src="/images/filament_recycler2.jpg"
                alt="Extruder"
              />
              <div className="machine_tint"></div>

              {!open.extruder && (
                <div className="machine_title_center">
                  <h3>EXTRUDER</h3>
                </div>
              )}
            </div>

            <div className={`machine_below ${open.extruder ? "open" : ""}`}>
              <p>
                The extruder component is responsible for melting the shredded
                filament and forming it into new, print-ready filament. Our
                design uses a screw rotation mechanism that forces the shredded
                material through the shaft, melting it and mixing it evenly.
                Currently we are working on combining all the electrical
                components, and developing design suggestions to mount on the
                main assembly.
              </p>
            </div>
          </div>

          {/* ===== SPOOLER ===== */}
          <div className="machine_item">
            <div
              className={`machine_card ${open.spooler ? "open" : ""}`}
              onClick={() => toggle("spooler")}
              role="button"
              tabIndex={0}
            >
              <img
                className="machine_img"
                src="/images/filament_recycler3.jpg"
                alt="Spooler"
              />
              <div className="machine_tint"></div>

              {!open.spooler && (
                <div className="machine_title_center">
                  <h3>SPOOLER</h3>
                </div>
              )}
            </div>

            <div className={`machine_below ${open.spooler ? "open" : ""}`}>
              <p>
                The spooler is the final component of the filament recycler,
                responsible for winding the newly extruded filament onto spools
                for easy storage and use. We are currently prototyping a spooler
                design that uses an Arduino to control the rotation of a DC
                motor, allowing for consistent and even winding of the filament
                onto the spools. We are now working on the electrical components
                and motor integration for the spooler system.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
