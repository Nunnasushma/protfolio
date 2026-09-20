import React, { useState, useEffect } from "react";
import { Sun, Moon, Menu, X, Terminal } from "lucide-react";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Education", href: "#education" },
  { name: "Resume", href: "#resume" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar({ theme, toggleTheme }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = navLinks.map((link) => link.href.substring(1));
      const scrollPosition = window.scrollY + 120;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[var(--nav-bg)] backdrop-blur-md py-3.5 shadow-xl border-b border-[var(--border-subtle)]"
          : "bg-[var(--bg-main)]/90 backdrop-blur-sm py-4 border-b border-[var(--border-subtle)]"
      }`}
    >
      <div className="container-custom flex items-center justify-between">
        {/* Brand Logo */}
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, "#home")}
          className="flex items-center gap-2.5 font-extrabold text-xl tracking-tight text-[var(--text-primary)] hover:opacity-90 transition-opacity"
        >
          <span className="w-8 h-8 rounded-lg bg-gradient-to-tr from-[var(--accent-purple)] to-[var(--accent-pink)] flex items-center justify-center text-white shadow-md">
            <Terminal size={18} />
          </span>
          <span className="font-bold text-lg md:text-xl">
            Sushma <span className="text-gradient">Nunna</span>
          </span>
        </a>

        {/* Desktop Navigation Links - Exact 7 Items with Purple Underline */}
        <nav className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`text-sm font-semibold transition-all relative py-1.5 ${
                  isActive
                    ? "text-[var(--accent-purple)]"
                    : "text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
                }`}
              >
                {link.name}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[var(--accent-purple)] rounded-full shadow-[0_0_8px_rgba(139,92,246,0.8)]" />
                )}
              </a>
            );
          })}
        </nav>

        {/* Right Side Tools */}
        <div className="flex items-center gap-3">
          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            aria-label="Toggle Theme"
            className="p-2 rounded-full bg-[var(--bg-card)] border border-[var(--border-subtle)] text-[var(--text-primary)] hover:border-[var(--accent-purple)] hover:text-[var(--accent-purple)] transition-all shadow-sm"
          >
            {theme === "dark" ? <Sun size={18} className="text-amber-400" /> : <Moon size={18} className="text-purple-600" />}
          </button>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Mobile Menu"
            className="md:hidden p-2 rounded-lg bg-[var(--bg-card)] border border-[var(--border-subtle)] text-[var(--text-primary)] hover:border-[var(--accent-purple)] transition-all"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-x-0 top-[61px] bg-[var(--bg-surface)] border-b border-[var(--border-subtle)] shadow-2xl backdrop-blur-xl p-5 transition-all duration-300">
          <nav className="flex flex-col gap-3">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`text-sm py-2.5 px-3 rounded-lg font-semibold transition-colors flex items-center justify-between ${
                    isActive
                      ? "bg-purple-900/25 text-[var(--accent-purple)] border-l-4 border-[var(--accent-purple)]"
                      : "text-[var(--text-secondary)] hover:bg-[var(--bg-card)] hover:text-[var(--text-primary)]"
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>
        </div>
      )}
    </header>
  );
}
