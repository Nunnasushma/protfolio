import React from "react";
import { GraduationCap, Award, Briefcase, Code2, MapPin, Sparkles } from "lucide-react";
import { personalInfo } from "../data/profile";

const iconMap = {
  GraduationCap: GraduationCap,
  Award: Award,
  Briefcase: Briefcase,
  Code2: Code2,
  MapPin: MapPin,
};

export default function About() {
  return (
    <section id="about" className="py-20 relative bg-[var(--bg-surface)]/50">
      <div className="container-custom">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="glow-badge mb-3">
            <Sparkles size={14} />
            <span>Background &amp; Profile</span>
          </div>
          <h2 className="section-title">
            About <span className="text-gradient">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[var(--accent-purple)] to-[var(--accent-pink)] rounded-full mb-6" />
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Main Description */}
          <div className="lg:col-span-12">
            <div className="glass-card p-8 md:p-10 mb-10 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 rounded-full blur-2xl pointer-events-none" />
              <p className="text-lg md:text-xl text-[var(--text-secondary)] leading-relaxed">
                {personalInfo.aboutDescription}
              </p>
            </div>
          </div>

          {/* Info Cards Grid */}
          <div className="lg:col-span-12">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
              {personalInfo.infoCards.map((card, idx) => {
                const IconComponent = iconMap[card.icon] || Sparkles;
                return (
                  <div
                    key={idx}
                    className="glass-card p-6 flex flex-col items-start gap-4 hover:border-[var(--accent-purple)] transition-all group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-[var(--accent-purple)] group-hover:scale-110 group-hover:bg-gradient-to-tr group-hover:from-purple-600 group-hover:to-pink-600 group-hover:text-white transition-all shadow-md">
                      <IconComponent size={24} />
                    </div>
                    <div>
                      <h4 className="text-xs font-semibold text-[var(--text-muted)] uppercase tracking-wider mb-1">
                        {card.title}
                      </h4>
                      <p className="text-base font-bold text-[var(--text-primary)] group-hover:text-[var(--accent-purple)] transition-colors">
                        {card.value}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
