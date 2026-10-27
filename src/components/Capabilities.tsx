import React from 'react';
import { conferencePillars } from '../data/capabilities';
import { Cpu, Users, BookOpen, Layers, Award, Globe, ArrowRight } from 'lucide-react';

export const Capabilities: React.FC = () => {
  const getIcon = (id: string) => {
    switch (id) {
      case 'medical-hackathon':
        return <Cpu className="w-5 h-5 text-[#e5483c]" />;
      case 'campus-pr-tour':
        return <Users className="w-5 h-5 text-[#e5483c]" />;
      case 'academic-research':
        return <BookOpen className="w-5 h-5 text-[#e5483c]" />;
      case 'medtech-expo':
        return <Layers className="w-5 h-5 text-[#e5483c]" />;
      case 'kakatiya-chronicles':
        return <Award className="w-5 h-5 text-[#e5483c]" />;
      case 'global-network':
      default:
        return <Globe className="w-5 h-5 text-[#e5483c]" />;
    }
  };

  return (
    <section id="events" className="py-16 sm:py-24 px-4 sm:px-6 border-b border-[#2a2a2a] relative">
      <div className="max-w-[1240px] mx-auto">
        {/* Section Header */}
        <div className="mb-12 sm:mb-16">
          <div className="flex items-center gap-2 mb-2 font-mono text-[11px] sm:text-[12px] uppercase tracking-[0.14em] text-[#e5483c]">
            <span>[ 03 · CONFERENCE PILLARS & FLAGSHIP EVENTS ]</span>
          </div>
          <h2 className="font-display text-[32px] sm:text-[44px] md:text-[48px] font-bold text-[#faf6ec] uppercase tracking-[0.01em] leading-tight">
            Academic Excellence & Clinician Engagement<span className="text-[#e5483c]">.</span>
          </h2>
          <p className="font-body text-[15px] sm:text-[17px] text-[#aaa497] max-w-[700px] mt-3">
            KRITI unites clinical problem-solving, peer-reviewed medical investigations, and international mentorship. Partnering with KRITI embeds your brand in the heart of clinical innovation.
          </p>
        </div>

        {/* 6 Pillars Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {conferencePillars.map((item) => (
            <div
              key={item.id}
              className="corner-frame border border-[#2a2a2a] bg-[#141414] hover:bg-[#161616] p-6 flex flex-col justify-between transition-all duration-200 group hover:border-[#3a3a3a]"
            >
              <div>
                {/* Header Badge & Number */}
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2 border border-[#2a2a2a] bg-[#0f0f0f] group-hover:border-[#e5483c] transition-colors">
                    {getIcon(item.id)}
                  </div>
                  <span className="font-mono text-[12px] font-bold tracking-[0.12em] text-[#a39e93] group-hover:text-[#e5483c] transition-colors">
                    [{item.index}]
                  </span>
                </div>

                <div className="flex items-center gap-2 mb-2">
                  <span className="inline-block px-2 py-0.5 font-mono text-[10px] tracking-[0.1em] uppercase text-[#a39e93] bg-[#1a1a1a] border border-[#262626]">
                    {item.badge}
                  </span>
                  <span className="font-mono text-[10px] uppercase text-[#a8a396]">
                    {item.category}
                  </span>
                </div>

                <h3 className="font-display text-[22px] sm:text-[24px] font-bold text-[#faf6ec] uppercase leading-tight mb-3 group-hover:text-white transition-colors">
                  {item.title}
                </h3>

                <p className="font-body text-[14px] text-[#aaa497] leading-relaxed mb-6">
                  {item.description}
                </p>
              </div>

              {/* Impact Metric Footer */}
              <div className="pt-3 border-t border-[#2a2a2a] flex items-center justify-between">
                <span className="font-mono text-[11px] text-[#e5483c] font-semibold">
                  {item.impactMetric}
                </span>
                <ArrowRight className="w-4 h-4 text-[#a39e93] group-hover:text-[#faf6ec] group-hover:translate-x-1 transition-all" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
