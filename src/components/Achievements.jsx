import React from "react";
import { Trophy, Code, Zap, GraduationCap, TrendingUp, Sparkles } from "lucide-react";
import { achievementsData } from "../data/profile";

const iconMap = {
  Code: Code,
  Zap: Zap,
  GraduationCap: GraduationCap,
  TrendingUp: TrendingUp,
  Trophy: Trophy,
};

export default function Achievements() {
  return (
    <section id="achievements" className="py-20 relative">
      <div className="container-custom">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="glow-badge mb-3">
            <Trophy size={14} />
            <span>Milestones</span>
          </div>
          <h2 className="section-title">
            Key <span className="text-gradient">Achievements</span>
          </h2>
          <p className="section-subtitle">
            Notable algorithmic problem-solving records, academic excellence, and competitive recognitions.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-[var(--accent-purple)] to-[var(--accent-pink)] rounded-full mb-6" />
        </div>

        {/* Achievements Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {achievementsData.map((item, idx) => {
            const IconComponent = iconMap[item.icon] || Trophy;
            return (
              <div
                key={idx}
                className="glass-card p-6 flex flex-col justify-between items-center text-center hover:border-[var(--accent-purple)] transition-all group"
              >
                <div className="w-14 h-14 rounded-2xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-[var(--accent-purple)] mb-4 group-hover:scale-110 group-hover:bg-gradient-to-tr group-hover:from-purple-600 group-hover:to-pink-600 group-hover:text-white transition-all shadow-md">
                  <IconComponent size={28} />
                </div>

                <div>
                  <h3 className="text-3xl font-extrabold text-gradient mb-1">
                    {item.value}
                  </h3>
                  <p className="text-sm font-bold text-[var(--text-primary)] mb-1">
                    {item.label}
                  </p>
                  <p className="text-xs text-[var(--text-muted)] font-medium">
                    {item.detail}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
