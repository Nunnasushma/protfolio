import React from "react";
import { Languages as LanguagesIcon, CheckCircle2 } from "lucide-react";
import { languagesData } from "../data/profile";

export default function Languages() {
  return (
    <section id="languages" className="py-16 relative">
      <div className="container-custom">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-10">
          <div className="glow-badge mb-3">
            <LanguagesIcon size={14} />
            <span>Communication</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold">
            Language <span className="text-gradient">Proficiency</span>
          </h2>
        </div>

        {/* Language Cards */}
        <div className="max-w-2xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6">
          {languagesData.map((lang, idx) => (
            <div
              key={idx}
              className="glass-card p-6 flex items-center justify-between hover:border-[var(--accent-purple)] transition-all"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-[var(--accent-purple)] font-bold text-lg">
                  {lang.name.substring(0, 2).toUpperCase()}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[var(--text-primary)]">
                    {lang.name}
                  </h3>
                  <p className="text-xs text-[var(--text-muted)] font-medium">
                    {lang.level}
                  </p>
                </div>
              </div>

              <span className="px-3 py-1 rounded-full text-xs font-extrabold bg-gradient-to-r from-[var(--accent-purple)] to-[var(--accent-pink)] text-white shadow-sm">
                {lang.proficiency}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
