import React from 'react';
import { Layout, Smartphone, Workflow, Sliders, ExternalLink, ArrowRight, Eye } from 'lucide-react';
import { UIUX_PROJECTS } from '../data/initialData';
import { UiUxProject } from '../types';

interface UiUxSectionProps {
  onOpenCaseStudy: (project: UiUxProject) => void;
}

export const UiUxSection: React.FC<UiUxSectionProps> = ({ onOpenCaseStudy }) => {
  const designPrinciples = [
    { title: 'User Flows & IA', desc: 'Mapping clear pathways that reduce cognitive load before touching visual pixels.' },
    { title: 'Low-Fi Wireframing', desc: 'Iterating on spatial hierarchy and touch boundaries without aesthetic bias.' },
    { title: 'Visual Systems', desc: 'Crafting accessible typography, WCAG-compliant contrast, and disciplined spacing.' },
    { title: 'Usability in Context', desc: 'Stress-testing interfaces for the actual physical environment they operate in.' },
  ];

  const featured = UIUX_PROJECTS[0];

  return (
    <section id="uiux" className="py-24 border-b editorial-border bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="text-xs uppercase font-mono tracking-widest text-[#C85A32] font-semibold">
            Core Discipline 03
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#141210]">
            UI/UX Design &amp; Product Thinking
          </h2>
          <p className="text-base sm:text-lg text-[#3D352E] font-normal leading-relaxed">
            Designing digital tools grounded in real-world friction. Clean typography, high-contrast usability, and intuitive information architecture.
          </p>
        </div>

        {/* Methodology Banner */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-14">
          {designPrinciples.map((p, i) => (
            <div key={p.title} className="p-5 rounded-xl bg-white border editorial-border shadow-xs">
              <span className="text-[10px] font-mono font-bold text-[#C85A32] block mb-1">
                STEP 0{i + 1}
              </span>
              <h4 className="text-sm font-bold text-[#141210] mb-1.5">{p.title}</h4>
              <p className="text-xs text-[#3D352E] leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>

        {/* Featured Case Study Presentation */}
        {featured && (
          <div className="bg-white rounded-3xl border editorial-border overflow-hidden shadow-sm">
            <div className="grid grid-cols-1 lg:grid-cols-12">
              
              {/* Left Side: Mockup Image / Preview Frame */}
              <div className="lg:col-span-5 bg-[#231F1C] relative min-h-[320px] lg:min-h-full flex items-center justify-center p-8 overflow-hidden group">
                <img
                  src={featured.coverImage}
                  alt={featured.title}
                  className="w-full h-full object-cover rounded-xl opacity-80 group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#141210] via-black/40 to-transparent pointer-events-none" />

                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <span className="inline-block px-2.5 py-0.5 rounded-full text-[10px] font-mono tracking-wider font-bold bg-[#C85A32] uppercase mb-2">
                    Case Study
                  </span>
                  <h4 className="text-xl font-bold text-white mb-1">{featured.title}</h4>
                  <p className="text-xs text-white/80 font-medium">{featured.platform}</p>
                </div>
              </div>

              {/* Right Side: Case Breakdown Content */}
              <div className="lg:col-span-7 p-6 sm:p-10 flex flex-col justify-between space-y-6">
                
                <div>
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                    <span className="text-xs font-mono uppercase tracking-wider text-[#C85A32] font-bold">
                      {featured.category}
                    </span>
                    <span className="text-xs text-[#3D352E]/70">Field Research &amp; Prototyping</span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-bold text-[#141210] mb-4">
                    {featured.title}
                  </h3>

                  <div className="space-y-4 text-xs text-[#3D352E]">
                    <div className="p-3.5 bg-[#FAF8F5] rounded-xl border editorial-border">
                      <strong className="block text-[11px] uppercase tracking-wider text-[#141210] font-bold mb-1">
                        The Core Friction (Problem):
                      </strong>
                      <p className="leading-relaxed">{featured.problem}</p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div className="p-3 rounded-lg border editorial-border">
                        <strong className="block text-[10px] uppercase tracking-wider text-[#141210] font-bold mb-0.5">
                          Target Persona:
                        </strong>
                        <p className="leading-relaxed text-[11px]">{featured.user}</p>
                      </div>

                      <div className="p-3 rounded-lg border editorial-border">
                        <strong className="block text-[10px] uppercase tracking-wider text-[#141210] font-bold mb-0.5">
                          Design System Decisions:
                        </strong>
                        <p className="leading-relaxed text-[11px]">{featured.designDecisions}</p>
                      </div>
                    </div>

                    <div>
                      <strong className="block text-[11px] uppercase tracking-wider text-[#141210] font-bold mb-1">
                        User Journey &amp; Navigation Architecture:
                      </strong>
                      <p className="leading-relaxed">{featured.userFlow}</p>
                    </div>

                    <div className="p-3 bg-[#2A5C55]/5 border border-[#2A5C55]/20 rounded-xl">
                      <strong className="block text-[11px] uppercase tracking-wider text-[#2A5C55] font-bold mb-0.5">
                        Product Philosophy:
                      </strong>
                      <p className="leading-relaxed italic text-[11px]">{featured.learnings}</p>
                    </div>
                  </div>
                </div>

                {/* Actions & Tags */}
                <div className="pt-6 border-t editorial-border flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="flex flex-wrap gap-1.5 self-start">
                    {featured.tags.map((t) => (
                      <span
                        key={t}
                        className="px-2.5 py-0.5 rounded-full text-[10px] font-medium bg-[#FAF8F5] border editorial-border text-[#3D352E]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-3 w-full sm:w-auto">
                    <button
                      onClick={() => onOpenCaseStudy(featured)}
                      className="flex-1 sm:flex-initial px-5 py-2.5 rounded-full bg-[#231F1C] hover:bg-[#C85A32] text-white text-xs font-bold uppercase tracking-wider transition-colors flex items-center justify-center gap-2 shadow"
                    >
                      <span>Full Case Study</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
};
