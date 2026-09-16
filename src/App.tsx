import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { EventsSection } from './components/EventsSection';
import { MarketingSection } from './components/MarketingSection';
import { UiUxSection } from './components/UiUxSection';
import { WritingSection } from './components/WritingSection';
import { ProjectsSection } from './components/ProjectsSection';
import { SkillsSection } from './components/SkillsSection';
import { ResumeSection } from './components/ResumeSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

import { ArticleReaderModal } from './components/ArticleReaderModal';
import { AddWritingModal } from './components/AddWritingModal';
import { CaseStudyModal } from './components/CaseStudyModal';
import { LightboxModal } from './components/LightboxModal';

import { INITIAL_WRITINGS } from './data/initialData';
import {
  WritingItem,
  EventItem,
  UiUxProject,
  ProjectSummary,
  CaseStudyData,
  LightboxData,
} from './types';

const STORAGE_KEY = 'atanu_portfolio_writings_v2';

export default function App() {
  const [writings, setWritings] = useState<WritingItem[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        return JSON.parse(saved);
      }
    } catch (err) {
      console.warn('Failed reading writings from localStorage', err);
    }
    return INITIAL_WRITINGS;
  });

  const [activeArticle, setActiveArticle] = useState<WritingItem | null>(null);
  const [isAddWritingOpen, setIsAddWritingOpen] = useState(false);
  const [activeCaseStudy, setActiveCaseStudy] = useState<CaseStudyData | null>(null);
  const [lightbox, setLightbox] = useState<LightboxData>({
    isOpen: false,
    src: '',
    caption: '',
  });

  const handleAddWriting = (newPiece: WritingItem) => {
    const updated = [newPiece, ...writings];
    setWritings(updated);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    } catch (err) {
      console.warn('Failed saving writings to localStorage', err);
    }
  };

  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Convert an EventItem into universal CaseStudyData
  const handleOpenEventCaseStudy = (event: EventItem) => {
    setActiveCaseStudy({
      title: `${event.name} — ${event.role}`,
      category: 'Events & Operations',
      overview: `${event.organization} (${event.year})`,
      objective: `Execute high-capacity festival logistics, guarantee emergency vehicle and crowd routing, and establish clear operational command channels.`,
      challenge: `Mitigating sudden crowd surges during evening headliner transitions while coordinating audio/lighting logistics under tight university time windows.`,
      approach: `Designed a zone-based perimeter grid dividing backstage, VIP, food concourses, and general lawns. Trained volunteers on distinct radio callsigns.`,
      execution: event.workedOn,
      outcome: `Flawless festival safety compliance, zero safety incidents reported, and swift artist green-room turnaround across all performance days.`,
      learnings: event.learnings,
    });
  };

  // Convert a UiUxProject into universal CaseStudyData
  const handleOpenUiUxCaseStudy = (project: UiUxProject) => {
    setActiveCaseStudy({
      title: project.title,
      category: 'UI/UX Design',
      overview: `${project.category} · ${project.platform}`,
      objective: `Eliminate on-ground communication lag by providing volunteers with a high-contrast, thumb-accessible dispatch interface.`,
      challenge: project.problem,
      approach: `Studied on-ground volunteer behavior during Flames’24, prioritizing single-tap affirmations and high sunlight legibility over unnecessary UI decor.`,
      execution: `Created user flow diagrams, low-fidelity wireframes, and interactive component states focusing on immediate visual feedback and audio haptic cues.`,
      outcome: `Interactive prototype completed with zero redundant interaction layers, verified against usability benchmarks for high-stress event environments.`,
      learnings: project.learnings,
    });
  };

  // Handle click on Selected Work cards
  const handleSelectProject = (project: ProjectSummary) => {
    if (project.category === 'content') {
      const match = writings.find((w) => w.title.toLowerCase().includes(project.title.toLowerCase())) || writings[0];
      setActiveArticle(match);
      return;
    }

    if (project.id === 'proj-flames25' || project.id === 'proj-food-vendor') {
      setActiveCaseStudy({
        title: project.title,
        category: 'Events & Operations',
        overview: project.desc,
        objective: 'Streamline multi-tier festival operations and guarantee safety protocols.',
        challenge: 'Synchronizing vendor stalls, electricity, and crowd movement corridors.',
        approach: 'Pre-event spatial layout blueprints, volunteer rosters, and emergency dispatch points.',
        execution: 'Continuous on-ground monitoring and immediate conflict resolution with vendors.',
        outcome: 'Smooth crowd throughput, on-time stage sequences, and zero logistical disruptions.',
        learnings: 'Proactive spatial planning prevents 90% of on-ground friction.',
      });
      return;
    }

    if (project.category === 'marketing') {
      setActiveCaseStudy({
        title: project.title,
        category: 'Digital Marketing',
        overview: project.desc,
        objective: 'Drive authentic attendee registrations and multi-channel festival engagement.',
        challenge: 'Capturing student attention in an overcrowded digital noise environment with zero paid ad budget.',
        approach: 'A phased countdown narrative with mystery artist teasers and practical attendee guides.',
        execution: 'Coordinated social reels, carousel graphics, and WhatsApp community broadcast channels.',
        outcome: 'High organic engagement rate across colleges in Kolkata and rapid ticket/pass uptake.',
        learnings: 'Clear logistics guides outperform generic marketing buzzwords.',
      });
      return;
    }

    if (project.category === 'uiux') {
      setActiveCaseStudy({
        title: project.title,
        category: 'UI/UX Design',
        overview: project.desc,
        objective: 'Design a streamlined volunteer dispatch application for live event scenarios.',
        challenge: 'Noisy, bright outdoor conditions where typical smartphone notifications fail.',
        approach: 'High-contrast palette, thumb-reachable trigger zones, and instant haptic confirmations.',
        execution: 'Architected wireframes and user flow journeys validated by event volunteer interviews.',
        outcome: 'Clean, production-ready prototype ready for operational trial.',
        learnings: 'Interface simplicity under pressure is the ultimate design metric.',
      });
      return;
    }

    if (project.id === 'proj-ultrahuman-qc') {
      setActiveCaseStudy({
        title: 'Ultrahuman Facility — Quality Control Operations',
        category: 'Operations & SOPs',
        overview: project.desc,
        objective: 'Ensure zero-defect manufacturing accuracy and rigorous SOP compliance.',
        challenge: 'High-volume production lines demanding precision inspection under tight turnaround schedules.',
        approach: 'Methodical verification checklists, optical tolerance checks, and real-time defect reporting.',
        execution: 'Executing thorough quality assurance on finished hardware components and managing inspection logs.',
        outcome: 'Consistent adherence to manufacturing standards and zero customer-returned batch issues.',
        learnings: 'Small millimeter tolerances determine the durability of entire hardware ecosystems.',
      });
      return;
    }
  };

  const handleOpenImage = (src: string, caption: string) => {
    setLightbox({
      isOpen: true,
      src,
      caption,
    });
  };

  return (
    <div className="min-h-screen flex flex-col font-sans bg-[#FAF8F5] text-[#141210]">
      {/* Navigation */}
      <Navbar onWorkTogetherClick={scrollToContact} />

      {/* Main Content Sections */}
      <main className="flex-1">
        <Hero onContactClick={scrollToContact} />
        <About />
        <EventsSection
          onOpenCaseStudy={handleOpenEventCaseStudy}
          onOpenImage={handleOpenImage}
        />
        <MarketingSection />
        <UiUxSection onOpenCaseStudy={handleOpenUiUxCaseStudy} />
        <WritingSection
          writings={writings}
          onOpenArticle={(item) => setActiveArticle(item)}
          onOpenAddModal={() => setIsAddWritingOpen(true)}
        />
        <ProjectsSection onSelectProject={handleSelectProject} />
        <SkillsSection />
        <ResumeSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Modals */}
      <ArticleReaderModal
        article={activeArticle}
        onClose={() => setActiveArticle(null)}
      />

      <AddWritingModal
        isOpen={isAddWritingOpen}
        onClose={() => setIsAddWritingOpen(false)}
        onAddWriting={handleAddWriting}
      />

      <CaseStudyModal
        caseStudy={activeCaseStudy}
        onClose={() => setActiveCaseStudy(null)}
      />

      <LightboxModal
        data={lightbox}
        onClose={() => setLightbox({ isOpen: false, src: '', caption: '' })}
      />
    </div>
  );
}
