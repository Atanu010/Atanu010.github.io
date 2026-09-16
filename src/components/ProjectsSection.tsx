import React, { useState } from 'react';
import { ArrowUpRight, Filter, Calendar } from 'lucide-react';
import { SELECTED_PROJECTS } from '../data/initialData';
import { PillarCategory, ProjectSummary } from '../types';

interface ProjectsSectionProps {
  onSelectProject: (project: ProjectSummary) => void;
}

type FilterTab = 'all' | PillarCategory;

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ onSelectProject }) => {
  const [activeTab, setActiveTab] = useState<FilterTab>('all');

  const filterTabs: { id: FilterTab; label: string }[] = [
    { id: 'all', label: 'All Projects' },
    { id: 'events', label: 'Events & Operations' },
    { id: 'marketing', label: 'Digital Marketing' },
    { id: 'uiux', label: 'UI/UX Design' },
    { id: 'content', label: 'Content Writing' },
  ];

  const displayedProjects =
    activeTab === 'all'
      ? SELECTED_PROJECTS
      : SELECTED_PROJECTS.filter((p) => p.category === activeTab);

  return (
    <section id="projects" className="py-24 border-b editorial-border bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl space-y-4">
            <div className="text-xs uppercase font-mono tracking-widest text-[#C85A32] font-semibold">
              Portfolio Matrix
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#141210]">
              Selected Work &amp; Case Studies
            </h2>
            <p className="text-base sm:text-lg text-[#3D352E] font-normal leading-relaxed">
              Cross-disciplinary initiatives spanning large-scale festival operations, audience campaign strategies, product thinking, and published essays.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap items-center gap-2 self-start md:self-auto bg-white p-1.5 rounded-full border editorial-border shadow-xs text-xs">
            {filterTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2 rounded-full font-semibold transition-all ${
                  activeTab === tab.id
                    ? 'bg-[#231F1C] text-white shadow-xs'
                    : 'text-[#3D352E] hover:text-[#C85A32]'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedProjects.map((project) => (
            <div
              key={project.id}
              className="group bg-white rounded-2xl border editorial-border overflow-hidden flex flex-col justify-between hover:shadow-lg transition-all duration-300"
            >
              <div>
                {/* Image Cover */}
                <div className="aspect-[16/10] overflow-hidden relative bg-[#F4EFEA]">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-[#141210]/80 backdrop-blur-xs text-white text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-1 rounded-full">
                    {project.categoryLabel}
                  </div>
                  <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-xs text-[#141210] text-[10px] font-mono font-bold px-2 py-1 rounded-full flex items-center gap-1">
                    <Calendar className="w-3 h-3 text-[#C85A32]" />
                    {project.year}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#141210] group-hover:text-[#C85A32] transition-colors mb-2 leading-snug">
                    {project.title}
                  </h3>

                  <p className="text-xs text-[#3D352E] leading-relaxed mb-4">
                    {project.desc}
                  </p>

                  <div className="p-2.5 bg-[#FAF8F5] rounded-lg border editorial-border text-[11px] text-[#3D352E]/80">
                    <strong className="font-semibold text-[#141210]">Core Focus:</strong> {project.skills}
                  </div>
                </div>
              </div>

              {/* Action Button Footer */}
              <div className="px-6 pb-6 pt-2">
                <button
                  onClick={() => onSelectProject(project)}
                  className="w-full py-2.5 px-4 rounded-xl border editorial-border text-xs font-bold uppercase tracking-wider text-[#141210] hover:bg-[#231F1C] hover:text-white hover:border-[#231F1C] transition-all flex items-center justify-center gap-2 group/btn"
                >
                  <span>{project.actionLabel}</span>
                  <ArrowUpRight className="w-4 h-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
