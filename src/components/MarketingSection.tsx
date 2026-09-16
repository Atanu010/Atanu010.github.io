import React from 'react';
import { Target, Users, Megaphone, BarChart3, Layers, CalendarDays, PenLine, Sparkles } from 'lucide-react';
import { MARKETING_PROJECTS } from '../data/initialData';

export const MarketingSection: React.FC = () => {
  const capabilities = [
    { title: 'Social Media Management', icon: Megaphone, desc: 'Channel scheduling, brand tone alignment, and audience interaction.' },
    { title: 'Content Strategy', icon: Layers, desc: 'Editorial pillars, narrative arcs, and funnel-stage messaging.' },
    { title: 'Campaign Planning', icon: Target, desc: 'End-to-end launch phases, countdown milestones, and event teasers.' },
    { title: 'Copywriting & Hooks', icon: PenLine, desc: 'High-clarity headlines, social captions, microcopy, and email copy.' },
    { title: 'Audience Research', icon: Users, desc: 'Segment analysis, community pain points, and sentiment monitoring.' },
    { title: 'Content Calendars', icon: CalendarDays, desc: 'Multi-week scheduling, asset pipelines, and cross-team deadlines.' },
  ];

  return (
    <section id="marketing" className="py-24 border-b editorial-border bg-white">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="text-xs uppercase font-mono tracking-widest text-[#C85A32] font-semibold">
            Core Discipline 02
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#141210]">
            Digital Marketing &amp; Brand Strategy
          </h2>
          <p className="text-base sm:text-lg text-[#3D352E] font-normal leading-relaxed">
            Structuring campaigns that connect audience psychology to concrete outcomes — from organic campus fest rollouts to operational brand storytelling.
          </p>
        </div>

        {/* Capabilities Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {capabilities.map((cap) => {
            const Icon = cap.icon;
            return (
              <div
                key={cap.title}
                className="p-6 rounded-2xl bg-[#FAF8F5] border editorial-border hover:border-[#C85A32]/40 transition-colors shadow-xs"
              >
                <div className="w-10 h-10 rounded-xl bg-white border editorial-border flex items-center justify-center text-[#C85A32] mb-4 shadow-xs">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-[#141210] mb-2">{cap.title}</h3>
                <p className="text-xs text-[#3D352E] leading-relaxed">{cap.desc}</p>
              </div>
            );
          })}
        </div>

        {/* Marketing Projects & Blueprints */}
        <div className="space-y-8">
          <div className="border-b editorial-border pb-3 flex items-center justify-between">
            <h3 className="text-xs font-mono uppercase tracking-wider text-[#141210] font-bold">
              Campaign Blueprints &amp; Case Examples
            </h3>
            <span className="text-xs text-[#3D352E]/70">Execution &amp; Strategy</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {MARKETING_PROJECTS.map((project) => (
              <div
                key={project.id}
                className="bg-[#FAF8F5] p-6 sm:p-8 rounded-2xl border editorial-border flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] font-mono uppercase tracking-wider font-bold text-[#C85A32]">
                      Campaign Strategy
                    </span>
                    {project.isPlaceholder && (
                      <span className="px-2 py-0.5 rounded text-[10px] font-medium bg-amber-100 text-amber-800 border border-amber-200">
                        Operational Framework
                      </span>
                    )}
                  </div>

                  <h4 className="text-xl font-bold text-[#141210] mb-1.5">{project.title}</h4>
                  <p className="font-serif italic text-xs text-[#3D352E] mb-6">{project.tagline}</p>

                  <div className="space-y-3.5 text-xs text-[#3D352E] mb-6">
                    <div>
                      <strong className="block text-[11px] uppercase tracking-wider text-[#141210] font-bold mb-0.5">
                        Core Objective:
                      </strong>
                      <p className="leading-relaxed">{project.objective}</p>
                    </div>

                    <div>
                      <strong className="block text-[11px] uppercase tracking-wider text-[#141210] font-bold mb-0.5">
                        Target Audience:
                      </strong>
                      <p className="leading-relaxed">{project.targetAudience}</p>
                    </div>

                    <div>
                      <strong className="block text-[11px] uppercase tracking-wider text-[#141210] font-bold mb-0.5">
                        Execution Strategy:
                      </strong>
                      <p className="leading-relaxed">{project.strategy}</p>
                    </div>

                    <div>
                      <strong className="block text-[11px] uppercase tracking-wider text-[#141210] font-bold mb-0.5">
                        Creative Deliverables:
                      </strong>
                      <p className="leading-relaxed">{project.creativeAssets}</p>
                    </div>

                    <div className="p-3.5 bg-white rounded-xl border editorial-border">
                      <strong className="block text-[11px] uppercase tracking-wider text-[#2A5C55] font-bold mb-0.5">
                        Key Takeaway &amp; Learning:
                      </strong>
                      <p className="leading-relaxed italic">{project.learnings}</p>
                    </div>
                  </div>
                </div>

                {/* Tags */}
                <div className="pt-4 border-t editorial-border flex flex-wrap gap-1.5">
                  {project.tags.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-0.5 rounded-full text-[10px] font-medium bg-white border editorial-border text-[#3D352E]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
