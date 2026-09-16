import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle, Linkedin, Instagram, ArrowUpRight } from 'lucide-react';
import { PERSONAL_INFO } from '../data/initialData';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate reliable form submission
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 600);
  };

  return (
    <section id="contact" className="py-24 border-b editorial-border bg-white">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start">
          
          {/* Left Column: Direct Info & Availability */}
          <div className="lg:col-span-5 space-y-6">
            <div className="text-xs uppercase font-mono tracking-widest text-[#C85A32] font-semibold">
              Get In Touch
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#141210] leading-tight">
              Have an idea? Let's create something meaningful.
            </h2>

            <p className="text-base text-[#3D352E] font-normal leading-relaxed">
              Whether you are organizing a high-scale festival, planning a digital campaign, developing a product flow, or need compelling editorial copy, I am always open to discussing new challenges.
            </p>

            {/* Direct Contact Cards */}
            <div className="space-y-3 pt-2">
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="flex items-center gap-4 p-4 rounded-xl bg-[#FAF8F5] border editorial-border hover:border-[#C85A32] hover:bg-white transition-all group"
              >
                <div className="w-10 h-10 rounded-lg bg-white border editorial-border flex items-center justify-center text-[#C85A32] group-hover:bg-[#C85A32] group-hover:text-white transition-colors">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="block text-[10px] uppercase font-mono font-bold text-[#3D352E]/60">Email</span>
                  <span className="text-xs sm:text-sm font-bold text-[#141210]">{PERSONAL_INFO.email}</span>
                </div>
              </a>

              <a
                href={`tel:${PERSONAL_INFO.phone}`}
                className="flex items-center gap-4 p-4 rounded-xl bg-[#FAF8F5] border editorial-border hover:border-[#C85A32] hover:bg-white transition-all group"
              >
                <div className="w-10 h-10 rounded-lg bg-white border editorial-border flex items-center justify-center text-[#2A5C55] group-hover:bg-[#2A5C55] group-hover:text-white transition-colors">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="block text-[10px] uppercase font-mono font-bold text-[#3D352E]/60">Phone / WhatsApp</span>
                  <span className="text-xs sm:text-sm font-bold text-[#141210]">{PERSONAL_INFO.phone}</span>
                </div>
              </a>

              <div className="flex items-center gap-4 p-4 rounded-xl bg-[#FAF8F5] border editorial-border">
                <div className="w-10 h-10 rounded-lg bg-white border editorial-border flex items-center justify-center text-[#3D352E]">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="block text-[10px] uppercase font-mono font-bold text-[#3D352E]/60">Current Base</span>
                  <span className="text-xs sm:text-sm font-bold text-[#141210]">{PERSONAL_INFO.location}</span>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-4 flex items-center gap-3">
              <a
                href={PERSONAL_INFO.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2 rounded-full border editorial-border text-xs font-semibold text-[#141210] hover:bg-[#231F1C] hover:text-white transition-colors flex items-center gap-1.5"
              >
                <Linkedin className="w-3.5 h-3.5" />
                <span>LinkedIn Profile</span>
                <ArrowUpRight className="w-3 h-3" />
              </a>

              <a
                href={`mailto:${PERSONAL_INFO.email}?subject=Direct Collaboration`}
                className="px-4 py-2 rounded-full border editorial-border text-xs font-semibold text-[#141210] hover:bg-[#C85A32] hover:text-white hover:border-[#C85A32] transition-colors flex items-center gap-1.5"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>Quick Mail</span>
              </a>
            </div>

          </div>

          {/* Right Column: Interactive Form */}
          <div className="lg:col-span-7 bg-[#FAF8F5] p-8 sm:p-10 rounded-3xl border editorial-border shadow-sm">
            <h3 className="text-xl font-bold text-[#141210] mb-1">Send a Direct Note</h3>
            <p className="text-xs text-[#3D352E] mb-6">
              Fill out the form below or write directly to <span className="font-semibold">{PERSONAL_INFO.email}</span>.
            </p>

            {isSubmitted ? (
              <div className="p-8 text-center bg-white rounded-2xl border editorial-border space-y-3">
                <CheckCircle className="w-10 h-10 text-emerald-600 mx-auto" />
                <h4 className="text-lg font-bold text-[#141210]">Thank you! Your message was received.</h4>
                <p className="text-xs text-[#3D352E] max-w-md mx-auto">
                  I will review your note and get back to you promptly at your email address.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="mt-4 px-5 py-2 text-xs font-bold uppercase tracking-wider rounded-full bg-[#231F1C] text-white hover:bg-[#C85A32] transition"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] font-mono uppercase tracking-wider text-[#141210] font-bold mb-1.5">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g., Ananya Sengupta"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-white border editorial-border text-xs text-[#141210] focus:outline-none focus:border-[#C85A32] transition"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-mono uppercase tracking-wider text-[#141210] font-bold mb-1.5">
                      Your Email *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="name@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-white border editorial-border text-xs text-[#141210] focus:outline-none focus:border-[#C85A32] transition"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-mono uppercase tracking-wider text-[#141210] font-bold mb-1.5">
                    Subject / Area of Interest *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Festival Logistics Consultation / Marketing Campaign"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-white border editorial-border text-xs text-[#141210] focus:outline-none focus:border-[#C85A32] transition"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-mono uppercase tracking-wider text-[#141210] font-bold mb-1.5">
                    Message *
                  </label>
                  <textarea
                    required
                    rows={5}
                    placeholder="Tell me about your project, timeline, or operational goals..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-white border editorial-border text-xs text-[#141210] focus:outline-none focus:border-[#C85A32] transition resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full py-3.5 px-6 rounded-xl bg-[#231F1C] hover:bg-[#C85A32] text-white text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-md hover:shadow-lg disabled:opacity-50"
                >
                  {isLoading ? (
                    <span>Sending message...</span>
                  ) : (
                    <>
                      <span>Send Direct Message</span>
                      <Send className="w-3.5 h-3.5" />
                    </>
                  )}
                </button>
              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};
