import React from 'react';
import { ArrowDown, MessageCircle, Users, MapPin, Trophy, MessageSquare } from 'lucide-react';
import { getWhatsAppUrl } from '../config/contact';
import { conferenceMetrics } from '../data/pricing';

export const Hero: React.FC = () => {
  const whatsAppUrl = getWhatsAppUrl(
    'Hello KRITI 2027 Organisers, we are interested in exploring academic partnership and sponsorship opportunities for KRITI.'
  );

  const getMetricIcon = (iconName: string) => {
    switch (iconName) {
      case 'Users':
        return <Users className="w-5 h-5 text-[#e5483c]" />;
      case 'MapPin':
        return <MapPin className="w-5 h-5 text-[#e5483c]" />;
      case 'Trophy':
        return <Trophy className="w-5 h-5 text-[#e5483c]" />;
      case 'MessageSquare':
        return <MessageSquare className="w-5 h-5 text-[#e5483c]" />;
      default:
        return <Users className="w-5 h-5 text-[#e5483c]" />;
    }
  };

  return (
    <section className="relative pt-28 sm:pt-36 pb-16 sm:pb-24 px-4 sm:px-6 overflow-hidden border-b border-[#2a2a2a]">
      {/* Background Blueprint Grid & Radial Glow (Fixed offset to prevent CLS) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="absolute inset-0 bg-blueprint-dashed opacity-25" />
        <div
          className="absolute top-24 left-1/2 -translate-x-1/2 w-[600px] h-[350px] max-w-[90vw] bg-[radial-gradient(ellipse_at_center,rgba(189,40,38,0.15)_0%,transparent_70%)]"
          style={{ contain: 'paint layout size' }}
        />
      </div>

      <div className="max-w-[1240px] mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Main Hero Column (Cols 1-8) */}
          <div className="lg:col-span-8 flex flex-col items-start">
            {/* Tactical Eyebrow */}
            <div className="inline-flex items-center gap-2 px-2.5 py-1 mb-5 sm:mb-6 border border-[#2a2a2a] bg-[#141414] font-mono text-[11px] sm:text-[12px] tracking-[0.12em] uppercase text-[#e5483c]">
              <span className="w-2 h-2 rounded-full bg-[#e5483c] animate-beat shrink-0" aria-hidden="true" />
              <span>KAKATIYA MEDICAL COLLEGE · WARANGAL</span>
              <span className="text-[#a39e93] hidden sm:inline" aria-hidden="true">·</span>
              <span className="text-[#a39e93] hidden sm:inline font-mono">ANNUAL CONFERENCE</span>
            </div>

            {/* Institution Subtitle */}
            <p className="font-mono text-[11px] sm:text-[12px] tracking-[0.14em] uppercase text-[#a39e93] mb-2 sm:mb-3">
              <span aria-hidden="true" className="text-[#e5483c] mr-1.5">[⊠]</span>
              KAKATIYA RESEARCH INITIATIVE FOR TRANSFORMATIVE INNOVATIONS
            </p>

            {/* Main Headline */}
            <h1 className="font-display text-[38px] sm:text-[54px] md:text-[66px] lg:text-[74px] font-bold text-[#faf6ec] leading-[0.98] tracking-[0.01em] uppercase mb-5 sm:mb-6">
              Partner with KRITI<span className="text-[#e5483c]">.</span>
              <br />
              <span className="text-[#d4cdbc]">Shape Healthcare Innovation.</span>
            </h1>

            {/* Supporting Copy */}
            <p className="font-body text-[16px] sm:text-[18px] md:text-[20px] text-[#aaa497] leading-[1.5] max-w-[680px] mb-8">
              A universal sponsorship prospectus for healthcare enterprises, medical technology brands, pharmaceutical pioneers, and academic organizations. Engage directly with over 2,000 medical students, clinicians, residents, interns, and healthcare researchers across India.
            </p>

            {/* Primary Action Buttons (Strictly Zero Forms) */}
            <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto mb-10">
              <a
                href="#packages"
                className="focus-ring flex items-center justify-center gap-2 px-6 py-3.5 bg-[#bd2826] hover:bg-[#a6211f] text-white font-mono text-[13px] tracking-[0.1em] uppercase font-bold transition-all duration-150 shadow-[0_0_20px_rgba(189,40,38,0.3)] hover:shadow-[0_0_28px_rgba(189,40,38,0.5)] no-underline w-full sm:w-auto"
                id="hero-view-packages-cta"
              >
                <span>View Sponsorship Packages</span>
                <ArrowDown className="w-4 h-4" />
              </a>

              <a
                href={whatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="focus-ring flex items-center justify-center gap-2 px-6 py-3.5 border border-[#25D366]/40 hover:border-[#25D366] bg-[#25D366]/10 hover:bg-[#25D366]/20 text-[#faf6ec] font-mono text-[13px] tracking-[0.08em] uppercase transition-all duration-150 no-underline w-full sm:w-auto group shadow-[0_0_12px_rgba(37,211,102,0.1)] hover:shadow-[0_0_20px_rgba(37,211,102,0.25)]"
                id="hero-whatsapp-cta"
                aria-label="Enquire via WhatsApp"
              >
                <MessageCircle className="w-4 h-4 text-[#25D366] group-hover:scale-110 transition-transform" />
                <span>Enquire via WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Right Highlights Column (Cols 9-12) */}
          <div className="lg:col-span-4 flex flex-col gap-3">
            <div className="font-mono text-[11px] uppercase tracking-[0.12em] text-[#a39e93] mb-1 flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-[#e5483c]" />
              <span>CONFERENCE AT A GLANCE</span>
            </div>

            {conferenceMetrics.map((metric, i) => (
              <div
                key={i}
                className="border border-[#2a2a2a] bg-[#141414]/90 p-4 corner-frame hover:border-[#3a3a3a] transition-colors"
              >
                <div className="flex items-center gap-3 mb-1">
                  <div className="p-1.5 border border-[#2a2a2a] bg-[#0f0f0f]">
                    {getMetricIcon(metric.iconName)}
                  </div>
                  <span className="font-display text-[26px] sm:text-[30px] font-bold text-[#faf6ec] leading-none">
                    {metric.value}
                  </span>
                </div>
                <div className="font-mono text-[12px] uppercase text-[#d4cdbc] tracking-wider font-semibold">
                  {metric.label}
                </div>
                <div className="font-body text-[13px] text-[#a39e93] mt-0.5 leading-snug">
                  {metric.subtext}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
