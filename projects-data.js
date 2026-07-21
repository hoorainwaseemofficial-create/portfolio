// ============================================================
// PROJECT DATA — single source of truth
//
// HOW TO ADD A NEW PROJECT:
// Just add one object to the PROJECTS array below. It will
// automatically appear in BOTH the Projects section and the
// Resume section on the page — no other file needs editing.
//
// Fields:
//   title       — project name
//   description — 1–2 sentence summary
//   tech        — array of tags shown as pills
//   image       — path to a screenshot/mockup in images/, or
//                 null to use a plain color thumbnail instead
//   live        — live demo URL, or null if there isn't one
//   source      — GitHub repo URL
// ============================================================

const PROJECTS = [
  {
    title: "Student Management System",
    description: "A desktop app built with Python (Tkinter + ttk) featuring auto-generated student IDs, field validation, course auto-fill, and full Add/Edit/Delete functionality with a clean styled GUI.",
    tech: ["Python", "Tkinter", "GUI"],
    image: "images/student-management.png",
    live: null,
    source: "https://github.com/hoorainwaseemofficial-create/Student-Management-System-"
  },
  {
    title: "Smart Face Recognition Attendance System",
    description: "A Python application that automates attendance tracking using real-time face recognition, matching live camera input against a database of known faces and logging entries automatically.",
    tech: ["Python", "OpenCV", "Face Recognition"],
    image: null,
    live: null,
    source: "https://github.com/hoorainwaseemofficial-create/Smart_Face_Recognition_Attendance_System"
  },
  {
    title: "House Price Prediction",
    description: "A machine learning app that predicts house prices from key property features, built with Python and deployed as an interactive tool for quick price estimates.",
    tech: ["Python", "Machine Learning", "Data Science"],
    image: null,
    live: "https://house-price-predictor-by-hoorain.streamlit.app/",
    source: "https://github.com/hoorainwaseemofficial-create/house_price_prediction"
  },
  {
    title: "Shoe Size Prediction",
    description: "A machine learning app that predicts shoe size from user input features, built with Python and deployed as an interactive web tool.",
    tech: ["Python", "Machine Learning", "Streamlit"],
    image: null,
    live: "https://shoesizeprediction-hoorain.streamlit.app/",
    source: "https://github.com/hoorainwaseemofficial-create/shoe_size_prediction"
  },
  {
    title: "Disease Prediction Using Symptoms",
    description: "A machine learning app that predicts likely diseases based on user-reported symptoms, trained on a medical symptom dataset using Python.",
    tech: ["Python", "scikit-learn", "Machine Learning"],
    image: null,
    live: "https://disease-prediction-usingsymptoms.streamlit.app/",
    source: "https://github.com/hoorainwaseemofficial-create/Disease_Prediction_Using_Symptoms"
  },

  {
    title: "BioGenie — AI Research Assistant for Biology",
    description: "A full RAG-based research assistant that searches PubMed, UniProt, and PDB in real time, stores results as vector memory in Pinecone, and answers questions using Llama 3.3 (via Groq) with source citations.",
    tech: ["Python", "Streamlit", "Pinecone", "Groq", "RAG"],
    image: "images/biogenie.png",
    live: "https://biogenie-hoorain.streamlit.app",
    source: "https://github.com/hoorainwaseemofficial-create/biogenie"
  },



  // 👇 Add your next project here, then just save + push.
  // {
  //   title: "Project Name",
  //   description: "One or two sentences about what it does.",
  //   tech: ["Tech1", "Tech2"],
  //   image: null,
  //   live: "https://your-live-demo-url.com",
  //   source: "https://github.com/your-username/your-repo"
  // },
];
