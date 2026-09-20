import React, { useState } from "react";
import { Linkedin, Github, Mail, Phone, Download, ArrowRight, Sparkles, Brain, Code, Cpu, MessageSquare } from "lucide-react";
import { personalInfo } from "../data/profile";

export default function Hero() {
  const [imageError, setImageError] = useState(false);

  return (
    <section id="home" className="min-h-screen pt-28 pb-16 flex items-center relative overflow-hidden">
      {/* Background Futuristic Glow Orbs */}
      <div className="absolute top-1/4 left-10 w-72 h-72 bg-purple-600/15 rounded-full blur-3xl pointer-events-none animate-glow" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-pink-600/15 rounded-full blur-3xl pointer-events-none animate-glow" style={{ animationDelay: "2s" }} />

      <div className="container-custom relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column - Intro Text */}
        <div className="lg:col-span-7 flex flex-col items-start">
          {/* Welcome Badge */}
          <div className="glow-badge mb-6 animate-float">
            <Sparkles size={16} className="text-[var(--accent-purple)]" />
            <span>AI/ML &amp; Full-Stack Software Developer</span>
          </div>

          <h3 className="text-sm md:text-base font-semibold tracking-widest text-[var(--text-secondary)] uppercase mb-2">
            HELLO, I'M
          </h3>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-4">
            <span className="text-[var(--text-primary)]">{personalInfo.name}</span>
          </h1>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
            <span className="text-gradient">{personalInfo.primaryTitle}</span>
          </h2>

          <p className="text-lg md:text-xl font-medium text-[var(--accent-pink)] mb-6 flex items-center gap-2 flex-wrap">
            <span>Software Developer</span>
            <span className="text-[var(--text-muted)]">•</span>
            <span>Web Developer</span>
            <span className="text-[var(--text-muted)]">•</span>
            <span>AI/ML Enthusiast</span>
          </p>

          <p className="text-base md:text-lg text-[var(--text-secondary)] leading-relaxed mb-8 max-w-2xl">
            {personalInfo.heroIntro}
          </p>

          {/* Three Action Buttons */}
          <div className="flex flex-wrap items-center gap-4 mb-10 w-full sm:w-auto">
            <a
              href="#projects"
              className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-bold text-sm flex items-center gap-2 hover:shadow-lg hover:shadow-purple-500/30 transition-all transform hover:-translate-y-0.5"
            >
              <span>View My Projects</span>
              <ArrowRight size={18} />
            </a>

            {/* AI/ML Resume Button */}
            <a
              href="/resumes/Sushma_Nunna_AI_ML_Resume.pdf"
              download="Sushma_Nunna_AI_ML_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3.5 rounded-xl bg-purple-950/60 border border-purple-500/40 text-purple-200 hover:text-white hover:bg-purple-900/80 hover:border-purple-400 font-bold text-sm flex items-center gap-2 transition-all transform hover:-translate-y-0.5 shadow-sm"
            >
              <Brain size={18} className="text-pink-400" />
              <span>AI/ML Resume</span>
              <Download size={16} />
            </a>

            {/* MERN Resume Button */}
            <a
              href="/resumes/Sushma_Nunna_Software_Developer_Resume.pdf"
              download="Sushma_Nunna_Software_Developer_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3.5 rounded-xl bg-pink-950/50 border border-pink-500/40 text-pink-200 hover:text-white hover:bg-pink-900/70 hover:border-pink-400 font-bold text-sm flex items-center gap-2 transition-all transform hover:-translate-y-0.5 shadow-sm"
            >
              <Code size={18} className="text-purple-400" />
              <span>MERN Resume</span>
              <Download size={16} />
            </a>
          </div>

          {/* Social Links & Phone / Connect Bar */}
          <div className="flex items-center gap-4 pt-4 border-t border-[var(--border-subtle)] w-full max-w-lg flex-wrap">
            <span className="text-xs font-semibold text-[var(--text-muted)] uppercase tracking-widest">
              CONNECT:
            </span>
            <div className="flex items-center gap-3">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="w-10 h-10 rounded-xl bg-[var(--bg-card)] border border-[var(--border-subtle)] flex items-center justify-center text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-[var(--accent-purple)] hover:bg-purple-500/10 transition-colors"
              >
                <Github size={20} />
              </a>

              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-10 h-10 rounded-xl bg-[var(--bg-card)] border border-[var(--border-subtle)] flex items-center justify-center text-[var(--text-secondary)] hover:text-[#0A66C2] hover:border-[#0A66C2] hover:bg-[#0A66C2]/10 transition-colors"
              >
                <Linkedin size={20} />
              </a>

              <a
                href={`mailto:${personalInfo.email}`}
                aria-label="Email"
                className="w-10 h-10 rounded-xl bg-[var(--bg-card)] border border-[var(--border-subtle)] flex items-center justify-center text-[var(--text-secondary)] hover:text-rose-500 hover:border-rose-500 hover:bg-rose-500/10 transition-colors"
              >
                <Mail size={20} />
              </a>

              <a
                href={`tel:${personalInfo.rawPhone}`}
                title={`Call: ${personalInfo.phone}`}
                aria-label="Phone"
                className="w-10 h-10 rounded-xl bg-[var(--bg-card)] border border-[var(--border-subtle)] flex items-center justify-center text-emerald-400 hover:text-emerald-300 hover:border-emerald-500 hover:bg-emerald-500/10 transition-colors"
              >
                <Phone size={20} />
              </a>

              <a
                href={personalInfo.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                title="WhatsApp Chat"
                aria-label="WhatsApp"
                className="w-10 h-10 rounded-xl bg-[var(--bg-card)] border border-[var(--border-subtle)] flex items-center justify-center text-emerald-500 hover:text-emerald-400 hover:border-emerald-400 hover:bg-emerald-500/10 transition-colors"
              >
                <MessageSquare size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Right Column - Profile Image / Visual Avatar */}
        <div className="lg:col-span-5 flex justify-center items-center relative">
          <div className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96">
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-[var(--accent-purple)] via-[var(--accent-pink)] to-[var(--accent-cyan)] opacity-30 blur-xl animate-glow" />

            <div className="relative w-full h-full rounded-2xl overflow-hidden bg-[var(--bg-card)] border-2 border-[var(--border-subtle)] shadow-2xl flex items-center justify-center p-2">
              {!imageError ? (
                <img
                  src="/profile.jpg"
                  alt="Sushma Nunna"
                  onError={() => setImageError(true)}
                  className="w-full h-full object-cover rounded-xl"
                />
              ) : (
                <div className="w-full h-full rounded-xl bg-gradient-to-br from-[#1E1B4B] via-[#0F172A] to-[#311042] flex flex-col items-center justify-center p-6 text-center relative overflow-hidden">
                  <Brain size={40} className="absolute top-6 left-6 text-purple-500/20" />
                  <Cpu size={40} className="absolute bottom-6 right-6 text-pink-500/20" />
                  <Code size={40} className="absolute top-1/2 right-4 text-cyan-500/15" />

                  <div className="w-28 h-28 rounded-full bg-gradient-to-tr from-purple-600 to-pink-600 flex items-center justify-center text-white font-extrabold text-4xl shadow-xl mb-4 border-2 border-white/20">
                    SN
                  </div>
                  <h4 className="text-xl font-bold text-white mb-1">Sushma Nunna</h4>
                  <p className="text-xs text-purple-300 font-medium">AI/ML &amp; Software Developer</p>
                  <p className="text-[11px] text-emerald-400 font-bold mt-2">📞 +91-8019156761</p>
                  <div className="mt-3 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/30 text-[11px] text-purple-200">
                    Tadepalligudem, AP, India
                  </div>
                </div>
              )}
            </div>

            <div className="absolute -bottom-5 -left-5 bg-[var(--bg-surface)] border border-[var(--border-subtle)] px-4 py-2.5 rounded-xl shadow-xl flex items-center gap-3 backdrop-blur-md">
              <div className="w-3 h-3 rounded-full bg-emerald-500 animate-ping" />
              <div>
                <p className="text-xs text-[var(--text-muted)] font-medium">Status</p>
                <p className="text-xs font-bold text-[var(--text-primary)]">Open to Opportunities</p>
              </div>
            </div>

            <div className="absolute -top-4 -right-4 bg-[var(--bg-surface)] border border-[var(--border-subtle)] px-4 py-2 rounded-xl shadow-xl flex items-center gap-2 backdrop-blur-md">
              <Sparkles size={16} className="text-amber-400" />
              <span className="text-xs font-bold text-[var(--text-primary)]">8.3 CGPA</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
