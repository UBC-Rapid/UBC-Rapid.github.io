import React, { useState, useEffect } from "react";
import "../../App.css";
import "./ExoticMaterials.css";

const materials = [
  {
    id: "tpu",
    title: "TPU",
    img: "/images/ExoticMaterialsPhotos/TPU.jpg",
    zoom: 1.5,
    x: 15,
    y: 10,
    text: [
      "TPU (Thermoplastic Polyurethane) is a flexible thermoplastic elastomer that combines rubber-like elasticity with plastic durability. It can be molded and 3D printed at elevated temperatures while retaining its ability to recover shape when cooled.",
      "Although TPU is highly versatile, it has limitations. Its lower stiffness and yield strength compared to rigid filaments like PLA or ABS make it unsuitable for structural parts under heavy loads.",
      "To print TPU successfully, use a nozzle temperature around 200°C and a bed temperature near 50°C. Keep print speed slow and cooling low."
    ]
  },
  {
    id: "carbon",
    title: "Carbon Fiber Reinforced Nylon",
    img: "/images/ExoticMaterialsPhotos/carbon.jpg",
    zoom: 1.7,
    x: 0,
    y: 25,
    text: [
      "Carbon fiber-reinforced nylon is a strong, lightweight filament designed for demanding applications. It combines the toughness of nylon with the stiffness of carbon fibers.",
      "While the material offers excellent performance, it requires careful handling. Carbon fiber nylon is abrasive, so a hardened steel nozzle is essential.",
      "For best results, print at a high nozzle temperature (around 260°C) and use a heated bed near 80°C to reduce warping."
    ]
  },
  {
    id: "stone",
    title: "Stone Fill PLA",
    img: "/images/ExoticMaterialsPhotos/stonefill.jpg",
    zoom: 1.5,
    x: 0,
    y: 30,
    text: [
      "Stonefill PLA is a specialty filament that combines standard PLA with powdered stone, creating prints that look and feel like real stone.",
      "The addition of stone powder makes the filament heavier and more abrasive. It excels when the goal is a realistic stone texture.",
      "To print Stonefil successfully, use a hardened steel nozzle. Printing at around 210 to 220°C with a bed temperature near 55°C works well."
    ]
  },
  // {
  //   id: "pla",
  //   title: "PLA",
  //   img: "/images/ExoticMaterialsPhotos/PLA.jpg",
  //   zoom: 1.5,
  //   x: 10,
  //   y: 30,
  //   text: [
  //     "TODO"
  //   ]
  // },
  // {
  //   id: "copper",
  //   title: "Copper Fill",
  //   img: "/images/ExoticMaterialsPhotos/copper.jpg",
  //   zoom: 1.5,
  //   x: 0,
  //   y: 20,
  //   text: [
  //     "TODO",
  //   ]
  // },
  // {
  //   id: "sla",
  //   title: "SLA",
  //   img: "/images/ExoticMaterialsPhotos/SLA.jpg",
  //   zoom: 1.5,
  //   x: 0,
  //   y: 10,
  //   text: [
  //     "TODO"
  //   ]
  // }
];


export default function ExoticMaterials() {
  // which material's pop-up is open (null = none open)
  const [selected, setSelected] = useState(null);

  const closePopup = () => setSelected(null);

  // while a pop-up is open: close it with escape, and stop the page behind it from scrolling
  useEffect(() => {
    if (!selected) return;

    const handleEscape = (e) => {
      if (e.key === "Escape") closePopup();
    };

    document.addEventListener("keydown", handleEscape);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
    };
  }, [selected]);

  const handleKeyDown = (e, mat) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      setSelected(mat);
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
                className="material_card"
                onClick={() => setSelected(mat)}
                onKeyDown={(e) => handleKeyDown(e, mat)}
                role="button"
                tabIndex={0}
              >
                <img
                  className="material_img"
                  src={mat.img}
                  alt={mat.title}
                  style={{
                    transform: `scale(${mat.zoom || 1}) translate(${mat.x || 0}px, ${mat.y || 0}px)`,
                    transformOrigin: "center center",
                  }}
                />
                <div className="material_tint"></div>

                <div className="material_title_center">
                  <h3>{mat.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ====== POP-UP (only shows when a material is selected) ====== */}
      {selected && (
        <div className="material_modal_overlay" onClick={closePopup}>
          <div
            className="material_modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="material_modal_title"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="material_modal_close"
              onClick={closePopup}
              aria-label="Close"
            >
              &times;
            </button>

            <img
              className="material_modal_img"
              src={selected.img}
              alt={selected.title}
            />

            <div className="material_modal_body">
              <h3 id="material_modal_title">{selected.title}</h3>
              {selected.text.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}