import React, { useState, useRef, useEffect } from 'react';
import { ArrowDownRight, Mail, ShieldCheck, MapPin, Camera, UploadCloud, Sliders, RotateCcw, Check } from 'lucide-react';
import { PERSONAL_INFO } from '../data/initialData';

interface HeroProps {
  onContactClick: () => void;
}

const STORAGE_PHOTO_KEY = 'atanu_custom_profile_photo';
const STORAGE_ADJUST_KEY = 'atanu_photo_adjustments';

interface PhotoAdjustments {
  zoom: number; // 80 - 180
  panY: number; // -30 - 30
  panX: number; // -30 - 30
}

const DEFAULT_ADJUSTMENTS: PhotoAdjustments = {
  zoom: 105,
  panY: 0,
  panX: 0,
};

export const Hero: React.FC<HeroProps> = ({ onContactClick }) => {
  const [photoUrl, setPhotoUrl] = useState<string | null>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_PHOTO_KEY);
      if (saved) return saved;
    } catch (e) {
      console.warn('Could not read saved photo from localStorage', e);
    }
    return null;
  });

  const [adjustments, setAdjustments] = useState<PhotoAdjustments>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_ADJUST_KEY);
      if (saved) return JSON.parse(saved);
    } catch (e) {
      console.warn('Could not read photo adjustments from localStorage', e);
    }
    return DEFAULT_ADJUSTMENTS;
  });

  const [isAdjusting, setIsAdjusting] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const saveAdjustments = (newAdj: PhotoAdjustments) => {
    setAdjustments(newAdj);
    try {
      localStorage.setItem(STORAGE_ADJUST_KEY, JSON.stringify(newAdj));
    } catch (e) {
      console.warn('Failed to persist photo adjustments', e);
    }
  };

  const handleFile = (file: File) => {
    if (!file.type.startsWith('image/')) {
      alert('Please upload a valid image file (JPG, PNG, WEBP).');
      return;
    }
    const reader = new FileReader();
    reader.onload = (e) => {
      const result = e.target?.result as string;
      if (result) {
        setPhotoUrl(result);
        try {
          localStorage.setItem(STORAGE_PHOTO_KEY, result);
        } catch (err) {
          console.warn('Could not cache photo to localStorage', err);
        }
      }
    };
    reader.readAsDataURL(file);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) handleFile(file);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files?.[0];
    if (file) handleFile(file);
  };


  return (
    <section id="home" className="relative pt-10 pb-20 md:py-24 border-b editorial-border overflow-hidden bg-[#FAF8F5]">
      {/* Subtle editorial background glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#C85A32]/5 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-72 h-72 bg-[#2A5C55]/5 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          
          {/* Left Column: Headline & Value Proposition */}
          <div className="lg:col-span-7 space-y-7">
            
            {/* Tag Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border editorial-border bg-white/80 text-xs font-semibold tracking-wide text-[#3D352E] shadow-xs">
              <span className="w-2 h-2 rounded-full bg-[#C85A32] animate-pulse" />
              Multidisciplinary Coordinator &amp; Strategist
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#141210] leading-[1.12]">
              Turning Ideas Into{' '}
              <span className="font-serif italic font-normal text-[#C85A32]">Experiences</span>,
              Campaigns &amp; Stories.
            </h1>

            {/* Supporting Bio */}
            <p className="text-base sm:text-lg text-[#3D352E] leading-relaxed max-w-2xl font-normal">
              {PERSONAL_INFO.subheadline}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#projects"
                className="px-7 py-3.5 rounded-full text-xs font-bold uppercase tracking-wider text-white bg-[#231F1C] hover:bg-[#C85A32] transition-all duration-300 shadow-md hover:shadow-lg flex items-center gap-2 group"
              >
                <span>View Selected Work</span>
                <ArrowDownRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
              </a>

              <button
                onClick={onContactClick}
                className="px-7 py-3.5 rounded-full text-xs font-bold uppercase tracking-wider text-[#141210] bg-white hover:bg-[#F4EFEA] border editorial-border transition-all duration-300 shadow-xs hover:shadow-md flex items-center gap-2"
              >
                <Mail className="w-4 h-4 text-[#C85A32]" />
                <span>Let's Talk</span>
              </button>
            </div>

            {/* Micro Credibility Indicators */}
            <div className="pt-6 border-t editorial-border grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs">
              <div>
                <span className="block font-serif text-2xl font-bold text-[#141210]">Culrav</span>
                <span className="text-[#3D352E]/80 text-[11px]">Logistics &amp; Security Head</span>
              </div>
              <div>
                <span className="block font-serif text-2xl font-bold text-[#C85A32]">FIEM</span>
                <span className="text-[#3D352E]/80 text-[11px]">B.Tech (2022–2026)</span>
              </div>
              <div>
                <span className="block font-serif text-2xl font-bold text-[#2A5C55]">Operations</span>
                <span className="text-[#3D352E]/80 text-[11px]">Quality Control Associate</span>
              </div>
              <div>
                <span className="block font-serif text-2xl font-bold text-[#141210]">Design</span>
                <span className="text-[#3D352E]/80 text-[11px]">UI/UX &amp; Creative Strategy</span>
              </div>
            </div>

          </div>

          {/* Right Column: Editorial Portrait Card with Direct Photo Adjustment */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md">
              
              {/* Layered Editorial Framing */}
              <div className="absolute -inset-2 bg-gradient-to-tr from-[#E6DDD5]/80 via-[#F4EFEA] to-white rounded-3xl -rotate-1 shadow-sm -z-10" />

              <div className="bg-white p-4 sm:p-5 rounded-2xl border editorial-border shadow-xl">
                
                {/* Hidden File Input */}
                <input
                  type="file"
                  ref={fileInputRef}
                  onChange={handleFileChange}
                  accept="image/*"
                  className="hidden"
                />

                {/* Portrait Frame with drag-and-drop & live transform adjustments */}
                <div
                  onDragOver={(e) => {
                    e.preventDefault();
                    setIsDragging(true);
                  }}
                  onDragLeave={() => setIsDragging(false)}
                  onDrop={handleDrop}
                  className={`aspect-[4/5] rounded-xl overflow-hidden bg-gradient-to-b from-[#FAF7F2] via-[#F3ECE4] to-[#E5DCD3] relative group flex items-center justify-center transition-all ${
                    isDragging ? 'ring-4 ring-[#C85A32] ring-offset-2 scale-[0.99]' : ''
                  }`}
                >
                  {photoUrl ? (
                    <div className="w-full h-full overflow-hidden flex items-center justify-center relative">
                      <img
                        id="hero-profile-img"
                        src={photoUrl}
                        alt={PERSONAL_INFO.name}
                        referrerPolicy="no-referrer"
                        style={{
                          transform: `scale(${adjustments.zoom / 100}) translate(${adjustments.panX}%, ${adjustments.panY}%)`,
                          transformOrigin: 'center center',
                          transition: isAdjusting ? 'none' : 'transform 0.2s ease-out',
                        }}
                        className="w-full h-full object-contain pointer-events-none"
                        onError={() => {
                          setPhotoUrl(null);
                        }}
                      />
                    </div>
                  ) : (
                    /* Clean Editorial Upload Frame when awaiting photo */
                    <div
                      onClick={() => fileInputRef.current?.click()}
                      className="w-full h-full flex flex-col items-center justify-center p-6 text-center cursor-pointer hover:bg-black/5 transition"
                    >
                      <div className="w-16 h-16 rounded-full bg-white shadow-md flex items-center justify-center mb-3 text-[#C85A32]">
                        <UploadCloud className="w-8 h-8" />
                      </div>
                      <p className="font-bold text-sm text-[#141210] mb-1">
                        Select Your Original Photo
                      </p>
                      <p className="text-xs text-[#3D352E]/70 max-w-xs leading-relaxed mb-4">
                        Click here or drop your WhatsApp photo to use your authentic photo as it is
                      </p>
                      <span className="px-4 py-2 rounded-full bg-[#231F1C] text-white text-[11px] font-bold uppercase tracking-wider shadow">
                        Browse Photo
                      </span>
                    </div>
                  )}

                  {/* Top-Right Action Buttons */}
                  <div className="absolute top-3 right-3 z-10 flex items-center gap-1.5 opacity-90 group-hover:opacity-100 transition">
                    <button
                      type="button"
                      onClick={() => setIsAdjusting(!isAdjusting)}
                      className={`px-3 py-1.5 rounded-full text-[11px] font-semibold tracking-wide flex items-center gap-1.5 shadow-md border editorial-border transition ${
                        isAdjusting
                          ? 'bg-[#231F1C] text-white'
                          : 'bg-white/95 hover:bg-white text-[#141210]'
                      }`}
                      title="Adjust framing, zoom, and positioning"
                    >
                      <Sliders className="w-3.5 h-3.5 text-[#C85A32]" />
                      <span>{isAdjusting ? 'Close Adjust' : 'Adjust'}</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => fileInputRef.current?.click()}
                      className="p-1.5 rounded-full bg-white/95 hover:bg-white text-[#141210] shadow-md border editorial-border transition"
                      title="Change or upload original photo file"
                    >
                      <Camera className="w-3.5 h-3.5 text-[#C85A32]" />
                    </button>
                  </div>

                  {/* Floating Status Pill */}
                  <div className="absolute bottom-3 left-3 bg-[#141210]/90 text-[#FAF8F5] backdrop-blur-md px-3 py-1.5 rounded-full text-[11px] font-medium tracking-wide flex items-center gap-1.5 shadow pointer-events-none">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    <span>Open to Roles &amp; Projects</span>
                  </div>
                </div>

                {/* Live Adjustment Tool Panel */}
                {isAdjusting && (
                  <div className="mt-4 p-4 rounded-xl bg-[#FAF8F5] border editorial-border space-y-3 animate-in fade-in slide-in-from-top-2 duration-150 text-xs text-[#3D352E]">
                    <div className="flex items-center justify-between font-bold text-[#141210]">
                      <span className="flex items-center gap-1.5">
                        <Sliders className="w-3.5 h-3.5 text-[#C85A32]" />
                        Frame &amp; Position Adjustment
                      </span>
                      <button
                        onClick={() => saveAdjustments(DEFAULT_ADJUSTMENTS)}
                        className="text-[11px] font-medium text-[#C85A32] hover:underline flex items-center gap-1"
                      >
                        <RotateCcw className="w-3 h-3" />
                        Reset
                      </button>
                    </div>

                    {/* Zoom / Scale */}
                    <div className="space-y-1">
                      <div className="flex justify-between text-[11px]">
                        <span>Scale (Zoom)</span>
                        <span className="font-mono">{adjustments.zoom}%</span>
                      </div>
                      <input
                        type="range"
                        min="70"
                        max="180"
                        value={adjustments.zoom}
                        onChange={(e) =>
                          saveAdjustments({ ...adjustments, zoom: Number(e.target.value) })
                        }
                        className="w-full accent-[#C85A32] cursor-pointer h-1.5 bg-[#E6DDD5] rounded-lg appearance-none"
                      />
                    </div>

                    {/* Vertical Pan (Y) */}
                    <div className="space-y-1">
                      <div className="flex justify-between text-[11px]">
                        <span>Vertical Position (Pan Y)</span>
                        <span className="font-mono">{adjustments.panY > 0 ? `+${adjustments.panY}` : adjustments.panY}%</span>
                      </div>
                      <input
                        type="range"
                        min="-35"
                        max="35"
                        value={adjustments.panY}
                        onChange={(e) =>
                          saveAdjustments({ ...adjustments, panY: Number(e.target.value) })
                        }
                        className="w-full accent-[#C85A32] cursor-pointer h-1.5 bg-[#E6DDD5] rounded-lg appearance-none"
                      />
                    </div>

                    {/* Horizontal Pan (X) */}
                    <div className="space-y-1">
                      <div className="flex justify-between text-[11px]">
                        <span>Horizontal Position (Pan X)</span>
                        <span className="font-mono">{adjustments.panX > 0 ? `+${adjustments.panX}` : adjustments.panX}%</span>
                      </div>
                      <input
                        type="range"
                        min="-30"
                        max="30"
                        value={adjustments.panX}
                        onChange={(e) =>
                          saveAdjustments({ ...adjustments, panX: Number(e.target.value) })
                        }
                        className="w-full accent-[#C85A32] cursor-pointer h-1.5 bg-[#E6DDD5] rounded-lg appearance-none"
                      />
                    </div>

                    <div className="flex items-center justify-between pt-2 border-t editorial-border">
                      <button
                        onClick={() => fileInputRef.current?.click()}
                        className="text-[11px] font-semibold text-[#141210] hover:text-[#C85A32] transition flex items-center gap-1"
                      >
                        <UploadCloud className="w-3.5 h-3.5" />
                        Choose another photo
                      </button>
                      <button
                        onClick={() => setIsAdjusting(false)}
                        className="px-3 py-1 rounded-full bg-[#231F1C] text-white font-bold text-[11px] flex items-center gap-1 shadow hover:bg-[#C85A32] transition"
                      >
                        <Check className="w-3 h-3" />
                        Done
                      </button>
                    </div>
                  </div>
                )}

                {/* Card Credentials Bar */}
                <div className="mt-4 pt-3 border-t editorial-border flex items-center justify-between text-xs">
                  <div>
                    <p className="font-bold text-[#141210] text-sm flex items-center gap-1.5">
                      {PERSONAL_INFO.name}
                      <ShieldCheck className="w-4 h-4 text-[#2A5C55]" />
                    </p>
                    <p className="text-[#3D352E] flex items-center gap-1 text-[11px] mt-0.5">
                      <MapPin className="w-3 h-3 text-[#C85A32]" />
                      {PERSONAL_INFO.location}
                    </p>
                  </div>
                  <div className="text-right">
                    <span className="inline-block px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-[#C85A32]/10 text-[#C85A32] border border-[#C85A32]/20">
                      B.Tech Graduate
                    </span>
                  </div>
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
