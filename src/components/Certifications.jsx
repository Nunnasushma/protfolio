import React from "react";
import { Award, FileCheck, Globe, CheckCircle2, ShieldCheck } from "lucide-react";
import { certificationsData } from "../data/profile";

const certIconMap = {
  FileCheck: FileCheck,
  Award: Award,
  Globe: Globe,
};

export default function Certifications() {
  return (
    <section id="certifications" className="py-20 relative bg-[var(--bg-surface)]/40">
      <div className="container-custom">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="glow-badge mb-3">
            <Award size={14} />
            <span>Credentials</span>
          </div>
          <h2 className="section-title">
            Certifications &amp; <span className="text-gradient">Training</span>
          </h2>
          <p className="section-subtitle">
            Formal certifications and specialized training programs completed in Programming, Data Analytics, and Web Technologies.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-[var(--accent-purple)] to-[var(--accent-pink)] rounded-full mb-6" />
        </div>

        {/* Certifications Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {certificationsData.map((cert, idx) => {
            const IconComponent = certIconMap[cert.icon] || Award;
            return (
              <div
                key={idx}
                className="glass-card p-8 flex flex-col justify-between hover:border-[var(--accent-purple)] transition-all group relative overflow-hidden"
              >
                {/* Background Glow */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 rounded-full blur-2xl pointer-events-none group-hover:bg-purple-500/20 transition-all" />

                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-[var(--accent-purple)] group-hover:scale-110 group-hover:bg-gradient-to-tr group-hover:from-purple-600 group-hover:to-pink-600 group-hover:text-white transition-all shadow-md">
                      <IconComponent size={24} />
                    </div>
                    <span className="px-3 py-1 rounded-full text-xs font-bold bg-purple-500/10 text-purple-400 border border-purple-500/20">
                      {cert.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-extrabold text-[var(--text-primary)] mb-2 group-hover:text-[var(--accent-purple)] transition-colors">
                    {cert.title}
                  </h3>

                  <p className="text-sm font-semibold text-[var(--text-secondary)] mb-4 flex items-center gap-1.5">
                    <ShieldCheck size={16} className="text-[var(--accent-pink)]" />
                    {cert.issuer}
                  </p>
                </div>

                <div className="pt-4 border-t border-[var(--border-subtle)] flex items-center gap-1.5 text-xs text-emerald-400 font-bold">
                  <CheckCircle2 size={14} />
                  <span>Verified Credential</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
