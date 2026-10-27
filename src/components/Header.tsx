import React, { useState, useEffect } from 'react';
import { getWhatsAppUrl } from '../config/contact';
import { Menu, X, MessageCircle } from 'lucide-react';

export const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Packages', href: '#packages' },
    { label: 'Reach Estimator', href: '#estimator' },
    { label: 'Events & Tracks', href: '#events' },
    { label: 'Deliverables Matrix', href: '#matrix' },
    { label: 'FAQ', href: '#faq' },
  ];

  const whatsAppUrl = getWhatsAppUrl();

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        isScrolled
          ? 'bg-[#0f0f0f]/95 backdrop-blur-md border-b border-[#2a2a2a] py-3'
          : 'bg-[#0f0f0f]/80 backdrop-blur-sm border-b border-[#2a2a2a]/60 py-4'
      }`}
    >
      <div className="max-w-[1240px] mx-auto px-3 sm:px-6 flex items-center justify-between gap-2 sm:gap-4">
        {/* Brand Logo matching KRITI parent theme */}
        <a
          href="#"
          className="focus-ring inline-flex items-center gap-1 sm:gap-1.5 no-underline group select-none shrink-0"
        >
          <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-[#e5483c] group-hover:shadow-[0_0_8px_#e5483c] transition-all mr-0.5 animate-pulse" />
          <span className="font-display text-[22px] sm:text-[28px] font-bold tracking-[0.02em] text-[#faf6ec] group-hover:text-white transition-colors">
            kriti<span className="text-[#e5483c]">.</span>
          </span>
          <span className="text-[#a39e93] font-mono text-[13px] sm:text-[14px]" aria-hidden="true">
            ·
          </span>
          <span className="font-mono text-[12px] sm:text-[13px] tracking-[0.12em] sm:tracking-[0.14em] uppercase text-[#a39e93] group-hover:text-[#d4cdbc] transition-colors">
            2027
          </span>
          <span className="hidden md:inline-block ml-2 px-1.5 py-0.5 text-[10px] font-mono tracking-wider text-[#d4cdbc] border border-[#2a2a2a] bg-[#141414] uppercase">
            Sponsorships
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-6" aria-label="Main Navigation">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="focus-ring font-mono text-[13px] uppercase tracking-[0.12em] text-[#a8a396] hover:text-[#faf6ec] transition-colors py-1.5 no-underline relative group"
            >
              <span>{link.label}</span>
              <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#e5483c] group-hover:w-full transition-all duration-200" />
            </a>
          ))}
        </nav>

        {/* Right CTA Area: Official WhatsApp Contact */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          <a
            href={whatsAppUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="focus-ring inline-flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-4 py-1.5 sm:py-2 border border-[#25D366]/40 hover:border-[#25D366] bg-[#25D366]/10 hover:bg-[#25D366]/20 text-[#faf6ec] font-mono text-[11px] sm:text-[13px] tracking-[0.06em] sm:tracking-[0.08em] uppercase transition-all duration-150 group shadow-[0_0_12px_rgba(37,211,102,0.1)] hover:shadow-[0_0_16px_rgba(37,211,102,0.25)] no-underline"
            id="header-whatsapp-cta"
            aria-label="Contact KRITI Organisers on WhatsApp"
          >
            <MessageCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#25D366] group-hover:scale-110 transition-transform" />
            <span className="text-[#25D366] font-bold">WhatsApp</span>
          </a>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="focus-ring lg:hidden p-1.5 sm:p-2 text-[#d4cdbc] hover:text-[#faf6ec] border border-[#2a2a2a] bg-[#141414] hover:bg-[#1a1a1a] transition-colors"
            aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation"
          >
            {mobileMenuOpen ? <X className="w-4 h-4 sm:w-5 sm:h-5" /> : <Menu className="w-4 h-4 sm:w-5 sm:h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div
          id="mobile-navigation"
          className="lg:hidden bg-[#111111] border-b border-[#2a2a2a] px-4 py-5 animate-in slide-in-from-top-2 duration-150"
        >
          <nav className="flex flex-col gap-3" aria-label="Mobile Navigation">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="font-mono text-[14px] uppercase tracking-[0.14em] text-[#d4cdbc] hover:text-[#e5483c] py-2 px-3 border border-transparent hover:border-[#2a2a2a] hover:bg-[#161616] transition-all no-underline flex items-center justify-between"
              >
                <span>{link.label}</span>
                <span className="text-[#a39e93] text-xs">→</span>
              </a>
            ))}

            <div className="pt-3 border-t border-[#2a2a2a] mt-2">
              <a
                href={whatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-[#25D366] text-black font-mono text-[13px] font-bold tracking-[0.1em] uppercase hover:bg-[#20bd5a] transition-colors no-underline shadow-md"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
