import React, { useEffect } from 'react';
import { X, ZoomIn } from 'lucide-react';
import { LightboxData } from '../types';

interface LightboxModalProps {
  data: LightboxData;
  onClose: () => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({ data, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (data.isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [data.isOpen, onClose]);

  if (!data.isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/90 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <button
        onClick={onClose}
        className="absolute top-6 right-6 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition z-20"
        aria-label="Close photo"
      >
        <X className="w-6 h-6" />
      </button>

      <div
        className="relative max-w-5xl max-h-[85vh] flex flex-col items-center"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={data.src}
          alt={data.caption}
          className="max-w-full max-h-[75vh] object-contain rounded-xl shadow-2xl border border-white/10"
        />
        {data.caption && (
          <p className="mt-4 text-xs sm:text-sm text-white/90 text-center font-medium bg-black/60 px-4 py-2 rounded-full backdrop-blur-sm">
            {data.caption}
          </p>
        )}
      </div>
    </div>
  );
};
