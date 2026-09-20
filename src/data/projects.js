export const projectsData = [
  {
    id: "resume-screening",
    title: "AI Resume Screening System",
    category: "AI + Full Stack",
    tag: "AI / FULL STACK",
    badge: "Featured AI Project",
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "HTML5", "CSS3", "JavaScript", "NLP"],
    description: "An AI-powered web application for automated resume screening, NLP keyword extraction and candidate evaluation.",
    features: [
      "Resume upload & NLP extraction",
      "ATS compatibility scoring",
      "Skill matching analytics",
      "Candidate ranking dashboard",
      "REST APIs with Node.js & MongoDB"
    ],
    githubUrl: "https://github.com/Nunnasushma",
    liveUrl: "#resume-screening",
    isInteractive: false,
    gradient: "from-purple-600 to-pink-600"
  },
  {
    id: "flipkart-clone",
    title: "Flipkart Clone (MERN Stack)",
    category: "Web Development",
    tag: "AI / FULL STACK",
    badge: "E-Commerce System",
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "HTML5", "CSS3", "JavaScript"],
    description: "Built a responsive e-commerce web application inspired by Flipkart using the full MERN Stack with secure authentication, product listings, search filtering, and cart management.",
    features: [
      "Full MERN Stack architecture",
      "User authentication & authorization",
      "Product catalog & search filtering",
      "Interactive cart & checkout UI",
      "Responsive layout for all screen sizes"
    ],
    githubUrl: "https://github.com/Nunnasushma",
    liveUrl: "#flipkart-clone",
    isInteractive: false,
    gradient: "from-blue-600 to-indigo-600"
  },
  {
    id: "tour-guide",
    title: "Smart Local Tour Guide",
    category: "Generative AI",
    tag: "GENERATIVE AI",
    badge: "Internship Project @ Huebits",
    technologies: ["Python", "Generative AI", "LLMs", "Prompt Engineering", "Embeddings", "REST APIs"],
    description: "An AI-powered local tour guide developed during the AI/ML internship, providing attraction search, navigation, restaurant recommendations and event discovery.",
    features: [
      "AI-based recommendations",
      "Attraction search & navigation",
      "Restaurant recommendations",
      "Event discovery & API integration"
    ],
    githubUrl: "https://github.com/Nunnasushma",
    liveUrl: "#tour-guide",
    isInteractive: false,
    gradient: "from-cyan-500 to-blue-600"
  },
  {
    id: "car-price",
    title: "Car Price Prediction",
    category: "Machine Learning",
    tag: "MACHINE LEARNING",
    badge: "Scikit-Learn ML Model",
    technologies: ["Python", "Pandas", "NumPy", "Scikit-learn", "Machine Learning"],
    description: "Machine learning-based application that predicts the estimated price of a used car based on relevant vehicle features.",
    features: [
      "Data preprocessing",
      "Feature engineering",
      "Model training & evaluation",
      "Price prediction engine"
    ],
    interactiveFields: [
      { name: "brand", label: "Brand", type: "select", options: ["Maruti", "Hyundai", "Honda", "Toyota", "Ford", "Mahindra"] },
      { name: "year", label: "Year of Purchase", type: "number", default: 2019 },
      { name: "fuelType", label: "Fuel Type", type: "select", options: ["Petrol", "Diesel", "CNG"] },
      { name: "kmsDriven", label: "Kilometers Driven", type: "number", default: 45000 },
      { name: "transmission", label: "Transmission", type: "select", options: ["Manual", "Automatic"] },
      { name: "engine", label: "Engine (CC)", type: "number", default: 1197 },
      { name: "mileage", label: "Mileage (kmpl)", type: "number", default: 18.9 },
      { name: "seats", label: "Seats", type: "select", options: ["5", "7"] }
    ],
    githubUrl: "https://github.com/Nunnasushma/car-price-prediction",
    liveUrl: "#car-price",
    isInteractive: true,
    interactiveType: "car-price",
    gradient: "from-emerald-500 to-teal-600"
  },
  {
    id: "employee-attrition",
    title: "Employee Attrition Prediction",
    category: "Machine Learning",
    tag: "MACHINE LEARNING",
    badge: "ML Classification Model",
    technologies: ["Python", "Pandas", "NumPy", "Scikit-learn", "Machine Learning"],
    description: "Machine learning classification application that predicts employee attrition based on employee-related features.",
    features: [
      "Data preprocessing & feature analysis",
      "Classification model training",
      "Model evaluation metrics",
      "Interactive prediction input form"
    ],
    interactiveFields: [
      { name: "age", label: "Age", type: "number", default: 32 },
      { name: "monthlyIncome", label: "Monthly Income ($)", type: "number", default: 5000 },
      { name: "yearsAtCompany", label: "Years at Company", type: "number", default: 4 },
      { name: "overtime", label: "OverTime", type: "select", options: ["No", "Yes"] },
      { name: "jobSatisfaction", label: "Job Satisfaction (1-4)", type: "select", options: ["1 - Low", "2 - Medium", "3 - High", "4 - Very High"] },
      { name: "workLifeBalance", label: "Work-Life Balance (1-4)", type: "select", options: ["1 - Poor", "2 - Good", "3 - Better", "4 - Best"] }
    ],
    githubUrl: "https://github.com/Nunnasushma",
    liveUrl: "#employee-attrition",
    isInteractive: true,
    interactiveType: "attrition",
    gradient: "from-amber-500 to-rose-500"
  }
];
