import React from 'react';
import { Calendar, TrendingUp, Palette, FileText, CheckCircle } from 'lucide-react';

export const SkillsSection: React.FC = () => {
  const skillDomains = [
    {
      title: 'Event Management & Operations',
      icon: Calendar,
      accent: 'border-[#C85A32]',
      color: 'text-[#C85A32]',
      skills: [
        'Event Planning',
        'Live Operations',
        'Logistics Architecture',
        'Vendor Coordination',
        'Team Leadership',
        'On-Ground Execution',
        'Crowd Safety & Barricading',
        'Backstage Protocol',
      ],
    },
    {
      title: 'Digital Marketing & Strategy',
      icon: TrendingUp,
      accent: 'border-[#2A5C55]',
      color: 'text-[#2A5C55]',
      skills: [
        'Content Strategy',
        'Campaign Planning',
        'Social Media Outreach',
        'Audience Research',
        'Brand Communication',
        'Copywriting & Hooks',
        'Performance Analytics',
        'Content Calendars',
      ],
    },
    {
      title: 'UI/UX & Product Design',
      icon: Palette,
      accent: 'border-[#C85A32]',
      color: 'text-[#C85A32]',
      skills: [
        'User Research & Personas',
        'Information Architecture',
        'User Flows',
        'Low-Fi Wireframing',
        'Interactive Prototyping',
        'UI Design & Systems',
        'Responsive Layouts',
        'Usability Review',
      ],
    },
    {
      title: 'Content Writing & Storytelling',
      icon: FileText,
      accent: 'border-[#2A5C55]',
      color: 'text-[#2A5C55]',
      skills: [
        'Long-Form Articles',
        'Editorial Essays',
        'Brand Storytelling',
        'Creative Writing',
        'Social Media Copy',
        'Campaign Copy',
        'Event Scripting',
        'Operational Documentation',
      ],
    },
  ];

  const softwareStack = [
    'Figma',
    'Notion',
    'Google Workspace (Docs, Sheets, Slides)',
    'Canva',
    'Slack & Discord Team Ops',
    'Meta Business Suite',
    'MS Excel / Process Trackers',
  ];

  return (
    <section id="skills" className="py-24 border-b editorial-border bg-white">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="text-xs uppercase font-mono tracking-widest text-[#C85A32] font-semibold">
            Capabilities Matrix
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#141210]">
            Core Competencies &amp; Toolkit
          </h2>
          <p className="text-base sm:text-lg text-[#3D352E] font-normal leading-relaxed">
            A balanced synthesis of operational rigor, audience marketing, design intuition, and editorial writing.
          </p>
        </div>

        {/* 4 Pillar Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {skillDomains.map((domain) => {
            const Icon = domain.icon;
            return (
              <div
                key={domain.title}
                className="p-6 rounded-2xl bg-[#FAF8F5] border editorial-border flex flex-col justify-between shadow-xs"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-white border editorial-border flex items-center justify-center mb-4 shadow-xs">
                    <Icon className={`w-5 h-5 ${domain.color}`} />
                  </div>
                  <h3 className="text-base font-bold text-[#141210] mb-4">{domain.title}</h3>

                  <ul className="space-y-2 text-xs text-[#3D352E]">
                    {domain.skills.map((skill) => (
                      <li key={skill} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#C85A32]" />
                        <span>{skill}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>

        {/* Tools & Workflow Environment */}
        <div className="p-6 sm:p-8 rounded-2xl bg-[#FAF8F5] border editorial-border">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-5 pb-3 border-b editorial-border">
            <div>
              <span className="text-[10px] font-mono uppercase tracking-wider text-[#C85A32] font-bold">
                Daily Stack
              </span>
              <h4 className="text-sm font-bold text-[#141210]">Tools, Software &amp; Operational Platforms</h4>
            </div>
            <span className="text-xs text-[#3D352E]/70">Productivity &amp; Creative Delivery</span>
          </div>

          <div className="flex flex-wrap gap-2.5">
            {softwareStack.map((tool) => (
              <span
                key={tool}
                className="px-3.5 py-1.5 rounded-lg bg-white border editorial-border text-xs font-semibold text-[#141210] shadow-xs flex items-center gap-2"
              >
                <CheckCircle className="w-3.5 h-3.5 text-[#2A5C55]" />
                {tool}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
