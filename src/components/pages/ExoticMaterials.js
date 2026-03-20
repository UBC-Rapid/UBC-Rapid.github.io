import React, { useState } from "react";
import "../../App.css";
import "./ExoticMaterials.css";

const materials = [
  {
    id: "tpu",
    title: "TPU",
    img: "/images/TPU.png",
    text: [
      "TPU (Thermoplastic Polyurethane) is a flexible thermoplastic elastomer that combines rubber-like elasticity with plastic durability. It can be molded and 3D printed at elevated temperatures while retaining its ability to recover shape when cooled.",
      "Although TPU is highly versatile, it has limitations. Its lower stiffness and yield strength compared to rigid filaments like PLA or ABS make it unsuitable for structural parts under heavy loads.",
      "To print TPU successfully, use a nozzle temperature around 200°C and a bed temperature near 50°C. Keep print speed slow and cooling low."
    ]
  },
  {
    id: "carbon",
    title: "Carbon Fiber",
    img: "/images/Carbon.png",
    text: [
      "Carbon fiber-reinforced nylon is a strong, lightweight filament designed for demanding applications. It combines the toughness of nylon with the stiffness of carbon fibers.",
      "While the material offers excellent performance, it requires careful handling. Carbon fiber nylon is abrasive, so a hardened steel nozzle is essential.",
      "For best results, print at a high nozzle temperature (around 260°C) and use a heated bed near 80°C to reduce warping."
    ]
  },
  {
    id: "stone",
    title: "Stone Fill",
    img: "/images/stone.png",
    text: [
      "Stonefil PLA is a specialty filament that combines standard PLA with powdered stone, creating prints that look and feel like real stone.",
      "The addition of stone powder makes the filament heavier and more abrasive. It excels when the goal is a realistic stone texture.",
      "To print Stonefil successfully, use a hardened steel nozzle. Printing at around 210 to 220°C with a bed temperature near 55°C works well."
    ]
  }
];

export default function ExoticMaterials() {
  const [openItems, setOpenItems] = useState({
    tpu: false,
    carbon: false,
    stone: false
  });

  const toggle = (id) => {
    setOpenItems((prev) => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const handleKeyDown = (e, id) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      toggle(id);
    }
  };

  return (
    <>
      <h1 className='exotic_materials'>EXOTIC MATERIALS</h1>

      <div className="exotic_wrapper">
        <h2>EXOTIC MATERIAL TESTING</h2>

        <p className="intro_text">
          UBC Rapid will be expanding the variety of materials available for
          student and faculty rapid prototyping projects...
        </p>

        <div className="material_grid">
          {materials.map((mat) => (
            <div className="material_item" key={mat.id}>
              <div
                className={`material_card ${openItems[mat.id] ? "open" : ""}`}
                onClick={() => toggle(mat.id)}
                onKeyDown={(e) => handleKeyDown(e, mat.id)}
                role="button"
                tabIndex={0}
              >
                <img
                  className="material_img"
                  src={mat.img}
                  alt={mat.title}
                />
                <div className="material_tint"></div>

                {!openItems[mat.id] && (
                  <div className="material_title_center">
                    <h3>{mat.title}</h3>
                  </div>
                )}
              </div>

              <div className={`material_below ${openItems[mat.id] ? "open" : ""}`}>
                {mat.text.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}