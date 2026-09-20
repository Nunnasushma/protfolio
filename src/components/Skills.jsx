import React, { useState } from "react";
import {
  Code,
  Brain,
  Globe,
  Database,
  Wrench,
  Sparkles,
  BookOpen,
  CheckCircle2,
  Cpu
} from "lucide-react";
import { skillsData } from "../data/profile";

const iconMap = {
  Code: Code,
  Brain: Brain,
  Globe: Globe,
  Database: Database,
  Wrench: Wrench,
  Sparkles: Sparkles,
  BookOpen: BookOpen,
};

const iconBgMap = {
  purple: "bg-purple-600 text-white shadow-purple-500/30",
  pink: "bg-pink-600 text-white shadow-pink-500/30",
  cyan: "bg-cyan-500 text-white shadow-cyan-500/30",
  emerald: "bg-emerald-500 text-white shadow-emerald-500/30",
  amber: "bg-amber-500 text-white shadow-amber-500/30",
  indigo: "bg-indigo-600 text-white shadow-indigo-500/30",
  rose: "bg-rose-600 text-white shadow-rose-500/30",
};

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", ...skillsData.map((s) => s.category)];

  const filteredSkills =
    selectedCategory === "All"
      ? skillsData
      : skillsData.filter((s) => s.category === selectedCategory);

  return (
    <section id="skills" className="py-20 relative">
      <div className="container-custom">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="glow-badge mb-3">
            <Cpu size={14} />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="section-title">
            Skills &amp; <span className="text-gradient">Competencies</span>
          </h2>
          <p className="section-subtitle">
            A comprehensive overview of my expertise spanning AI/ML, NLP, Web Development, Databases, and Software Engineering.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-[var(--accent-purple)] to-[var(--accent-pink)] rounded-full mb-8" />

          {/* Filter Pills */}
          <div className="flex items-center justify-center gap-2 flex-wrap max-w-4xl">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                  selectedCategory === cat
                    ? "bg-gradient-to-r from-[var(--accent-purple)] to-[var(--accent-pink)] text-white shadow-md shadow-purple-500/20"
                    : "bg-[var(--bg-card)] border border-[var(--border-subtle)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-[var(--accent-purple)]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Skills Cards Grid - Styled like reference image */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((item, idx) => {
            const IconComponent = iconMap[item.icon] || Code;
            const badgeClass = iconBgMap[item.color] || "bg-purple-600 text-white";

            return (
              <div
                key={idx}
                className="glass-card p-6 md:p-7 flex flex-col justify-between hover:border-[var(--accent-purple)] transition-all group relative overflow-hidden"
              >
                <div>
                  {/* Category Card Header */}
                  <div className="flex items-center gap-3 mb-6">
                    <div className={`w-11 h-11 rounded-xl ${badgeClass} flex items-center justify-center font-bold shadow-md shrink-0 group-hover:scale-105 transition-transform`}>
                      <IconComponent size={22} />
                    </div>
                    <h3 className="text-xl font-extrabold text-[var(--text-primary)] group-hover:text-[var(--accent-purple)] transition-colors">
                      {item.category}
                    </h3>
                  </div>

                  {/* Skill Badges Pills */}
                  <div className="flex flex-wrap gap-2.5 mb-8">
                    {item.skills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold bg-[#151724] border border-purple-500/20 text-purple-100 hover:border-[var(--accent-pink)] hover:text-white transition-all cursor-default shadow-sm"
                      >
                        <CheckCircle2 size={14} className="text-[var(--accent-purple)] shrink-0" />
                        <span>{skill}</span>
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card Footer: X Core Competencies */}
                <div className="pt-4 border-t border-[var(--border-subtle)] flex items-center justify-between">
                  <span className="text-xs font-medium text-[var(--text-muted)]">
                    {item.skills.length} Core Competencies
                  </span>
                  <span className="w-2 h-2 rounded-full bg-[var(--accent-purple)] group-hover:bg-[var(--accent-pink)] transition-colors" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
