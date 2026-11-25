// Converts Exotic Materials Google Sheet (downloaded as CSV) into
// src/data/materials.json, which ExoticMaterials.js imports.
// Photos linked from Google Drive are downloaded into
// public/images/ExoticMaterialsPhotos/.
//
// run from the repo root:
//   node scripts/sheet-to-materials.js materials.csv src/data/materials.json

const fs = require("fs");
const path = require("path");

const [, , csvPath, outPath] = process.argv;
if (!csvPath || !outPath) {
  console.error("Usage: node scripts/sheet-to-materials.js <input.csv> <output.json>");
  process.exit(1);
}

// sheet column headers 
const COLUMNS = {
  title: "Title", 
  material: "Material", 
  properties: "General Properties",
  applicability: "Applicability",
  printing: "3D Printing",
  author: "Author", 
  date: "Date Completed", 
  imageLink: "Image Link", // Google Drive link IMPORTANT it is shared as "anyone with the link"
  image: "Image Filename", // OR a file already in the repo, e.g. TPU.jpg
  zoom: "Card Zoom", // optional, defaults to 1
  x: "Card X Offset", // optional, defaults to 0
  y: "Card Y Offset", // optional, defaults to 0
  popupY: "Popup Image Position", // optional (in %)
  id: "ID", // optional made from the title if blank
};

const IMAGE_FOLDER = "/images/ExoticMaterialsPhotos/"; // path the website uses
const IMAGE_DIR = path.join("public", IMAGE_FOLDER); // where files live in repo
const BIG_IMAGE_BYTES = 2 * 1024 * 1024;

// every row must have either an image link OR an image filename
const REQUIRED = ["title", "material", "properties", "applicability", "printing"];
const REQUIRED_HEADERS = REQUIRED; // Image columns are checked per row

// CSV parser to handle quoted cells with commas, quotes and line breaks
function parseCSV(text) {
  const rows = [];
  let row = [];
  let field = "";
  let inQuotes = false;

  for (let i = 0; i < text.length; i++) {
    const c = text[i];
    if (inQuotes) {
      if (c === '"') {
        if (text[i + 1] === '"') {
          field += '"';
          i++;
        } else {
          inQuotes = false;
        }
      } else {
        field += c;
      }
    } else if (c === '"') {
      inQuotes = true;
    } else if (c === ",") {
      row.push(field);
      field = "";
    } else if (c === "\n") {
      row.push(field);
      rows.push(row);
      row = [];
      field = "";
    } else if (c !== "\r") {
      field += c;
    }
  }
  if (field || row.length) {
    row.push(field);
    rows.push(row);
  }
  return rows;
}

const slugify = (s) =>
  s.toLowerCase().trim().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

const toNumber = (value, fallback) => {
  const n = parseFloat(value);
  return Number.isFinite(n) ? n : fallback;
};

// Pulls the file ID out of the usual Google Drive link formats:
function driveFileId(link) {
  const byPath = link.match(/\/d\/([a-zA-Z0-9_-]{10,})/);
  if (byPath) return byPath[1];
  const byQuery = link.match(/[?&]id=([a-zA-Z0-9_-]{10,})/);
  if (byQuery) return byQuery[1];
  return null;
}

// works out the image type from the file's first bytes, so"access de nied" web page does not get saved as a photo
function imageType(buf) {
  if (buf[0] === 0xff && buf[1] === 0xd8 && buf[2] === 0xff) return "jpg";
  if (buf.slice(0, 8).equals(Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]))) return "png";
  if (buf.slice(0, 4).toString() === "RIFF" && buf.slice(8, 12).toString() === "WEBP") return "webp";
  const brand = buf.slice(4, 12).toString();
  if (/^ftyp(heic|heix|hevc|mif1|msf1)/.test(brand)) return "heic";
  return null;
}

// downloads the drive photo and returns the saved filename or null if it failed
async function downloadDrivePhoto(link, id, sheetRow) {
  const fileId = driveFileId(link);
  if (!fileId) {
    console.warn(`Row ${sheetRow}: "${link}" doesn't look like a Google Drive link`);
    return null;
  }

  let buf;
  try {
    const res = await fetch(`https://drive.google.com/uc?export=download&id=${fileId}`);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    buf = Buffer.from(await res.arrayBuffer());
  } catch (err) {
    console.warn(`Row ${sheetRow}: couldn't download the photo (${err.message})`);
    return null;
  }

  const type = imageType(buf);
  if (type === "heic") {
    console.warn(
      `Row ${sheetRow}: photo is HEIC (iPhone format), which most browsers can't show. ` +
        `Re-upload it as a JPG or PNG.`
    );
    return null;
  }
  if (!type) {
    console.warn(
      `Row ${sheetRow}: the link didn't return an image. ` +
        `Check the photo is shared as "Anyone with the link can view".`
    );
    return null;
  }
  if (buf.length > BIG_IMAGE_BYTES) {
    console.warn(
      `Row ${sheetRow}: photo is ${(buf.length / 1024 / 1024).toFixed(1)} MB. ` +
        `It will work, but the page will load slowly. Consider shrinking it.`
    );
  }

  const filename = `${id}.${type}`;
  fs.mkdirSync(IMAGE_DIR, { recursive: true });
  fs.writeFileSync(path.join(IMAGE_DIR, filename), buf);
  console.log(`Row ${sheetRow}: saved photo as ${IMAGE_FOLDER}${filename}`);
  return filename;
}

// saved photo from an earlier sync to used if drive fails this instance
function existingPhoto(id) {
  for (const ext of ["jpg", "png", "webp"]) {
    if (fs.existsSync(path.join(IMAGE_DIR, `${id}.${ext}`))) return `${id}.${ext}`;
  }
  return null;
}

async function main() {
  const rows = parseCSV(fs.readFileSync(csvPath, "utf8"));
  const headers = rows[0].map((h) => h.trim());

  const colIndex = {};
  for (const [key, header] of Object.entries(COLUMNS)) {
    colIndex[key] = headers.indexOf(header);
  }
  const missingCols = REQUIRED_HEADERS.filter((key) => colIndex[key] === -1);
  if (colIndex.imageLink === -1 && colIndex.image === -1) missingCols.push("imageLink");
  if (missingCols.length) {
    console.error(
      "Sheet is missing these columns: " + missingCols.map((k) => `"${COLUMNS[k]}"`).join(", ")
    );
    process.exit(1);
  }

  const get = (row, key) => (colIndex[key] === -1 ? "" : (row[colIndex[key]] || "").trim());

  const materials = [];
  const seen = new Set();

  for (const [i, row] of rows.slice(1).entries()) {
    const sheetRow = i + 2; // row number as shown in Sheets
    if (row.every((cell) => !cell.trim())) continue; // skip empty rows

    const missing = REQUIRED.filter((key) => !get(row, key));
    if (!get(row, "imageLink") && !get(row, "image")) missing.push("imageLink");
    if (missing.length) {
      console.warn(`Skipping row ${sheetRow}: missing ${missing.map((k) => COLUMNS[k]).join(", ")}`);
      continue;
    }

    const title = get(row, "title");
    const id = get(row, "id") || slugify(title);
    if (seen.has(id)) {
      console.warn(`Skipping row ${sheetRow}: duplicate material "${title}"`);
      continue;
    }

    // photo: a drive link has higher priority than a filename
    let imageFile = get(row, "image");
    const link = get(row, "imageLink");
    if (link) {
      imageFile = (await downloadDrivePhoto(link, id, sheetRow)) || existingPhoto(id);
      if (!imageFile) {
        console.warn(`Skipping row ${sheetRow} ("${title}"): no usable photo`);
        continue;
      }
    }
    seen.add(id);

    const entry = {
      id,
      title,
      img: IMAGE_FOLDER + imageFile,
      zoom: toNumber(get(row, "zoom"), 1),
      x: toNumber(get(row, "x"), 0),
      y: toNumber(get(row, "y"), 0),
    };
    const popupY = get(row, "popupY");
    if (popupY) entry.popupY = popupY.endsWith("%") ? popupY : popupY + "%";
    entry.details = {
      material: get(row, "material"),
      properties: get(row, "properties"),
      applicability: get(row, "applicability"),
      printing: get(row, "printing"),
    };
    if (get(row, "author")) entry.details.author = get(row, "author");
    if (get(row, "date")) entry.details.date = get(row, "date");
    materials.push(entry);
  }

  if (!materials.length) {
    console.error("No valid materials found. Not writing anything, so the page doesn't go blank.");
    process.exit(1);
  }

  fs.mkdirSync(path.dirname(outPath), { recursive: true });
  fs.writeFileSync(outPath, JSON.stringify(materials, null, 2) + "\n");
  console.log(`Wrote ${materials.length} materials to ${outPath}`);
}

main();
