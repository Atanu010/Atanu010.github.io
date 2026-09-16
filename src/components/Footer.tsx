import React from 'react';
import { ArrowUp, Heart, Mail, Phone, MapPin } from 'lucide-react';
import { PERSONAL_INFO } from '../data/initialData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#141210] text-[#FAF8F5] py-16">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          
          {/* Brand Column */}
          <div className="md:col-span-6 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-[#C85A32] text-white flex items-center justify-center font-serif text-lg font-bold">
                A
              </div>
              <span className="font-bold text-lg tracking-tight text-white">{PERSONAL_INFO.name}</span>
            </div>
            
            <p className="font-serif italic text-base text-white/70 max-w-md">
              "Events. Ideas. Experiences. Stories."
            </p>

            <p className="text-xs text-white/50 max-w-md leading-relaxed">
              Multidisciplinary professional specializing in high-stakes event operations, digital marketing campaigns, intuitive UI/UX design, and strategic content writing.
            </p>
          </div>

          {/* Quick Links Column */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-white font-bold">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs text-white/70">
              <li><a href="#about" className="hover:text-[#C85A32] transition-colors">About &amp; Philosophy</a></li>
              <li><a href="#events" className="hover:text-[#C85A32] transition-colors">Events &amp; Operations</a></li>
              <li><a href="#marketing" className="hover:text-[#C85A32] transition-colors">Digital Marketing</a></li>
              <li><a href="#uiux" className="hover:text-[#C85A32] transition-colors">UI/UX Thinking</a></li>
              <li><a href="#writing" className="hover:text-[#C85A32] transition-colors">Content Writing Archive</a></li>
              <li><a href="#projects" className="hover:text-[#C85A32] transition-colors">Selected Work</a></li>
              <li><a href="#resume" className="hover:text-[#C85A32] transition-colors">Curriculum Vitae</a></li>
            </ul>
          </div>

          {/* Contact Direct Column */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-white font-bold">
              Direct Channels
            </h4>
            <div className="space-y-2 text-xs text-white/70">
              <p className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#C85A32]" />
                <a href={`mailto:${PERSONAL_INFO.email}`} className="hover:underline">{PERSONAL_INFO.email}</a>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#C85A32]" />
                <span>{PERSONAL_INFO.phone}</span>
              </p>
              <p className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#C85A32]" />
                <span>{PERSONAL_INFO.location}</span>
              </p>
            </div>

            <div className="pt-3">
              <button
                onClick={scrollToTop}
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 hover:bg-white/20 text-xs text-white transition-colors"
              >
                <span>Back to Top</span>
                <ArrowUp className="w-3 h-3 text-[#C85A32]" />
              </button>
            </div>
          </div>

        </div>

        {/* Copyright & Subfooter */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/40">
          <p>© {new Date().getFullYear()} {PERSONAL_INFO.name}. All rights reserved.</p>
          <p>Balurghat · Kolkata · Open to Opportunities</p>
        </div>

      </div>
    </footer>
  );
};
