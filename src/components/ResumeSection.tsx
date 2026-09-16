import React, { useState } from 'react';
import { Download, ExternalLink, GraduationCap, Briefcase, Award, Languages, MapPin, Mail, Phone, Printer } from 'lucide-react';
import { PERSONAL_INFO } from '../data/initialData';

export const ResumeSection: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handlePrint = () => {
    window.print();
  };

  const handleDownload = () => {
    // Generate a printable/downloadable text/HTML CV or trigger print
    window.print();
  };

  return (
    <section id="resume" className="py-24 border-b editorial-border bg-[#FAF8F5]">
      <div className="max-w-5xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-4">
            <div className="text-xs uppercase font-mono tracking-widest text-[#C85A32] font-semibold">
              Curriculum Vitae
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#141210]">
              Verified Resume &amp; Credentials
            </h2>
            <p className="text-base text-[#3D352E] font-normal max-w-xl leading-relaxed">
              Official academic background, operational track record at Ultrahuman Facility and Culrav Cultural Club, verified skills, and contact information.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-3 self-start md:self-auto">
            <button
              onClick={handlePrint}
              className="px-5 py-2.5 rounded-full bg-[#231F1C] hover:bg-[#C85A32] text-white text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-2 shadow"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>

            <a
              href={`mailto:${PERSONAL_INFO.email}?subject=Resume Inquiry - Atanu Bhowmick`}
              className="px-5 py-2.5 rounded-full bg-white border editorial-border hover:border-[#C85A32] text-[#141210] text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-2 shadow-xs"
            >
              <ExternalLink className="w-3.5 h-3.5 text-[#C85A32]" />
              <span>Request Full PDF</span>
            </a>
          </div>
        </div>

        {/* The Resume Document Paper Card */}
        <div className="bg-white rounded-3xl border editorial-border p-8 sm:p-12 shadow-md space-y-10">
          
          {/* Header Section */}
          <div className="border-b editorial-border pb-8 flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <h1 className="text-3xl sm:text-4xl font-bold text-[#141210] mb-2">{PERSONAL_INFO.name}</h1>
              <p className="text-xs sm:text-sm font-semibold text-[#C85A32] uppercase tracking-wider">
                {PERSONAL_INFO.roleTagline}
              </p>
            </div>

            <div className="text-xs text-[#3D352E] space-y-1.5 md:text-right">
              <p className="flex items-center md:justify-end gap-2">
                <Mail className="w-3.5 h-3.5 text-[#C85A32]" />
                <a href={`mailto:${PERSONAL_INFO.email}`} className="hover:underline font-medium">
                  {PERSONAL_INFO.email}
                </a>
              </p>
              <p className="flex items-center md:justify-end gap-2">
                <Phone className="w-3.5 h-3.5 text-[#C85A32]" />
                <span className="font-medium">{PERSONAL_INFO.phone}</span>
              </p>
              <p className="flex items-center md:justify-end gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#C85A32]" />
                <span>{PERSONAL_INFO.location}</span>
              </p>
            </div>
          </div>

          {/* Professional Summary */}
          <div>
            <h3 className="text-xs font-mono uppercase tracking-widest text-[#141210] font-bold mb-3 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#C85A32]" />
              Executive Profile
            </h3>
            <p className="text-xs sm:text-sm text-[#3D352E] leading-relaxed">
              Multidisciplinary professional combining rigorous electrical engineering training with practical leadership in high-pressure event operations, digital marketing campaign strategy, UI/UX thinking, and long-form content writing. Proven track record in high-stakes festival logistics, team leadership across 4 editions of Flames cultural fest, and precision quality assurance at Ultrahuman Facility.
            </p>
          </div>

          {/* Experience Section */}
          <div>
            <h3 className="text-xs font-mono uppercase tracking-widest text-[#141210] font-bold mb-6 flex items-center gap-2">
              <Briefcase className="w-4 h-4 text-[#C85A32]" />
              Operational &amp; Professional Experience
            </h3>

            <div className="space-y-8">
              
              {/* Ultrahuman */}
              <div className="space-y-2 border-l-2 border-[#231F1C] pl-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                  <h4 className="text-base font-bold text-[#141210]">Final Quality Control Associate</h4>
                  <span className="text-xs font-mono text-[#3D352E]/70">Ultrahuman Facility · Ongoing</span>
                </div>
                <p className="text-xs font-semibold text-[#2A5C55]">Hardware &amp; Manufacturing Operations</p>
                <ul className="list-disc list-inside text-xs text-[#3D352E] space-y-1 pt-1">
                  <li>Executed final-stage quality control inspections ensuring strict adherence to manufacturing specifications.</li>
                  <li>Maintained thorough SOP compliance and defect identification records to uphold zero-error packaging output.</li>
                  <li>Coordinated across line technicians and dispatch supervisors to guarantee component traceability.</li>
                </ul>
              </div>

              {/* Culrav Flames '25 */}
              <div className="space-y-2 border-l-2 border-[#C85A32] pl-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                  <h4 className="text-base font-bold text-[#141210]">Logistics &amp; Security Head</h4>
                  <span className="text-xs font-mono text-[#3D352E]/70">Flames’25 · Culrav Cultural Club</span>
                </div>
                <p className="text-xs font-semibold text-[#C85A32]">Cultural Festival Leadership</p>
                <ul className="list-disc list-inside text-xs text-[#3D352E] space-y-1 pt-1">
                  <li>Formulated end-to-end security blueprints, perimeter crowd barricades, and emergency evacuation protocols.</li>
                  <li>Supervised volunteer deployment rosters, artist security escorts, and technical audio/visual equipment handling.</li>
                  <li>Resolved multi-vendor staging bottlenecks and served as the direct bridge between campus authorities and external agencies.</li>
                </ul>
              </div>

              {/* Culrav Flames '24 */}
              <div className="space-y-2 border-l-2 border-[#3D352E]/30 pl-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                  <h4 className="text-base font-bold text-[#141210]">Working Committee Member</h4>
                  <span className="text-xs font-mono text-[#3D352E]/70">Flames’24 · Culrav Cultural Club</span>
                </div>
                <p className="text-xs font-semibold text-[#3D352E]">Event Operations &amp; Hospitality</p>
                <ul className="list-disc list-inside text-xs text-[#3D352E] space-y-1 pt-1">
                  <li>Managed vendor relationships, food court power routing, and green room hospitality arrangements.</li>
                  <li>Partnered with the media team to ensure full photographic coverage of inter-college competitive categories.</li>
                </ul>
              </div>

              {/* Culrav 2023 & 2026 */}
              <div className="space-y-1 border-l-2 border-[#3D352E]/20 pl-4 text-xs text-[#3D352E]">
                <div className="flex justify-between font-semibold text-[#141210]">
                  <span>Mentor (2026) &amp; Volunteer (2023)</span>
                  <span className="font-mono text-[#3D352E]/70">Culrav Cultural Club</span>
                </div>
                <p>Guided junior operational teams on crisis contingencies and supported on-ground verification desks.</p>
              </div>

            </div>
          </div>

          {/* Education Section */}
          <div>
            <h3 className="text-xs font-mono uppercase tracking-widest text-[#141210] font-bold mb-4 flex items-center gap-2">
              <GraduationCap className="w-4 h-4 text-[#C85A32]" />
              Education
            </h3>

            <div className="p-4 rounded-xl bg-[#FAF8F5] border editorial-border flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div>
                <h4 className="text-sm font-bold text-[#141210]">{PERSONAL_INFO.degree}</h4>
                <p className="text-xs text-[#3D352E] font-medium">{PERSONAL_INFO.institution}</p>
              </div>
              <div className="text-right">
                <span className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-white border editorial-border text-[#141210]">
                  CGPA: {PERSONAL_INFO.cgpa} / 10
                </span>
              </div>
            </div>
          </div>

          {/* Core Skills & Languages Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
            
            <div className="space-y-3">
              <h4 className="text-xs font-mono uppercase tracking-wider text-[#141210] font-bold">
                Specialized Competencies
              </h4>
              <p className="text-xs text-[#3D352E] leading-relaxed">
                Event Logistics, Security Blueprints, Vendor Management, Digital Campaign Strategy, Audience Research, User Flows, Wireframing, Copywriting, Storytelling, SOP Execution.
              </p>
            </div>

            <div className="space-y-3">
              <h4 className="text-xs font-mono uppercase tracking-wider text-[#141210] font-bold">
                Languages
              </h4>
              <div className="flex flex-wrap gap-2">
                {PERSONAL_INFO.languages.map((l) => (
                  <span
                    key={l.name}
                    className="px-3 py-1 rounded-md text-xs bg-[#FAF8F5] border editorial-border text-[#141210] font-medium"
                  >
                    <strong>{l.name}</strong> ({l.level})
                  </span>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
