import React, { useEffect } from 'react';
import { X, Clock, Calendar, Tag, Share2, Check } from 'lucide-react';
import { WritingItem } from '../types';
import { PERSONAL_INFO } from '../data/initialData';

interface ArticleReaderModalProps {
  article: WritingItem | null;
  onClose: () => void;
}

export const ArticleReaderModal: React.FC<ArticleReaderModalProps> = ({ article, onClose }) => {
  const [copied, setCopied] = React.useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (article) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [article, onClose]);

  if (!article) return null;

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto modal-backdrop">
      <div
        className="relative w-full max-w-3xl bg-white rounded-3xl border editorial-border shadow-2xl overflow-hidden my-8 animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Sticky Bar */}
        <div className="sticky top-0 z-10 bg-white/95 backdrop-blur-md px-6 py-4 border-b editorial-border flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-[#C85A32]/10 text-[#C85A32] border border-[#C85A32]/20">
              {article.category}
            </span>
            <span className="text-xs font-mono text-[#3D352E]/70 flex items-center gap-1">
              <Clock className="w-3 h-3 text-[#C85A32]" />
              {article.readTime}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleShare}
              className="p-2 rounded-full text-[#3D352E] hover:bg-[#FAF8F5] transition"
              title="Copy link"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Share2 className="w-4 h-4" />}
            </button>
            <button
              onClick={onClose}
              className="p-2 rounded-full text-[#141210] hover:bg-[#FAF8F5] transition"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Article Body Container */}
        <div className="p-6 sm:p-10 max-h-[80vh] overflow-y-auto space-y-6">
          
          {/* Article Header */}
          <div className="space-y-4">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-[#141210] font-serif leading-tight">
              {article.title}
            </h1>

            <div className="flex items-center justify-between text-xs text-[#3D352E] border-b editorial-border pb-4">
              <div className="flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-full bg-[#231F1C] text-white flex items-center justify-center font-bold text-xs">
                  A
                </div>
                <div>
                  <span className="font-bold text-[#141210] block">{PERSONAL_INFO.name}</span>
                  <span className="text-[10px] text-[#3D352E]/70">{PERSONAL_INFO.location}</span>
                </div>
              </div>
              <span className="flex items-center gap-1 text-[11px] font-mono text-[#3D352E]/70">
                <Calendar className="w-3.5 h-3.5 text-[#C85A32]" />
                {article.date}
              </span>
            </div>
          </div>

          {/* Cover Image if available */}
          {article.coverImage && (
            <div className="rounded-2xl overflow-hidden aspect-[16/9] bg-[#FAF8F5] border editorial-border">
              <img
                src={article.coverImage}
                alt={article.title}
                className="w-full h-full object-cover"
              />
            </div>
          )}

          {/* Lead Abstract */}
          <div className="p-4 rounded-xl bg-[#FAF8F5] border-l-4 border-[#C85A32] text-xs sm:text-sm font-medium text-[#141210] leading-relaxed">
            {article.desc}
          </div>

          {/* Formatted Content */}
          <div className="prose prose-stone text-xs sm:text-sm leading-relaxed text-[#3D352E] space-y-4 whitespace-pre-line font-sans">
            {article.content}
          </div>

          {/* Tags */}
          <div className="pt-6 border-t editorial-border">
            <span className="text-[10px] font-mono uppercase tracking-wider text-[#141210] font-bold block mb-2">
              Topics &amp; Tags
            </span>
            <div className="flex flex-wrap gap-1.5">
              {article.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-1 rounded-md text-[11px] font-medium bg-[#FAF8F5] border editorial-border text-[#3D352E]"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
