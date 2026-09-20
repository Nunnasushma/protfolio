import React from "react";
import { ArrowUp, Heart, Terminal, Linkedin, Github, Code2, Mail } from "lucide-react";
import { personalInfo } from "../data/profile";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[var(--bg-main)] border-t border-[var(--border-subtle)] py-12 relative">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-[var(--border-subtle)]">
          {/* Logo & Role */}
          <div className="flex items-center gap-3">
            <span className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[var(--accent-purple)] to-[var(--accent-pink)] flex items-center justify-center text-white shadow-md">
              <Terminal size={20} />
            </span>
            <div>
              <h3 className="font-extrabold text-lg text-[var(--text-primary)]">
                Sushma Nunna
              </h3>
              <p className="text-xs text-[var(--text-secondary)]">
                AI/ML Developer | Software Developer | Web Developer
              </p>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="w-9 h-9 rounded-lg bg-[var(--bg-card)] border border-[var(--border-subtle)] flex items-center justify-center text-[var(--text-secondary)] hover:text-[#0A66C2] hover:border-[#0A66C2] transition-colors"
            >
              <Linkedin size={18} />
            </a>

            <a
              href={personalInfo.codechef}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="CodeChef"
              className="w-9 h-9 rounded-lg bg-[var(--bg-card)] border border-[var(--border-subtle)] flex items-center justify-center text-[var(--text-secondary)] hover:text-amber-500 hover:border-amber-500 transition-colors"
            >
              <Code2 size={18} />
            </a>

            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="w-9 h-9 rounded-lg bg-[var(--bg-card)] border border-[var(--border-subtle)] flex items-center justify-center text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-[var(--accent-purple)] transition-colors"
            >
              <Github size={18} />
            </a>

            <a
              href={`mailto:${personalInfo.email}`}
              aria-label="Email"
              className="w-9 h-9 rounded-lg bg-[var(--bg-card)] border border-[var(--border-subtle)] flex items-center justify-center text-[var(--text-secondary)] hover:text-rose-500 hover:border-rose-500 transition-colors"
            >
              <Mail size={18} />
            </a>
          </div>
        </div>

        {/* Bottom Credits & Scroll Top */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[var(--text-muted)]">
          <p>© {new Date().getFullYear()} Sushma Nunna. All rights reserved.</p>

          <button
            onClick={scrollToTop}
            aria-label="Back to top"
            className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[var(--bg-card)] border border-[var(--border-subtle)] text-[var(--text-secondary)] hover:text-[var(--accent-purple)] hover:border-[var(--accent-purple)] transition-all"
          >
            <span>Back to top</span>
            <ArrowUp size={14} />
          </button>
        </div>
      </div>
    </footer>
  );
}
