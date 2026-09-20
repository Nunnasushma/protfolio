import React from "react";
import { GraduationCap, Calendar, MapPin, Award } from "lucide-react";
import { educationData } from "../data/profile";

export default function Education() {
  return (
    <section id="education" className="py-20 relative bg-[var(--bg-surface)]/40">
      <div className="container-custom">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="glow-badge mb-3">
            <GraduationCap size={14} />
            <span>Academic Background</span>
          </div>
          <h2 className="section-title">
            Education <span className="text-gradient">Timeline</span>
          </h2>
          <p className="section-subtitle">
            Formal computer science education and academic achievements.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-[var(--accent-purple)] to-[var(--accent-pink)] rounded-full mb-6" />
        </div>

        {/* Centered Education Card Display */}
        <div className="max-w-2xl mx-auto">
          {educationData.map((item, idx) => (
            <div
              key={idx}
              className="glass-card p-8 md:p-10 flex flex-col justify-between hover:border-[var(--accent-purple)] transition-all group relative overflow-hidden shadow-xl"
            >
              {/* Background Glow */}
              <div className="absolute top-0 right-0 w-48 h-48 bg-purple-500/10 rounded-full blur-3xl pointer-events-none group-hover:bg-purple-500/20 transition-all" />

              <div>
                <div className="flex items-center justify-between gap-2 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-[var(--accent-purple)] group-hover:bg-[var(--accent-purple)] group-hover:text-white transition-all shadow-md shrink-0">
                    <GraduationCap size={24} />
                  </div>
                  {item.current && (
                    <span className="px-3.5 py-1.5 rounded-full text-xs font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                      Pursuing
                    </span>
                  )}
                </div>

                <h3 className="text-2xl font-extrabold text-[var(--text-primary)] group-hover:text-[var(--accent-purple)] transition-colors mb-2 leading-snug">
                  {item.degree}
                </h3>

                <p className="text-base font-semibold text-[var(--text-secondary)] mb-6">
                  {item.institution}
                </p>

                <div className="flex items-center gap-6 text-xs sm:text-sm text-[var(--text-muted)] font-medium mb-6 flex-wrap">
                  <div className="flex items-center gap-1.5">
                    <MapPin size={16} className="text-[var(--accent-pink)] shrink-0" />
                    <span>{item.location}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Calendar size={16} className="text-[var(--accent-purple)] shrink-0" />
                    <span>{item.duration}</span>
                  </div>
                </div>
              </div>

              {/* Bottom Score Badge */}
              <div className="pt-5 border-t border-[var(--border-subtle)] flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-[var(--text-muted)]">
                  GRADE / SCORE:
                </span>
                <span className="px-4 py-2 rounded-xl bg-purple-500/10 border border-purple-500/30 text-[var(--accent-purple)] font-extrabold text-base">
                  {item.score}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
