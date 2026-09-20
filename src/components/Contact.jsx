import React, { useState } from "react";
import { Mail, Linkedin, Github, Phone, Send, CheckCircle2 } from "lucide-react";
import { personalInfo } from "../data/profile";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [statusMessage, setStatusMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatusMessage("Please fill in all fields before sending.");
      return;
    }

    setIsSubmitting(true);

    const subject = encodeURIComponent(`Portfolio Contact - ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );

    const mailtoUrl = `mailto:${personalInfo.email}?subject=${subject}&body=${body}`;

    window.location.href = mailtoUrl;

    setStatusMessage("Your email client is opening...");

    setTimeout(() => {
      setIsSubmitting(false);
      setFormData({ name: "", email: "", message: "" });
    }, 2000);
  };

  return (
    <section id="contact" className="py-[65px] md:py-[90px] relative bg-[var(--bg-surface)]/30 border-t border-[var(--border-subtle)]">
      <div className="container-custom">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="glow-badge mb-3">
            <Mail size={14} />
            <span>Get In Touch</span>
          </div>
          <h2 className="section-title">
            Contact <span className="text-gradient">Me</span>
          </h2>
          <p className="section-subtitle mb-0">
            Have a project idea, opportunity, or question? Feel free to reach out directly via email, social links, or message.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-[var(--accent-purple)] to-[var(--accent-pink)] rounded-full mt-6" />
        </div>

        {/* 2-Column Desktop Layout / Single-Column Mobile Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* LEFT SIDE: Contact Information Cards (5 cols) */}
          <div className="lg:col-span-5 space-y-[20px]">
            <h3 className="text-xl font-extrabold text-[var(--text-primary)] mb-5">
              Contact Information
            </h3>

            {/* Email Card */}
            <a
              href={`mailto:${personalInfo.email}`}
              className="glass-card p-5 flex items-center gap-4 hover:border-rose-500 transition-all group shadow-sm"
            >
              <div className="w-12 h-12 rounded-xl bg-rose-500/10 border border-rose-500/20 flex items-center justify-center text-rose-500 group-hover:scale-110 group-hover:bg-rose-500 group-hover:text-white transition-all shrink-0">
                <Mail size={22} />
              </div>
              <div>
                <span className="text-[11px] font-bold text-[var(--text-muted)] uppercase tracking-wider block">
                  EMAIL ADDRESS
                </span>
                <span className="text-sm sm:text-base font-bold text-[var(--text-primary)] group-hover:text-rose-400 transition-colors break-all">
                  {personalInfo.email}
                </span>
              </div>
            </a>

            {/* LinkedIn Card */}
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card p-5 flex items-center gap-4 hover:border-[#0A66C2] transition-all group shadow-sm"
            >
              <div className="w-12 h-12 rounded-xl bg-[#0A66C2]/10 border border-[#0A66C2]/20 flex items-center justify-center text-[#0A66C2] group-hover:scale-110 group-hover:bg-[#0A66C2] group-hover:text-white transition-all shrink-0">
                <Linkedin size={22} />
              </div>
              <div>
                <span className="text-[11px] font-bold text-[var(--text-muted)] uppercase tracking-wider block">
                  LINKEDIN PROFILE
                </span>
                <span className="text-sm sm:text-base font-bold text-[var(--text-primary)] group-hover:text-[#0A66C2] transition-colors">
                  linkedin.com/in/sushma-nunna
                </span>
              </div>
            </a>

            {/* GitHub Card */}
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card p-5 flex items-center gap-4 hover:border-[var(--accent-purple)] transition-all group shadow-sm"
            >
              <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-[var(--accent-purple)] group-hover:scale-110 group-hover:bg-[var(--accent-purple)] group-hover:text-white transition-all shrink-0">
                <Github size={22} />
              </div>
              <div>
                <span className="text-[11px] font-bold text-[var(--text-muted)] uppercase tracking-wider block">
                  GITHUB PORTFOLIO
                </span>
                <span className="text-sm sm:text-base font-bold text-[var(--text-primary)] group-hover:text-[var(--accent-purple)] transition-colors">
                  github.com/Nunnasushma
                </span>
              </div>
            </a>

            {/* Phone Card */}
            <a
              href={`tel:${personalInfo.rawPhone}`}
              className="glass-card p-5 flex items-center gap-4 hover:border-emerald-500 transition-all group shadow-sm"
            >
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-500 group-hover:scale-110 group-hover:bg-emerald-500 group-hover:text-white transition-all shrink-0">
                <Phone size={22} />
              </div>
              <div>
                <span className="text-[11px] font-bold text-[var(--text-muted)] uppercase tracking-wider block">
                  PHONE
                </span>
                <span className="text-sm sm:text-base font-bold text-[var(--text-primary)] group-hover:text-emerald-400 transition-colors">
                  {personalInfo.phone}
                </span>
              </div>
            </a>
          </div>

          {/* RIGHT SIDE: Contact Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="glass-card p-8 md:p-10 relative overflow-hidden shadow-xl">
              <h3 className="text-xl md:text-2xl font-extrabold text-[var(--text-primary)] mb-6">
                Send Message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-[24px]">
                <div>
                  <label className="text-xs font-bold uppercase tracking-wider text-[var(--text-muted)] block mb-2">
                    YOUR NAME
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full p-4 rounded-xl bg-[var(--bg-input)] border border-[var(--border-subtle)] text-[var(--text-primary)] focus:border-[var(--accent-purple)] transition-colors shadow-inner"
                  />
                </div>

                <div>
                  <label className="text-xs font-bold uppercase tracking-wider text-[var(--text-muted)] block mb-2">
                    YOUR EMAIL
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="name@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full p-4 rounded-xl bg-[var(--bg-input)] border border-[var(--border-subtle)] text-[var(--text-primary)] focus:border-[var(--accent-purple)] transition-colors shadow-inner"
                  />
                </div>

                <div>
                  <label className="text-xs font-bold uppercase tracking-wider text-[var(--text-muted)] block mb-2">
                    MESSAGE
                  </label>
                  <textarea
                    required
                    rows="5"
                    placeholder="Write your message here..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full p-4 rounded-xl bg-[var(--bg-input)] border border-[var(--border-subtle)] text-[var(--text-primary)] focus:border-[var(--accent-purple)] transition-colors shadow-inner"
                  ></textarea>
                </div>

                {statusMessage && (
                  <div className="p-4 rounded-xl bg-purple-500/10 border border-purple-500/30 text-[var(--accent-purple)] flex items-center gap-2 text-sm font-semibold">
                    <CheckCircle2 size={18} />
                    <span>{statusMessage}</span>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 px-6 rounded-xl bg-gradient-to-r from-[var(--accent-purple)] to-[var(--accent-pink)] text-white font-extrabold text-base flex items-center justify-center gap-2.5 hover:shadow-lg hover:shadow-purple-500/30 transition-all transform hover:-translate-y-0.5 disabled:opacity-50 cursor-pointer"
                >
                  <Send size={18} />
                  <span>{isSubmitting ? "Opening Email Client..." : "Send Message"}</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
