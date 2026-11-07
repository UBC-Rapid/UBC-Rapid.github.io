import React, { useState, useEffect } from "react";
import "../../App.css";
import "./ExoticMaterials.css";


// rows in every material pop-up
const DETAIL_ROWS = [
  { key: "material", label: "Material" },
  { key: "properties", label: "General Properties" },
  { key: "applicability", label: "Applicability" },
  { key: "printing", label: "3D Printing" },
];


const materials = [
  {
    id: "tpu",
    title: "TPU",
    img: "/images/ExoticMaterialsPhotos/TPU.jpg",
    zoom: 1.5,
    x: 15,
    y: 12,
    popupY: "48%",
    details: {
      material: "Thermoplastic Polyurethane (TPU)",
      properties: "Flexible thermoplastic elastomer that combines rubber-like elasticity with plastic durability. Recovers its shape after being stretched or compressed.",
      applicability: "Highly versatile mater, however, limitations like its lower stiffness and yield strength compared to rigid filaments like PLA or ABS make it unsuitable for structural parts under heavy loads.",
      printing: "Nozzle around 200°C, bed near 50°C. Keep print speed slow and cooling low."
    }
  },
  {
    id: "carbon",
    title: "Carbon Fiber Reinforced Nylon",
    img: "/images/ExoticMaterialsPhotos/carbon.jpg",
    zoom: 1.7,
    x: 0,
    y: 25,
    popupY: "45%",
    details: {
      material: "Nylon reinforced with carbon fibers",
      properties: "Strong and lightweight. Combines the toughness of nylon with the stiffness of carbon fibers.",
      applicability: "Designed for demanding applications that need high strength and stiffness at low weight.",
      printing: "Abrasive, so a hardened steel nozzle is essential. Nozzle around 260°C, heated bed near 80°C to reduce warping."
    }
  },
  {
    id: "stone",
    title: "Stone Fill PLA",
    img: "/images/ExoticMaterialsPhotos/stonefill.jpg",
    zoom: 1.5,
    x: 0,
    y: 30,
    popupY: "43%",
    details: {
      material: "PLA blended with powdered stone",
      properties: "Prints look and feel like real stone. The stone powder makes the filament heavier and more abrasive than standard PLA.",
      applicability: "Excels when the goal is a realistic stone texture.",
      printing: "Use a hardened steel nozzle. Nozzle around 210–220°C, bed near 55°C."
    }
  },
  // {
  //   id: "pla",
  //   title: "PLA",
  //   img: "/images/ExoticMaterialsPhotos/PLA.jpg",
  //   zoom: 1.5,
  //   x: 10,
  //   y: 30,
  //   details: {
  //     material: "TODO",
  //     properties: "TODO",
  //     applicability: "TODO",
  //     printing: "TODO"
  //   }
  // },
  // {
  //   id: "copper",
  //   title: "Copper Fill",
  //   img: "/images/ExoticMaterialsPhotos/copper.jpg",
  //   zoom: 1.5,
  //   x: 0,
  //   y: 20,
  //   details: {
  //     material: "TODO",
  //     properties: "TODO",
  //     applicability: "TODO",
  //     printing: "TODO"
  //   }
  // },
  // {
  //   id: "sla",
  //   title: "SLA",
  //   img: "/images/ExoticMaterialsPhotos/SLA.jpg",
  //   zoom: 1.5,
  //   x: 0,
  //   y: 10,
  //   details: {
  //     material: "TODO",
  //     properties: "TODO",
  //     applicability: "TODO",
  //     printing: "TODO"
  //   }
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
          We are expanding our range of printable materials by researching the 
          properties and feasibility of using innovative options like copper-infused 
          filament, nylon, and many others. Explore our recent projects below.
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
              style={{ objectPosition: `center ${selected.popupY || "50%"}` }}
            />

            <div className="material_modal_body">
              <h3 id="material_modal_title">{selected.title}</h3>
              <table className="material_table">
                <tbody>
                  {DETAIL_ROWS.map(({ key, label }) =>
                    selected.details?.[key] && (
                      <tr key={key}>
                        <th scope="row">{label}</th>
                        <td>{selected.details[key]}</td>
                      </tr>
                    )
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
    </>
  );
}