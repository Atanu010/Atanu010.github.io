import React, { useState, useRef, useEffect } from 'react';
import { Calendar, Shield, MapPin, ArrowRight, Eye, Image as ImageIcon, UploadCloud, Check, Camera, Sparkles } from 'lucide-react';
import { CULRAV_TIMELINE, EVENTS_DATA } from '../data/initialData';
import { EventItem } from '../types';

interface EventsSectionProps {
  onOpenCaseStudy: (item: EventItem) => void;
  onOpenImage: (src: string, caption: string) => void;
}

const STORAGE_FLAMES25_PHOTOS_KEY = 'atanu_flames25_uploaded_photos';

interface PhotoSlot {
  id: string;
  defaultSrc: string;
  badge: string;
  title: string;
  caption: string;
  filenameHint: string;
}

const FLAMES25_SLOTS: PhotoSlot[] = [
  {
    id: 'trap-live',
    defaultSrc: '/images/flames25/trap-live.jpg',
    badge: 'TRAP Live Headliner',
    title: 'The Radical Array Project (TRAP)',
    caption: 'Headliner Performance: The Radical Array Project (TRAP) performing live on the Flames’25 main stage under red truss lighting and crowd confetti, supervised under Atanu’s logistics & security perimeter coordination.',
    filenameHint: '20251123_195920.jpg',
  },
  {
    id: 'core-team',
    defaultSrc: '/images/flames25/culrav-core-team.jpg',
    badge: 'Core Team Wrap',
    title: 'Culrav Committee & Security Team',
    caption: 'Culrav Organizing Committee, Logistics & Security leads celebrating on the main stage after an incident-free, packed Flames’25 festival wrap (Nov 24, 1:28 AM).',
    filenameHint: 'WhatsApp Image 2025-11-24 at 01.28.32.jpg',
  },
  {
    id: 'stage-bassist',
    defaultSrc: '/images/flames25/flames25-stage-bassist.jpg',
    badge: 'Flames’25 Arena',
    title: 'Flames’25 Arena & Stage Production',
    caption: 'Live band performance featuring illuminated "FLAMES 25" stage backdrop banner, audio roadcase staging, and security barrier management.',
    filenameHint: 'IMG20251122214420.jpg.jpeg',
  },
];

export const EventsSection: React.FC<EventsSectionProps> = ({
  onOpenCaseStudy,
  onOpenImage,
}) => {
  const [customPhotos, setCustomPhotos] = useState<Record<string, string>>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_FLAMES25_PHOTOS_KEY);
      if (saved) return JSON.parse(saved);
    } catch (e) {
      console.warn('Could not read flames25 custom photos', e);
    }
    return {};
  });

  const [activeSlotUpload, setActiveSlotUpload] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const multiFileInputRef = useRef<HTMLInputElement>(null);

  const saveCustomPhoto = (slotId: string, dataUrl: string) => {
    setCustomPhotos((prev) => {
      const updated = { ...prev, [slotId]: dataUrl };
      try {
        localStorage.setItem(STORAGE_FLAMES25_PHOTOS_KEY, JSON.stringify(updated));
      } catch (e) {
        console.warn('Could not persist flames25 custom photo', e);
      }
      return updated;
    });
  };

  const handleSingleFile = (slotId: string, file: File) => {
    if (!file.type.startsWith('image/')) {
      alert('Please upload a valid image file (JPG, PNG, WEBP).');
      return;
    }
    const reader = new FileReader();
    reader.onload = (e) => {
      const result = e.target?.result as string;
      if (result) saveCustomPhoto(slotId, result);
    };
    reader.readAsDataURL(file);
  };

  const handleBatchFiles = (files: FileList | File[]) => {
    const fileArray = Array.from(files);
    fileArray.forEach((file) => {
      const name = file.name.toLowerCase();
      // Match by filename keywords if possible, otherwise by order
      let targetSlot = FLAMES25_SLOTS[0].id;
      if (name.includes('trap') || name.includes('195920') || name.includes('20251123')) {
        targetSlot = 'trap-live';
      } else if (name.includes('team') || name.includes('whatsapp') || name.includes('01.28.32') || name.includes('945b6958')) {
        targetSlot = 'core-team';
      } else if (name.includes('bassist') || name.includes('214420') || name.includes('img20251122')) {
        targetSlot = 'stage-bassist';
      }

      const reader = new FileReader();
      reader.onload = (e) => {
        const res = e.target?.result as string;
        if (res) saveCustomPhoto(targetSlot, res);
      };
      reader.readAsDataURL(file);
    });
  };

  return (
    <section id="events" className="py-24 border-b editorial-border bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Hidden inputs for uploading photo files */}
        <input
          type="file"
          ref={fileInputRef}
          accept="image/*"
          className="hidden"
          onChange={(e) => {
            const file = e.target.files?.[0];
            if (file && activeSlotUpload) {
              handleSingleFile(activeSlotUpload, file);
              setActiveSlotUpload(null);
            }
          }}
        />
        <input
          type="file"
          ref={multiFileInputRef}
          accept="image/*"
          multiple
          className="hidden"
          onChange={(e) => {
            if (e.target.files && e.target.files.length > 0) {
              handleBatchFiles(e.target.files);
            }
          }}
        />

        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="text-xs uppercase font-mono tracking-widest text-[#C85A32] font-semibold">
            Core Discipline 01
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#141210]">
            Event Management &amp; Operations
          </h2>
          <p className="text-base sm:text-lg text-[#3D352E] font-normal leading-relaxed">
            Leading high-intensity festival environments through methodical planning, crowd safety perimeters, backstage artist logistics, and vendor coordination.
          </p>
        </div>

        {/* Culrav Cultural Club Progressive Leadership Journey (2023 - 2026) */}
        <div className="mb-20 bg-white p-6 sm:p-8 rounded-2xl border editorial-border shadow-xs">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 pb-4 border-b editorial-border">
            <div>
              <span className="text-[10px] uppercase font-mono tracking-wider text-[#C85A32] font-bold block">
                Leadership Progression
              </span>
              <h3 className="text-xl font-bold text-[#141210]">
                Culrav Cultural Club Involvement (2023 – 2026)
              </h3>
            </div>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#2A5C55]/10 text-[#2A5C55] border border-[#2A5C55]/20 self-start sm:self-auto">
              <Shield className="w-3.5 h-3.5" />
              4 Consecutive Editions
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
            {CULRAV_TIMELINE.map((step, idx) => (
              <div
                key={step.year}
                className="relative bg-[#FAF8F5] p-5 rounded-xl border editorial-border flex flex-col justify-between hover:border-[#C85A32]/40 transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-mono font-bold text-[#C85A32]">{step.year}</span>
                    <span className="text-[10px] font-semibold text-[#3D352E]/60 uppercase tracking-wide">
                      Stage {idx + 1}
                    </span>
                  </div>
                  <h4 className="text-base font-bold text-[#141210] mb-1">{step.role}</h4>
                  <p className="text-xs font-medium text-[#C85A32] mb-2.5">{step.scope}</p>
                  <p className="text-xs text-[#3D352E] leading-relaxed">{step.details}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Detailed Event Case Cards */}
        <div className="space-y-12">
          <div className="flex items-center justify-between border-b editorial-border pb-3">
            <h3 className="text-xs font-mono uppercase tracking-wider text-[#141210] font-bold">
              Featured Festival Operations
            </h3>
            <span className="text-xs text-[#3D352E]/70 font-medium">Detailed Event Breakdowns</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {EVENTS_DATA.map((event) => {
              const isFlames25 = event.id === 'flames-25';

              return (
                <div
                  key={event.id}
                  className="bg-white rounded-2xl border editorial-border p-6 sm:p-8 flex flex-col justify-between shadow-xs hover:shadow-md transition-shadow"
                >
                  <div>
                    {/* Badge & Year */}
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span className="px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-[#C85A32]/10 text-[#C85A32] border border-[#C85A32]/20">
                        {event.badge}
                      </span>
                      <span className="text-xs font-mono text-[#3D352E]/70 flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5" />
                        {event.year}
                      </span>
                    </div>

                    {/* Title & Role */}
                    <h4 className="text-2xl font-bold text-[#141210] mb-1">{event.name}</h4>
                    <p className="text-xs font-semibold text-[#C85A32] mb-1">{event.role}</p>
                    <p className="text-xs text-[#3D352E]/70 mb-5 flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-[#3D352E]/50" />
                      {event.organization}
                    </p>

                    {/* Structured Details */}
                    <div className="space-y-3.5 text-xs text-[#3D352E] mb-6">
                      <div>
                        <strong className="block text-[11px] uppercase tracking-wider text-[#141210] font-bold mb-0.5">
                          Key Responsibilities:
                        </strong>
                        <p className="leading-relaxed">{event.responsibilities}</p>
                      </div>

                      <div>
                        <strong className="block text-[11px] uppercase tracking-wider text-[#141210] font-bold mb-0.5">
                          What I Worked On:
                        </strong>
                        <p className="leading-relaxed">{event.workedOn}</p>
                      </div>

                      <div className="p-3 bg-[#FAF8F5] rounded-lg border editorial-border">
                        <strong className="block text-[11px] uppercase tracking-wider text-[#2A5C55] font-bold mb-0.5">
                          Operational Takeaway:
                        </strong>
                        <p className="leading-relaxed italic">{event.learnings}</p>
                      </div>
                    </div>

                    {/* Gallery Preview Thumbnails - Custom Authentic Showcase for Flames'25 */}
                    {isFlames25 ? (
                      <div className="mb-6 space-y-3">
                        <div className="flex items-center justify-between text-[11px] font-bold uppercase tracking-wider text-[#141210]">
                          <span className="flex items-center gap-1.5">
                            <ImageIcon className="w-3.5 h-3.5 text-[#C85A32]" />
                            Flames’25 Live Event Photos
                          </span>
                          <button
                            type="button"
                            onClick={() => multiFileInputRef.current?.click()}
                            className="text-[10px] font-semibold text-[#C85A32] hover:underline flex items-center gap-1"
                            title="Upload original festival photo files from device"
                          >
                            <UploadCloud className="w-3.5 h-3.5" />
                            <span>Upload / Sync Photos</span>
                          </button>
                        </div>

                        {/* 3 Dedicated Real Photo Slots */}
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                          {FLAMES25_SLOTS.map((slot) => {
                            const activeSrc = customPhotos[slot.id] || slot.defaultSrc;
                            const hasCustom = Boolean(customPhotos[slot.id]);

                            return (
                              <div
                                key={slot.id}
                                className="group relative rounded-xl border editorial-border overflow-hidden bg-[#F4EFEA] flex flex-col justify-between transition hover:border-[#C85A32]/60 hover:shadow-md"
                              >
                                {/* Photo Container */}
                                <div
                                  onClick={() => onOpenImage(activeSrc, slot.caption)}
                                  className="relative aspect-[4/3] w-full overflow-hidden cursor-pointer bg-neutral-900"
                                >
                                  <img
                                    src={activeSrc}
                                    alt={slot.title}
                                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                                    onError={(e) => {
                                      // If the local path is not yet populated, provide a stylized fallback preview
                                      const target = e.currentTarget;
                                      target.style.display = 'none';
                                    }}
                                  />

                                  {/* Overlay Badge */}
                                  <div className="absolute top-2 left-2 z-10 px-2 py-0.5 rounded-full bg-black/75 text-white backdrop-blur-xs text-[9px] font-bold tracking-wider uppercase">
                                    {slot.badge}
                                  </div>

                                  {/* Hover Inspect Icon */}
                                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
                                    <Eye className="w-5 h-5 text-white" />
                                  </div>
                                </div>

                                {/* Slot Caption & Individual Upload Trigger */}
                                <div className="p-2.5 bg-white border-t editorial-border flex items-center justify-between gap-2 text-[10px]">
                                  <div className="truncate">
                                    <p className="font-bold text-[#141210] truncate">{slot.title}</p>
                                    <p className="text-[#3D352E]/60 text-[9px] truncate font-mono">{slot.filenameHint}</p>
                                  </div>

                                  <button
                                    type="button"
                                    onClick={(e) => {
                                      e.stopPropagation();
                                      setActiveSlotUpload(slot.id);
                                      fileInputRef.current?.click();
                                    }}
                                    className="p-1 rounded-md bg-[#FAF8F5] hover:bg-[#C85A32] hover:text-white text-[#3D352E] border editorial-border transition shrink-0"
                                    title={`Replace photo for ${slot.badge}`}
                                  >
                                    <Camera className="w-3 h-3" />
                                  </button>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    ) : (
                      /* Standard Gallery for other events */
                      <div className="mb-6">
                        <div className="flex items-center justify-between text-[11px] font-bold uppercase tracking-wider text-[#141210] mb-2">
                          <span className="flex items-center gap-1">
                            <ImageIcon className="w-3.5 h-3.5 text-[#C85A32]" />
                            On-Ground Photos
                          </span>
                          <span className="text-[#3D352E]/60 text-[10px]">Click to inspect</span>
                        </div>

                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                          {event.gallery.map((img, i) => (
                            <div
                              key={i}
                              onClick={() => onOpenImage(img.src, `${event.name}: ${img.caption}`)}
                              className="group relative aspect-video sm:aspect-square rounded-lg overflow-hidden cursor-pointer border editorial-border bg-[#F4EFEA]"
                            >
                              <img
                                src={img.src}
                                alt={img.caption}
                                className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                              />
                              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                <Eye className="w-4 h-4 text-white" />
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {event.tags.map((t) => (
                        <span
                          key={t}
                          className="px-2.5 py-0.5 rounded-full text-[10px] font-medium bg-[#FAF8F5] border editorial-border text-[#3D352E]"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Case Study Modal Trigger */}
                  <button
                    onClick={() => onOpenCaseStudy(event)}
                    className="w-full py-2.5 px-4 rounded-xl border editorial-border text-xs font-bold uppercase tracking-wider text-[#141210] hover:bg-[#231F1C] hover:text-white hover:border-[#231F1C] transition-all flex items-center justify-center gap-2 group"
                  >
                    <span>Read Full Event Case Study</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </button>

                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};
