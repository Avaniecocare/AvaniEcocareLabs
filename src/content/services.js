// Service catalogue, taken from the company brief (Sept 2026).
// Plain data only — imported by both the app and vite.config.js.

export const services = [
  {
    slug: "plastics-polymer-testing",
    name: "Plastics & Polymer Testing",
    shortName: "Plastics & Polymers",
    summary:
      "Testing and characterization of plastic and polymer materials, components and finished products.",
    tests: [
      "Material identification by FTIR",
      "Melt Flow Index (MFI / MFR)",
      "Moisture content",
      "Hardness testing",
      "Impact testing",
      "Ozone resistance testing",
      "Tensile strength & elongation",
      "Density / specific gravity",
      "Ash content",
      "Heat ageing",
      "Accelerated ageing",
      "Dimensional & physical properties",
    ],
    note: "Other chemical, physical and mechanical characterization as per applicable standards.",
  },
  {
    slug: "rubber-testing",
    name: "Rubber Testing",
    shortName: "Rubber",
    summary: "Testing of rubber compounds, finished rubber products and elastomeric materials.",
    tests: [
      "Tensile strength & elongation",
      "Hardness",
      "Tear strength",
      "Compression set",
      "Ozone resistance",
      "Heat ageing",
      "Accelerated ageing",
      "Change in physical properties after ageing",
      "Specific gravity / density",
    ],
    note: "Other applicable physical and mechanical tests.",
  },
  {
    slug: "metal-alloy-testing",
    name: "Metal & Alloy Testing",
    shortName: "Metals & Alloys",
    summary:
      "Composition, mechanical properties and microstructure of metals, alloys, welds and coatings.",
    tests: [
      "Chemical composition",
      "Tensile testing",
      "Yield / proof stress",
      "Elongation",
      "Bend testing",
      "Hardness testing",
      "Impact testing",
      "Metallography",
      "Microstructure examination",
      "Weld & weld penetration examination",
      "Coating-related testing",
      "Material identification and characterization",
    ],
    note: null,
  },
  {
    slug: "plywood-wood-testing",
    name: "Plywood & Wood Testing",
    shortName: "Plywood & Wood",
    summary: "Testing of plywood, wood and wood-based panels.",
    tests: [
      "Plywood physical & mechanical properties",
      "Moisture content",
      "Density",
      "Water absorption",
      "Thickness swelling",
      "Tensile / strength-related properties",
      "Bending strength",
      "Modulus of elasticity",
      "Glue bond / adhesion-related testing",
      "Dimensional stability",
      "Termite / durability-related testing, where applicable",
    ],
    note: "Other tests as per relevant BIS specifications.",
  },
  {
    slug: "tile-ceramic-testing",
    name: "Tile & Ceramic Testing",
    shortName: "Tiles & Ceramics",
    summary: "Testing of ceramic tiles, vitrified tiles and other tile products.",
    tests: [
      "Water absorption",
      "Breaking strength",
      "Modulus of rupture",
      "Dimensional characteristics",
      "Surface quality",
      "Flatness",
      "Warpage",
      "Resistance-related properties",
      "Chemical / physical characterization as applicable",
    ],
    note: "Other tests as per relevant BIS / IS standards.",
  },
  {
    slug: "utensil-testing",
    name: "Utensil Testing",
    shortName: "Utensils",
    summary: "Testing of metal utensils and kitchenware as per applicable BIS requirements.",
    tests: [
      "Chemical composition",
      "Material identification",
      "Dimensional & physical properties",
      "Mechanical properties",
      "Surface / finish examination",
      "Corrosion-related testing",
      "Applicable safety and performance tests",
    ],
    note: "Safety and performance tests as per relevant standards.",
  },
];

export const getService = (slug) => services.find((s) => s.slug === slug);

export const bisCategories = [
  "Plastics & polymer products",
  "Rubber products",
  "Plywood & wood-based products",
  "Tiles & ceramic products",
  "Metal & alloy products",
  "Utensils & kitchenware",
  "Engineering materials & components",
];

export const standards = [
  { code: "IS / BIS", name: "Indian Standards" },
  { code: "ASTM", name: "ASTM International" },
  { code: "ISO", name: "International Organization for Standardization" },
  { code: "Customer", name: "Customer-specified methods" },
];

export const useCases = [
  "Product development",
  "Quality control",
  "Material characterization",
  "Failure investigation",
  "Compliance-oriented testing",
];

export const reasons = [
  {
    title: "Wide material coverage",
    text: "Polymers, rubber, metals, plywood, tiles, utensils and other engineering materials.",
  },
  {
    title: "Chemical, physical and mechanical — under one roof",
    text: "One lab for composition, properties and performance, so you manage a single point of contact.",
  },
  {
    title: "Built for development and QC",
    text: "Testing that supports new product development as well as routine quality control.",
  },
  {
    title: "For OEMs, manufacturers and suppliers",
    text: "Test programmes that fit how your supply chain qualifies materials and parts.",
  },
  {
    title: "Standard-based approach",
    text: "Tests carried out against the applicable IS/BIS, ASTM, ISO or customer-specified method.",
  },
  {
    title: "Help choosing the right tests",
    text: "Technical consultation on test selection and the standards that apply to your product.",
  },
];

export const process = [
  {
    title: "Share your requirement",
    text: "Tell us the product, material and — if you know it — the standard or specification.",
  },
  {
    title: "Confirm the test plan",
    text: "We recommend the tests and methods that apply, and confirm sample needs and timelines.",
  },
  {
    title: "Send your sample",
    text: "Drop it off at our Greater Noida lab or send it by courier.",
  },
  {
    title: "Receive your report",
    text: "Get traceable results, and talk to our team if you need help reading them.",
  },
];

// The three testing disciplines — mirrors the three nodes in the logo.
export const disciplines = [
  { id: "chemical", label: "Chemical", color: "green", examples: ["Composition", "FTIR identification", "Ash content"] },
  { id: "mechanical", label: "Mechanical", color: "orange", examples: ["Tensile & elongation", "Impact", "Hardness"] },
  { id: "physical", label: "Physical", color: "grey", examples: ["Density", "Water absorption", "Dimensions"] },
];
