import React from "react";
import { Download, Eye, FileText, Brain, Code } from "lucide-react";

export default function Resume() {
  return (
    <section id="resume" className="py-20 relative">
      <div className="container-custom">
        <div className="glass-card p-8 md:p-12 relative overflow-hidden bg-gradient-to-r from-purple-900/30 via-[var(--bg-surface)] to-pink-900/30 border border-purple-500/30 text-center flex flex-col items-center">
          {/* Decorative Glow */}
          <div className="absolute -top-24 -left-24 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-pink-500/20 rounded-full blur-3xl pointer-events-none" />

          <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-[var(--accent-purple)] to-[var(--accent-pink)] flex items-center justify-center text-white mb-6 shadow-lg">
            <FileText size={32} />
          </div>

          <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--text-primary)] mb-4">
            Explore My <span className="text-gradient">Resumes</span>
          </h2>

          <p className="text-base md:text-lg text-[var(--text-secondary)] max-w-2xl mb-10 leading-relaxed">
            Select and view or download the exact resume tailored to AI/ML Engineering or Full-Stack Software Development.
          </p>

          {/* TWO RESUME OPTIONS GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl text-left">
            {/* 1. AI/ML Developer Resume Option */}
            <div className="glass-card p-6 md:p-8 border border-purple-500/30 bg-[var(--bg-surface)]/80 flex flex-col justify-between hover:border-purple-400 transition-all group">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-purple-600/20 border border-purple-500/40 flex items-center justify-center text-pink-400 shrink-0">
                    <Brain size={24} />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-purple-400 block">Option 1</span>
                    <h3 className="text-xl font-extrabold text-white group-hover:text-purple-300 transition-colors">
                      AI/ML Developer Resume
                    </h3>
                  </div>
                </div>
                <p className="text-xs sm:text-sm text-[var(--text-secondary)] mb-6 leading-relaxed">
                  Tailored resume showcasing Artificial Intelligence, Machine Learning, NLP, Generative AI internship, and data science competencies.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-3 pt-4 border-t border-[var(--border-subtle)]">
                <a
                  href="/resumes/Sushma_Nunna_AI_ML_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-3 px-4 rounded-xl bg-purple-950/60 border border-purple-500/40 text-purple-200 hover:text-white hover:bg-purple-900 font-bold text-xs flex items-center justify-center gap-2 transition-all"
                >
                  <Eye size={16} />
                  <span>View Resume</span>
                </a>

                <a
                  href="/resumes/Sushma_Nunna_AI_ML_Resume.pdf"
                  download="Sushma_Nunna_AI_ML_Resume.pdf"
                  className="py-3 px-4 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold text-xs flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-purple-500/30 transition-all"
                >
                  <Download size={16} />
                  <span>Download Resume</span>
                </a>
              </div>
            </div>

            {/* 2. Software Developer Resume Option */}
            <div className="glass-card p-6 md:p-8 border border-pink-500/30 bg-[var(--bg-surface)]/80 flex flex-col justify-between hover:border-pink-400 transition-all group">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-pink-600/20 border border-pink-500/40 flex items-center justify-center text-purple-400 shrink-0">
                    <Code size={24} />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-pink-400 block">Option 2</span>
                    <h3 className="text-xl font-extrabold text-white group-hover:text-pink-300 transition-colors">
                      Software Developer Resume
                    </h3>
                  </div>
                </div>
                <p className="text-xs sm:text-sm text-[var(--text-secondary)] mb-6 leading-relaxed">
                  Tailored resume highlighting Full-Stack MERN Web Development, React.js, Node.js, Express.js, MongoDB, and software engineering skills.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-3 pt-4 border-t border-[var(--border-subtle)]">
                <a
                  href="/resumes/Sushma_Nunna_Software_Developer_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-3 px-4 rounded-xl bg-pink-950/60 border border-pink-500/40 text-pink-200 hover:text-white hover:bg-pink-900 font-bold text-xs flex items-center justify-center gap-2 transition-all"
                >
                  <Eye size={16} />
                  <span>View Resume</span>
                </a>

                <a
                  href="/resumes/Sushma_Nunna_Software_Developer_Resume.pdf"
                  download="Sushma_Nunna_Software_Developer_Resume.pdf"
                  className="py-3 px-4 rounded-xl bg-gradient-to-r from-pink-600 to-purple-600 text-white font-bold text-xs flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-pink-500/30 transition-all"
                >
                  <Download size={16} />
                  <span>Download Resume</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
