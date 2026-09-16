import React, { useEffect } from 'react';
import { X, CheckCircle2, AlertTriangle, Lightbulb, Compass, BarChart2 } from 'lucide-react';
import { CaseStudyData } from '../types';

interface CaseStudyModalProps {
  caseStudy: CaseStudyData | null;
  onClose: () => void;
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({ caseStudy, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (caseStudy) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [caseStudy, onClose]);

  if (!caseStudy) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto modal-backdrop">
      <div
        className="relative w-full max-w-3xl bg-white rounded-3xl border editorial-border shadow-2xl overflow-hidden my-8 animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Bar */}
        <div className="bg-[#FAF8F5] px-6 py-4 border-b editorial-border flex items-center justify-between sticky top-0 z-10 backdrop-blur-md">
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-[#C85A32]/10 text-[#C85A32] border border-[#C85A32]/20">
              {caseStudy.category}
            </span>
            <span className="text-xs text-[#3D352E]/70 font-mono">Case Study Breakdown</span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-full text-[#141210] hover:bg-[#E6DDD5] transition"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content Scroll Area */}
        <div className="p-6 sm:p-10 max-h-[80vh] overflow-y-auto space-y-8">
          
          {/* Header Title */}
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#141210] mb-3">
              {caseStudy.title}
            </h2>
            <p className="text-xs sm:text-sm text-[#3D352E] leading-relaxed">
              {caseStudy.overview}
            </p>
          </div>

          {/* 9-Step Structural Grid */}
          <div className="space-y-6 text-xs text-[#3D352E]">
            
            {/* Step 1: Objective */}
            <div className="p-4 rounded-xl bg-[#FAF8F5] border editorial-border space-y-1.5">
              <div className="flex items-center gap-2 text-[#C85A32] font-bold text-xs">
                <Compass className="w-4 h-4" />
                <span className="uppercase tracking-wider font-mono">01. Core Objective</span>
              </div>
              <p className="leading-relaxed text-[#141210] text-xs sm:text-sm">
                {caseStudy.objective}
              </p>
            </div>

            {/* Step 2: Challenge */}
            <div className="p-4 rounded-xl bg-amber-500/5 border border-amber-500/20 space-y-1.5">
              <div className="flex items-center gap-2 text-amber-700 font-bold text-xs">
                <AlertTriangle className="w-4 h-4" />
                <span className="uppercase tracking-wider font-mono">02. Challenge &amp; Constraints</span>
              </div>
              <p className="leading-relaxed text-[#141210] text-xs sm:text-sm">
                {caseStudy.challenge}
              </p>
            </div>

            {/* Step 3: Strategic Approach */}
            <div className="p-4 rounded-xl bg-white border editorial-border space-y-1.5 shadow-xs">
              <div className="flex items-center gap-2 text-[#2A5C55] font-bold text-xs">
                <Lightbulb className="w-4 h-4" />
                <span className="uppercase tracking-wider font-mono">03. Strategic Approach</span>
              </div>
              <p className="leading-relaxed text-[#141210] text-xs sm:text-sm">
                {caseStudy.approach}
              </p>
            </div>

            {/* Step 4: Execution */}
            <div className="p-4 rounded-xl bg-[#FAF8F5] border editorial-border space-y-1.5">
              <div className="flex items-center gap-2 text-[#141210] font-bold text-xs">
                <CheckCircle2 className="w-4 h-4 text-[#C85A32]" />
                <span className="uppercase tracking-wider font-mono">04. Execution Details</span>
              </div>
              <p className="leading-relaxed text-[#141210] text-xs sm:text-sm">
                {caseStudy.execution}
              </p>
            </div>

            {/* Step 5: Concrete Outcome & Learnings */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-white border editorial-border shadow-xs space-y-1">
                <span className="font-mono text-[10px] uppercase tracking-wider text-[#2A5C55] font-bold block">
                  05. Tangible Outcome
                </span>
                <p className="text-xs text-[#141210] leading-relaxed font-medium">
                  {caseStudy.outcome}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#FAF8F5] border editorial-border space-y-1">
                <span className="font-mono text-[10px] uppercase tracking-wider text-[#C85A32] font-bold block">
                  06. Key Takeaway
                </span>
                <p className="text-xs text-[#3D352E] leading-relaxed italic">
                  "{caseStudy.learnings}"
                </p>
              </div>
            </div>

          </div>

          <div className="pt-4 border-t editorial-border text-right">
            <button
              onClick={onClose}
              className="px-6 py-2.5 rounded-full bg-[#231F1C] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#C85A32] transition shadow"
            >
              Done Reading
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};
