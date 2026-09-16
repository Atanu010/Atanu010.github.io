import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { PERSONAL_INFO } from '../data/initialData';

interface NavbarProps {
  onWorkTogetherClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onWorkTogetherClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Events & Ops', href: '#events' },
    { name: 'Marketing', href: '#marketing' },
    { name: 'UI/UX', href: '#uiux' },
    { name: 'Writing', href: '#writing' },
    { name: 'Projects', href: '#projects' },
    { name: 'Resume', href: '#resume' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      id="main-header"
      className={`sticky top-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#FAF8F5]/95 backdrop-blur-md shadow-sm border-b editorial-border'
          : 'bg-[#FAF8F5]/85 backdrop-blur-sm border-b editorial-border'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Brand identity */}
        <a href="#home" className="group flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-[#231F1C] text-[#FAF8F5] flex items-center justify-center font-serif text-lg font-bold group-hover:bg-[#C85A32] transition-colors shadow-sm">
            A
          </div>
          <div className="leading-tight">
            <span className="font-bold text-base tracking-tight text-[#141210] block group-hover:text-[#C85A32] transition-colors">
              {PERSONAL_INFO.name}
            </span>
            <span className="text-[11px] text-[#3D352E]/70 font-medium tracking-wide">
              Events · Marketing · UI/UX · Content
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden xl:flex items-center gap-6 text-[11px] font-semibold uppercase tracking-wider text-[#3D352E]">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="hover:text-[#C85A32] transition-colors py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#C85A32] hover:after:w-full after:transition-all"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* CTA & Mobile Trigger */}
        <div className="flex items-center gap-4">
          <button
            onClick={onWorkTogetherClick}
            className="hidden sm:inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full text-xs font-semibold tracking-wide text-white bg-[#231F1C] hover:bg-[#C85A32] transition-all duration-300 shadow-sm hover:shadow"
          >
            <span>Let's Work Together</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden p-2 rounded-lg text-[#231F1C] hover:bg-[#E6DDD5] transition"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden border-b editorial-border bg-[#FAF8F5] px-6 py-6 space-y-3">
          <nav className="flex flex-col gap-2.5 text-sm font-semibold tracking-wide text-[#231F1C]">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-1.5 px-2 rounded-md hover:bg-[#F4EFEA] hover:text-[#C85A32] transition-colors"
              >
                {link.name}
              </a>
            ))}
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onWorkTogetherClick();
              }}
              className="w-full py-3 mt-2 text-center rounded-full bg-[#C85A32] hover:bg-[#B04C27] text-white font-bold text-xs uppercase tracking-wider shadow"
            >
              Let's Work Together
            </button>
          </nav>
        </div>
      )}
    </header>
  );
};
