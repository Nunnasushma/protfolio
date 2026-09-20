import React, { useState } from "react";
import {
  Github,
  ExternalLink,
  Brain,
  Sparkles,
  Sliders,
  Layers,
  CheckCircle2,
  Car,
  UserX,
  Code,
  X,
  Play
} from "lucide-react";
import { projectsData } from "../data/projects";

export default function Projects() {
  const [selectedTag, setSelectedTag] = useState("ALL");
  const [activePredictor, setActivePredictor] = useState(null); // 'car-price' | 'attrition' | null
  const [previewModalProject, setPreviewModalProject] = useState(null);

  // Interactive State for Car Price Prediction
  const [carInputs, setCarInputs] = useState({
    brand: "Maruti",
    year: 2019,
    fuelType: "Petrol",
    kmsDriven: 45000,
    transmission: "Manual",
    engine: 1197,
    mileage: 18.9,
    seats: "5",
  });
  const [carPredictedPrice, setCarPredictedPrice] = useState(null);

  // Interactive State for Employee Attrition
  const [attritionInputs, setAttritionInputs] = useState({
    age: 32,
    monthlyIncome: 5000,
    yearsAtCompany: 4,
    overtime: "No",
    jobSatisfaction: "3 - High",
    workLifeBalance: "3 - Better",
  });
  const [attritionResult, setAttritionResult] = useState(null);

  const tags = ["ALL", "AI / FULL STACK", "GENERATIVE AI", "MACHINE LEARNING"];

  const filteredProjects =
    selectedTag === "ALL"
      ? projectsData
      : projectsData.filter((p) => p.tag === selectedTag);

  const handleCalculateCarPrice = (e) => {
    e.preventDefault();
    const currentYear = 2026;
    const age = currentYear - Number(carInputs.year);
    let basePrice = 850000;

    if (carInputs.brand === "Toyota") basePrice *= 1.35;
    if (carInputs.brand === "Honda") basePrice *= 1.15;
    if (carInputs.brand === "Ford") basePrice *= 0.95;
    if (carInputs.fuelType === "Diesel") basePrice *= 1.1;

    basePrice -= age * 45000;
    basePrice -= (carInputs.kmsDriven / 10000) * 15000;
    if (carInputs.transmission === "Automatic") basePrice += 80000;

    const finalEstInLakhs = Math.max(1.8, basePrice / 100000).toFixed(2);
    setCarPredictedPrice(`₹ ${finalEstInLakhs} Lakhs (Est. $${(finalEstInLakhs * 1200).toLocaleString()})`);
  };

  const handleCalculateAttrition = (e) => {
    e.preventDefault();
    let riskScore = 20;

    if (attritionInputs.overtime === "Yes") riskScore += 35;
    if (Number(attritionInputs.monthlyIncome) < 3500) riskScore += 20;
    if (attritionInputs.jobSatisfaction.startsWith("1")) riskScore += 25;
    if (attritionInputs.jobSatisfaction.startsWith("2")) riskScore += 15;
    if (attritionInputs.workLifeBalance.startsWith("1")) riskScore += 20;
    if (Number(attritionInputs.yearsAtCompany) < 2) riskScore += 10;

    const boundedScore = Math.min(95, Math.max(5, riskScore));
    const status = boundedScore > 50 ? "High Risk" : boundedScore > 30 ? "Moderate Risk" : "Low Risk";

    setAttritionResult({
      probability: `${boundedScore}%`,
      status,
      color: status === "High Risk" ? "text-rose-400" : status === "Moderate Risk" ? "text-amber-400" : "text-emerald-400"
    });
  };

  const handleLiveDemoClick = (project) => {
    if (project.isInteractive) {
      setActivePredictor(activePredictor === project.interactiveType ? null : project.interactiveType);
    } else {
      setPreviewModalProject(project);
    }
  };

  return (
    <section id="projects" className="py-20 relative">
      <div className="container-custom">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="glow-badge mb-3">
            <Layers size={14} />
            <span>Portfolio Highlights</span>
          </div>
          <h2 className="section-title">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="section-subtitle">
            A unified showcase combining AI/ML, Generative AI models, Full-Stack Web Applications, and Data Analytics.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-[var(--accent-purple)] to-[var(--accent-pink)] rounded-full mb-8" />

          {/* Tag Filter Pills */}
          <div className="flex items-center justify-center gap-2 flex-wrap max-w-2xl">
            {tags.map((tag) => (
              <button
                key={tag}
                onClick={() => setSelectedTag(tag)}
                className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                  selectedTag === tag
                    ? "bg-gradient-to-r from-[var(--accent-purple)] to-[var(--accent-pink)] text-white shadow-md shadow-purple-500/25"
                    : "bg-[var(--bg-card)] border border-[var(--border-subtle)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-[var(--accent-purple)]"
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => {
            const isMLCategory = project.category.includes("Machine Learning");
            const isGenAI = project.category.includes("Generative");

            return (
              <div
                key={project.id}
                className="glass-card flex flex-col justify-between overflow-hidden group hover:border-[var(--accent-purple)] transition-all"
              >
                <div>
                  {/* Visual Banner Header */}
                  <div
                    className={`h-48 p-6 relative flex flex-col justify-between bg-gradient-to-br ${project.gradient} opacity-90 group-hover:opacity-100 transition-opacity`}
                  >
                    <div className="flex items-center justify-between z-10">
                      <span className="px-3 py-1 rounded-full text-xs font-bold bg-black/40 text-white backdrop-blur-md border border-white/20">
                        {project.category}
                      </span>
                      {isMLCategory ? (
                        <Brain size={24} className="text-white drop-shadow-md" />
                      ) : isGenAI ? (
                        <Sparkles size={24} className="text-white drop-shadow-md" />
                      ) : (
                        <Code size={24} className="text-white drop-shadow-md" />
                      )}
                    </div>

                    <div className="z-10">
                      <span className="text-xs font-medium text-white/80 tracking-wider uppercase">
                        {project.badge}
                      </span>
                      <h3 className="text-2xl font-black text-white drop-shadow-md">
                        {project.title}
                      </h3>
                    </div>

                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                  </div>

                  {/* Body Content */}
                  <div className="p-6 md:p-8">
                    <p className="text-sm md:text-base text-[var(--text-secondary)] leading-relaxed mb-6">
                      {project.description}
                    </p>

                    {/* Features List */}
                    <div className="mb-6">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-[var(--text-muted)] mb-3 flex items-center gap-1.5">
                        <CheckCircle2 size={14} className="text-[var(--accent-purple)]" />
                        Key Features &amp; Capabilities:
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {project.features.map((feat, fIdx) => (
                          <div
                            key={fIdx}
                            className="flex items-center gap-2 text-xs font-medium text-[var(--text-primary)]"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-pink)] shrink-0" />
                            <span>{feat}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Technologies Badges */}
                    <div className="mb-6">
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, tIdx) => (
                          <span
                            key={tIdx}
                            className="px-2.5 py-1 rounded-md text-xs font-semibold bg-[var(--bg-input)] border border-[var(--border-subtle)] text-[var(--text-secondary)] group-hover:text-[var(--text-primary)] group-hover:border-[var(--accent-purple)] transition-colors"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Footer Action Buttons - Active & Connected */}
                <div className="p-6 md:p-8 pt-0 flex flex-col gap-3">
                  {/* Interactive ML Calculator Trigger */}
                  {project.isInteractive && (
                    <button
                      onClick={() =>
                        setActivePredictor(
                          activePredictor === project.interactiveType ? null : project.interactiveType
                        )
                      }
                      className="w-full py-2.5 px-4 rounded-xl bg-purple-500/10 border border-purple-500/30 text-[var(--accent-purple)] font-semibold text-xs flex items-center justify-center gap-2 hover:bg-purple-500/20 transition-all mb-2"
                    >
                      <Sliders size={15} />
                      <span>
                        {activePredictor === project.interactiveType
                          ? "Close Model Predictor"
                          : `Try Interactive ${project.title} Demo`}
                      </span>
                    </button>
                  )}

                  {/* Interactive Drawer Form */}
                  {activePredictor === project.interactiveType && (
                    <div className="p-5 rounded-xl bg-[var(--bg-input)] border border-[var(--border-subtle)] mb-4 animate-fadeIn">
                      {project.interactiveType === "car-price" && (
                        <form onSubmit={handleCalculateCarPrice} className="space-y-4">
                          <div className="flex items-center justify-between border-b border-[var(--border-subtle)] pb-2">
                            <span className="text-xs font-bold text-[var(--text-primary)] flex items-center gap-1.5">
                              <Car size={16} className="text-emerald-400" />
                              Car Price Prediction Model Demo
                            </span>
                            <span className="text-[10px] text-[var(--text-muted)]">Interactive Input</span>
                          </div>

                          <div className="grid grid-cols-2 gap-3">
                            <div>
                              <label className="text-[11px] text-[var(--text-muted)] block mb-1">Brand</label>
                              <select
                                value={carInputs.brand}
                                onChange={(e) => setCarInputs({ ...carInputs, brand: e.target.value })}
                                className="w-full text-xs p-2 rounded bg-[var(--bg-card)] border border-[var(--border-subtle)] text-[var(--text-primary)]"
                              >
                                {project.interactiveFields[0].options.map((o) => (
                                  <option key={o} value={o}>{o}</option>
                                ))}
                              </select>
                            </div>

                            <div>
                              <label className="text-[11px] text-[var(--text-muted)] block mb-1">Fuel Type</label>
                              <select
                                value={carInputs.fuelType}
                                onChange={(e) => setCarInputs({ ...carInputs, fuelType: e.target.value })}
                                className="w-full text-xs p-2 rounded bg-[var(--bg-card)] border border-[var(--border-subtle)] text-[var(--text-primary)]"
                              >
                                {project.interactiveFields[2].options.map((o) => (
                                  <option key={o} value={o}>{o}</option>
                                ))}
                              </select>
                            </div>

                            <div>
                              <label className="text-[11px] text-[var(--text-muted)] block mb-1">Year</label>
                              <input
                                type="number"
                                value={carInputs.year}
                                onChange={(e) => setCarInputs({ ...carInputs, year: e.target.value })}
                                className="w-full text-xs p-2 rounded bg-[var(--bg-card)] border border-[var(--border-subtle)] text-[var(--text-primary)]"
                              />
                            </div>

                            <div>
                              <label className="text-[11px] text-[var(--text-muted)] block mb-1">Kms Driven</label>
                              <input
                                type="number"
                                value={carInputs.kmsDriven}
                                onChange={(e) => setCarInputs({ ...carInputs, kmsDriven: e.target.value })}
                                className="w-full text-xs p-2 rounded bg-[var(--bg-card)] border border-[var(--border-subtle)] text-[var(--text-primary)]"
                              />
                            </div>
                          </div>

                          <button
                            type="submit"
                            className="w-full py-2 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs transition-colors"
                          >
                            Predict Car Price
                          </button>

                          {carPredictedPrice && (
                            <div className="p-3 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-center">
                              <p className="text-[11px] text-emerald-300 font-medium">Estimated Market Price:</p>
                              <p className="text-base font-extrabold text-emerald-400">{carPredictedPrice}</p>
                            </div>
                          )}
                        </form>
                      )}

                      {project.interactiveType === "attrition" && (
                        <form onSubmit={handleCalculateAttrition} className="space-y-4">
                          <div className="flex items-center justify-between border-b border-[var(--border-subtle)] pb-2">
                            <span className="text-xs font-bold text-[var(--text-primary)] flex items-center gap-1.5">
                              <UserX size={16} className="text-amber-400" />
                              Employee Attrition Classifier Demo
                            </span>
                            <span className="text-[10px] text-[var(--text-muted)]">Interactive Input</span>
                          </div>

                          <div className="grid grid-cols-2 gap-3">
                            <div>
                              <label className="text-[11px] text-[var(--text-muted)] block mb-1">Age</label>
                              <input
                                type="number"
                                value={attritionInputs.age}
                                onChange={(e) => setAttritionInputs({ ...attritionInputs, age: e.target.value })}
                                className="w-full text-xs p-2 rounded bg-[var(--bg-card)] border border-[var(--border-subtle)] text-[var(--text-primary)]"
                              />
                            </div>

                            <div>
                              <label className="text-[11px] text-[var(--text-muted)] block mb-1">OverTime</label>
                              <select
                                value={attritionInputs.overtime}
                                onChange={(e) => setAttritionInputs({ ...attritionInputs, overtime: e.target.value })}
                                className="w-full text-xs p-2 rounded bg-[var(--bg-card)] border border-[var(--border-subtle)] text-[var(--text-primary)]"
                              >
                                {project.interactiveFields[3].options.map((o) => (
                                  <option key={o} value={o}>{o}</option>
                                ))}
                              </select>
                            </div>

                            <div>
                              <label className="text-[11px] text-[var(--text-muted)] block mb-1">Monthly Income ($)</label>
                              <input
                                type="number"
                                value={attritionInputs.monthlyIncome}
                                onChange={(e) => setAttritionInputs({ ...attritionInputs, monthlyIncome: e.target.value })}
                                className="w-full text-xs p-2 rounded bg-[var(--bg-card)] border border-[var(--border-subtle)] text-[var(--text-primary)]"
                              />
                            </div>

                            <div>
                              <label className="text-[11px] text-[var(--text-muted)] block mb-1">Job Satisfaction</label>
                              <select
                                value={attritionInputs.jobSatisfaction}
                                onChange={(e) => setAttritionInputs({ ...attritionInputs, jobSatisfaction: e.target.value })}
                                className="w-full text-xs p-2 rounded bg-[var(--bg-card)] border border-[var(--border-subtle)] text-[var(--text-primary)]"
                              >
                                {project.interactiveFields[4].options.map((o) => (
                                  <option key={o} value={o}>{o}</option>
                                ))}
                              </select>
                            </div>
                          </div>

                          <button
                            type="submit"
                            className="w-full py-2 rounded-lg bg-amber-600 hover:bg-amber-500 text-white font-bold text-xs transition-colors"
                          >
                            Predict Employee Attrition Risk
                          </button>

                          {attritionResult && (
                            <div className="p-3 rounded-lg bg-amber-500/10 border border-amber-500/30 text-center">
                              <p className="text-[11px] text-amber-300 font-medium">Predicted Attrition Probability:</p>
                              <p className={`text-lg font-extrabold ${attritionResult.color}`}>
                                {attritionResult.probability} ({attritionResult.status})
                              </p>
                            </div>
                          )}
                        </form>
                      )}
                    </div>
                  )}

                  {/* BOTH GitHub and Live Demo Action Buttons Are Fully Active */}
                  <div className="grid grid-cols-2 gap-3">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="py-3 px-4 rounded-xl bg-[var(--bg-card)] border border-purple-500/30 text-[var(--text-primary)] font-bold text-xs flex items-center justify-center gap-2 hover:border-[var(--accent-purple)] hover:bg-purple-600/10 hover:text-[var(--accent-purple)] transition-all shadow-sm"
                    >
                      <Github size={16} />
                      <span>GitHub Repo</span>
                    </a>

                    <button
                      onClick={() => handleLiveDemoClick(project)}
                      className="py-3 px-4 rounded-xl bg-gradient-to-r from-purple-600/80 to-pink-600/80 text-white font-bold text-xs flex items-center justify-center gap-2 hover:from-purple-600 hover:to-pink-600 hover:shadow-md hover:shadow-purple-500/20 transition-all shadow-sm"
                    >
                      <ExternalLink size={16} />
                      <span>Live Demo</span>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Live Demo Preview Modal */}
      {previewModalProject && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 animate-fadeIn">
          <div className="glass-card max-w-lg w-full p-6 md:p-8 relative bg-[var(--bg-surface)] border border-purple-500/40 rounded-2xl shadow-2xl">
            <button
              onClick={() => setPreviewModalProject(null)}
              className="absolute top-4 right-4 p-2 rounded-full bg-[var(--bg-card)] text-[var(--text-secondary)] hover:text-white transition-colors"
            >
              <X size={20} />
            </button>

            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-purple-600 to-pink-600 flex items-center justify-center text-white font-bold">
                <Play size={20} />
              </div>
              <div>
                <span className="text-xs font-bold text-purple-400 uppercase tracking-wider block">Live Application Demo</span>
                <h3 className="text-xl font-extrabold text-white">{previewModalProject.title}</h3>
              </div>
            </div>

            <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-6">
              {previewModalProject.description}
            </p>

            <div className="p-4 rounded-xl bg-purple-500/10 border border-purple-500/30 mb-6">
              <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-2">Key Highlights Included:</h4>
              <ul className="space-y-1.5 text-xs text-purple-200">
                {previewModalProject.features.map((f, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <CheckCircle2 size={13} className="text-pink-400" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex items-center gap-3">
              <a
                href={previewModalProject.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-3 rounded-xl bg-purple-600 text-white font-bold text-xs text-center flex items-center justify-center gap-2 hover:bg-purple-500 transition-colors"
              >
                <Github size={16} />
                <span>Open GitHub Code</span>
              </a>
              <button
                onClick={() => setPreviewModalProject(null)}
                className="px-5 py-3 rounded-xl bg-[var(--bg-card)] text-[var(--text-secondary)] font-bold text-xs hover:text-white transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
