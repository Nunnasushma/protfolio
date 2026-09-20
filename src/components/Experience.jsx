import React from "react";
import { Briefcase, Calendar, Trophy, CheckCircle, Sparkles, Building2 } from "lucide-react";
import { experienceData } from "../data/profile";

export default function Experience() {
  return (
    <section id="experience" className="py-20 relative bg-[var(--bg-surface)]/40">
      <div className="container-custom">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="glow-badge mb-3">
            <Briefcase size={14} />
            <span>Work History</span>
          </div>
          <h2 className="section-title">
            Industry <span className="text-gradient">Experience</span>
          </h2>
          <p className="section-subtitle">
            Hands-on professional internship experience and specialized web technology training.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-[var(--accent-purple)] to-[var(--accent-pink)] rounded-full mb-6" />
        </div>

        {/* Side-by-Side 2-Column Experience Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {experienceData.map((exp, idx) => (
            <div
              key={idx}
              className="glass-card p-7 md:p-8 flex flex-col justify-between relative overflow-hidden border-t-4 border-t-[var(--accent-purple)] hover:border-[var(--accent-pink)] transition-all group"
            >
              {/* Background Glow */}
              <div className="absolute top-0 right-0 w-48 h-48 bg-purple-600/10 rounded-full blur-3xl pointer-events-none group-hover:bg-purple-600/20 transition-all" />

              <div>
                {/* Card Top Banner */}
                <div className="flex items-start justify-between gap-4 mb-6 pb-4 border-b border-[var(--border-subtle)]">
                  <div className="flex items-center gap-3">
                    <span className="w-11 h-11 rounded-xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-[var(--accent-purple)] group-hover:bg-[var(--accent-purple)] group-hover:text-white transition-all shadow-md shrink-0">
                      <Building2 size={22} />
                    </span>
                    <div>
                      <h3 className="text-xl font-extrabold text-[var(--text-primary)] group-hover:text-[var(--accent-purple)] transition-colors">
                        {exp.company}
                      </h3>
                      <p className="text-sm font-bold text-gradient">
                        {exp.role}
                      </p>
                    </div>
                  </div>

                  <span className="inline-flex items-center gap-1.5 text-xs font-bold px-3 py-1 rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/30 shrink-0">
                    <Trophy size={13} />
                    {exp.badge}
                  </span>
                </div>

                {/* Duration Pill */}
                <div className="mb-6">
                  <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-lg bg-[var(--bg-input)] border border-[var(--border-subtle)] text-[var(--text-secondary)]">
                    <Calendar size={13} className="text-[var(--accent-purple)]" />
                    {exp.duration}
                  </span>
                </div>

                {/* Highlights Bullet List */}
                <ul className="space-y-3.5 mb-8">
                  {exp.highlights.map((point, pIdx) => (
                    <li key={pIdx} className="flex items-start gap-2.5">
                      <span className="w-5 h-5 rounded-full bg-purple-500/15 border border-purple-500/30 flex items-center justify-center text-[var(--accent-purple)] shrink-0 mt-0.5">
                        <CheckCircle size={12} />
                      </span>
                      <span className="text-xs md:text-sm text-[var(--text-secondary)] leading-relaxed">
                        {point}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technologies Badges Footer */}
              <div className="pt-4 border-t border-[var(--border-subtle)]">
                <span className="text-[11px] font-bold uppercase tracking-wider text-[var(--text-muted)] block mb-2.5">
                  Technologies Applied:
                </span>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2.5 py-1 rounded-lg text-xs font-semibold bg-[var(--bg-input)] border border-[var(--border-subtle)] text-[var(--text-primary)] flex items-center gap-1 hover:border-[var(--accent-purple)] transition-colors"
                    >
                      <Sparkles size={11} className="text-[var(--accent-pink)]" />
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
