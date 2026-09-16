import React from 'react';
import { CheckCircle2, GraduationCap, Languages, Briefcase } from 'lucide-react';
import { PERSONAL_INFO } from '../data/initialData';

export const About: React.FC = () => {
  const whatIBringList = [
    'Event Planning & Coordination',
    'Operations & Execution',
    'Digital Marketing Strategy',
    'Social Media Strategy & Calendars',
    'UI/UX Thinking & User Flows',
    'Content Writing & Storytelling',
    'Creative Problem Solving under Pressure',
    'Communication & Cross-Team Coordination',
    'Team Collaboration & Leadership',
    'Project Organization & Strict Timelines',
  ];

  return (
    <section id="about" className="py-24 border-b editorial-border bg-white">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14">
          
          {/* Left Column: Sticky Section Title & Core Theme */}
          <div className="lg:col-span-4 space-y-5">
            <div className="text-xs uppercase font-mono tracking-widest text-[#C85A32] font-semibold">
              About Me
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#141210] leading-tight">
              Bridging Creative Vision With Grounded Operations.
            </h2>
            <p className="font-serif italic text-[#3D352E] text-lg leading-relaxed border-l-2 border-[#C85A32] pl-4">
              "Execution is the bridge between an ambitious concept and an unforgettable reality."
            </p>

            {/* Quick Education & Background Box */}
            <div className="p-4 rounded-xl bg-[#FAF8F5] border editorial-border space-y-3 mt-6">
              <div className="flex items-start gap-3">
                <GraduationCap className="w-5 h-5 text-[#C85A32] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#141210]">Academic Background</h4>
                  <p className="text-xs text-[#3D352E] font-medium mt-0.5">{PERSONAL_INFO.degree}</p>
                  <p className="text-[11px] text-[#3D352E]/70">{PERSONAL_INFO.institution} · CGPA: {PERSONAL_INFO.cgpa}</p>
                </div>
              </div>

              <div className="flex items-start gap-3 pt-2 border-t editorial-border">
                <Briefcase className="w-5 h-5 text-[#2A5C55] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#141210]">Operations &amp; Quality</h4>
                  <p className="text-xs text-[#3D352E] font-medium mt-0.5">Final Quality Control Associate</p>
                  <p className="text-[11px] text-[#3D352E]/70">Ultrahuman Facility · Process verification &amp; SOP compliance</p>
                </div>
              </div>

              <div className="flex items-start gap-3 pt-2 border-t editorial-border">
                <Languages className="w-5 h-5 text-[#C85A32] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#141210]">Languages</h4>
                  <div className="flex flex-wrap gap-1.5 mt-1">
                    {PERSONAL_INFO.languages.map((lang) => (
                      <span key={lang.name} className="px-2 py-0.5 bg-white border editorial-border text-[10px] font-semibold text-[#3D352E] rounded">
                        {lang.name}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Narrative & "What I Bring" */}
          <div className="lg:col-span-8 space-y-8 text-[#3D352E] text-base leading-relaxed">
            
            <p>
              I operate at the intersection of <strong className="text-[#141210]">creativity, operations, marketing, design, communication, and problem solving</strong>. Rather than confining myself to a single narrow track, I specialize in connecting the dots: taking a raw concept, planning its operational reality, framing the message that reaches an audience, and crafting intuitive visual touchpoints.
            </p>

            <p>
              My background centers on active responsibility. Through leading event logistics and security operations for large college festivals at <strong className="text-[#141210]">Culrav</strong>, I developed an instinct for crisis resolution, vendor coordination, crowd barricading, and team choreography under high-stakes conditions. Concurrently, my work in digital marketing and UI/UX lets me approach projects with an understanding of user flows, conversion funnels, and brand clarity.
            </p>

            <p>
              Whether coordinating behind the scenes at a cultural fest, drafting editorial brand copy, or architecting a frictionless UI screen, my objective remains consistent: <em className="font-serif">deliver clarity, organization, and a genuine human connection.</em>
            </p>

            {/* "What I Bring" Grid */}
            <div className="pt-6 border-t editorial-border">
              <h3 className="text-xs font-mono uppercase tracking-wider text-[#141210] font-bold mb-5 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#C85A32]" />
                What I Bring to Teams &amp; Projects
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {whatIBringList.map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3 p-3.5 rounded-xl bg-[#FAF8F5] border editorial-border hover:border-[#C85A32]/30 transition-colors shadow-xs"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#C85A32] mt-0.5 shrink-0" />
                    <span className="text-xs sm:text-sm font-semibold text-[#141210]">{item}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
