import React, { useState } from 'react';
import { sponsorshipTiers, academicTracks } from '../data/pricing';
import { getTierWhatsAppUrl, getWhatsAppUrl } from '../config/contact';
import { Check, MessageCircle, Star, ArrowRight } from 'lucide-react';

export const PricingTiers: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'packages' | 'tracks'>('packages');

  return (
    <section id="packages" className="py-16 sm:py-24 px-4 sm:px-6 border-b border-[#2a2a2a] relative">
      <div className="max-w-[1240px] mx-auto">
        {/* Section Header */}
        <div className="mb-10 sm:mb-14 text-center max-w-[820px] mx-auto">
          <div className="inline-flex items-center gap-2 mb-2 font-mono text-[11px] sm:text-[12px] uppercase tracking-[0.14em] text-[#e5483c]">
            <span>[ 01 · SPONSORSHIP PACKAGES & TRACKS ]</span>
          </div>
          <h2 className="font-display text-[32px] sm:text-[46px] md:text-[52px] font-bold text-[#faf6ec] uppercase tracking-[0.01em] leading-tight">
            Academic Packages & Event Tracks<span className="text-[#e5483c]">.</span>
          </h2>
          <p className="font-body text-[15px] sm:text-[18px] text-[#aaa497] mt-3">
            Select an institutional tier for premier brand integration and statewide PR reach, or endorse individual academic competition tracks across our 12 confirmed conference events.
          </p>

          {/* View Tab Switcher */}
          <div
            role="tablist"
            aria-label="Sponsorship Options"
            className="mt-8 flex flex-col xs:inline-flex xs:flex-row items-stretch xs:items-center p-1 border border-[#2a2a2a] bg-[#141414] max-w-full"
          >
            <button
              type="button"
              role="tab"
              id="tab-packages"
              aria-controls="panel-packages"
              aria-selected={activeTab === 'packages'}
              onClick={() => setActiveTab('packages')}
              className={`px-3 sm:px-5 py-2 sm:py-2.5 font-mono text-[11px] sm:text-[12px] uppercase tracking-[0.08em] sm:tracking-[0.1em] transition-all cursor-pointer text-center ${
                activeTab === 'packages'
                  ? 'bg-[#bd2826] text-[#faf6ec] font-bold shadow-sm'
                  : 'text-[#a39e93] hover:text-[#d4cdbc]'
              }`}
            >
              Conference Packages (3 Tiers)
            </button>
            <button
              type="button"
              role="tab"
              id="tab-tracks"
              aria-controls="panel-tracks"
              aria-selected={activeTab === 'tracks'}
              onClick={() => setActiveTab('tracks')}
              className={`px-3 sm:px-5 py-2 sm:py-2.5 font-mono text-[11px] sm:text-[12px] uppercase tracking-[0.08em] sm:tracking-[0.1em] transition-all cursor-pointer flex items-center justify-center gap-1.5 text-center ${
                activeTab === 'tracks'
                  ? 'bg-[#bd2826] text-[#faf6ec] font-bold shadow-sm'
                  : 'text-[#a39e93] hover:text-[#d4cdbc]'
              }`}
            >
              <span>12 Academic Event Tracks</span>
              <span className="text-[9px] sm:text-[10px] px-1.5 py-0.2 bg-[#0f0f0f] text-[#25D366] border border-[#2a2a2a] font-bold">
                12 CONFIRMED
              </span>
            </button>
          </div>
        </div>

        {/* Tab Content 1: 3 Commercial Sponsorship Tiers (Claude Code Layout Style) */}
        {activeTab === 'packages' && (
          <div
            id="panel-packages"
            role="tabpanel"
            aria-labelledby="tab-packages"
            className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 mb-12"
          >
            {sponsorshipTiers.map((tier) => {
              const whatsAppUrl = getTierWhatsAppUrl(tier.actionType);

              return (
                <div
                  key={tier.id}
                  id={`tier-card-${tier.id}`}
                  className={`flex flex-col justify-between border bg-[#141414] p-6 sm:p-7 relative transition-all duration-200 corner-frame ${
                    tier.isFlagship
                      ? 'border-[#e5483c] shadow-[0_0_30px_rgba(229,72,60,0.15)] ring-1 ring-[#e5483c]/50'
                      : 'border-[#2a2a2a] hover:border-[#3a3a3a]'
                  }`}
                >
                  {/* Flagship Top Badge */}
                  {tier.badge && (
                    <div
                      className={`absolute -top-3 left-6 px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-[0.12em] font-bold ${
                        tier.isFlagship
                          ? 'bg-[#bd2826] text-white shadow-sm'
                          : 'bg-[#1a1a1a] text-[#a8a396] border border-[#2a2a2a]'
                      }`}
                    >
                      {tier.badge}
                    </div>
                  )}

                  <div>
                    {/* Monospace Code */}
                    <div className="font-mono text-[11px] text-[#a39e93] tracking-[0.12em] uppercase mb-1">
                      {tier.code}
                    </div>

                    {/* Tier Name */}
                    <h3 className="font-display text-[26px] sm:text-[28px] font-bold text-[#faf6ec] uppercase leading-snug mb-1">
                      {tier.name}
                    </h3>

                    {/* Tagline */}
                    <p className="font-body text-[13px] text-[#aaa497] min-h-[38px] leading-snug mb-5">
                      {tier.tagline}
                    </p>

                    {/* Price Block */}
                    <div className="py-3.5 border-y border-[#2a2a2a] mb-5 bg-[#0f0f0f]/60 px-3 -mx-3">
                      <div className="flex items-baseline justify-between gap-2">
                        <span className="font-display text-[26px] sm:text-[30px] font-bold text-[#faf6ec] leading-none uppercase">
                          {tier.formattedPrice}
                        </span>
                        <span className="font-mono text-[10px] text-[#e5483c] uppercase font-bold px-2 py-0.5 border border-[#e5483c]/40 bg-[#1c1212]">
                          Enquire
                        </span>
                      </div>
                      <div className="font-mono text-[11px] text-[#d4cdbc] mt-2 flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 bg-[#e5483c]" />
                        <span>{tier.priceSubtext}</span>
                      </div>
                    </div>

                    {/* Overview description */}
                    <p className="font-body text-[14px] text-[#8e8a80] leading-relaxed mb-6">
                      {tier.overview}
                    </p>

                    {/* Deliverables Checklist */}
                    <div className="space-y-3 mb-6">
                      <div className="font-mono text-[11px] uppercase tracking-[0.1em] text-[#a39e93] mb-2">
                        INCLUDED DELIVERABLES:
                      </div>
                      {tier.keyFeatures.map((feature, idx) => (
                        <div key={idx} className="flex items-start gap-2.5 text-[13px] leading-snug">
                          <Check className="w-4 h-4 text-[#25D366] shrink-0 mt-0.5" />
                          <span className="text-[#d4cdbc]">{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* Limitations note */}
                    {tier.limitations && (
                      <div className="p-2.5 bg-[#0f0f0f] border border-[#2a2a2a] font-mono text-[11px] text-[#a39e93] mb-6">
                        <span className="text-[#e5483c] font-bold mr-1">NOTE:</span>
                        {tier.limitations}
                      </div>
                    )}
                  </div>

                  {/* WhatsApp Action Button (Strictly Zero Forms) */}
                  <div className="pt-2">
                    <a
                      href={whatsAppUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-full flex items-center justify-center gap-2 py-3 px-4 font-mono text-[12px] sm:text-[13px] tracking-[0.08em] uppercase font-bold transition-all no-underline ${
                        tier.isFlagship
                          ? 'bg-[#bd2826] hover:bg-[#a6211f] text-white shadow-[0_0_16px_rgba(189,40,38,0.3)]'
                          : 'border border-[#25D366]/40 hover:border-[#25D366] bg-[#25D366]/10 hover:bg-[#25D366]/20 text-[#faf6ec]'
                      }`}
                    >
                      <MessageCircle className="w-4 h-4 text-[#25D366] shrink-0" />
                      <span>{tier.actionText}</span>
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Tab Content 2: 12 Confirmed Academic Event Tracks */}
        {activeTab === 'tracks' && (
          <div id="panel-tracks" role="tabpanel" aria-labelledby="tab-tracks">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 mb-12">
              {academicTracks.map((track) => {
                const trackWhatsAppUrl = getWhatsAppUrl(
                  `Hello KRITI 2027 Organisers, we would like to explore sponsorship and endorsement rights for the ${track.name} (${track.category}).`
                );

                return (
                  <div
                    key={track.id}
                    className="border border-[#2a2a2a] bg-[#141414] p-5 sm:p-6 corner-frame hover:border-[#3a3a3a] transition-colors flex flex-col justify-between"
                  >
                    <div>
                      {/* Top Header */}
                      <div className="flex items-center justify-between gap-2 mb-2">
                        <span className="font-mono text-[11px] text-[#e5483c] uppercase tracking-wider">
                          {track.code}
                        </span>
                        <span className="px-2 py-0.5 border border-[#2a2a2a] bg-[#0f0f0f] font-mono text-[10px] text-[#a8a396] uppercase">
                          {track.targetAudience}
                        </span>
                      </div>

                      {/* Track Name */}
                      <h3 className="font-display text-[22px] sm:text-[24px] font-bold text-[#faf6ec] uppercase leading-tight mb-1">
                        {track.name}
                      </h3>
                      <div className="font-mono text-[11px] text-[#a39e93] uppercase tracking-wider mb-3">
                        Category: {track.category}
                      </div>

                      {/* Description */}
                      <p className="font-body text-[14px] text-[#aaa497] leading-relaxed mb-4">
                        {track.description}
                      </p>

                      {/* Deliverables */}
                      <div className="space-y-2 mb-6">
                        <div className="font-mono text-[10px] text-[#a39e93] uppercase tracking-wider">
                          PARTNER DELIVERABLES:
                        </div>
                        {track.deliverables.map((item, idx) => (
                          <div key={idx} className="flex items-start gap-2 text-[12px] text-[#d4cdbc]">
                            <span className="text-[#e5483c] font-mono text-[10px] shrink-0 mt-0.5">▶</span>
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* WhatsApp Action */}
                    <div className="pt-2 border-t border-[#2a2a2a]">
                      <a
                        href={trackWhatsAppUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full flex items-center justify-center gap-2 py-2.5 px-3 border border-[#2a2a2a] hover:border-[#25D366] bg-[#0f0f0f] hover:bg-[#181818] text-[#d4cdbc] hover:text-[#faf6ec] font-mono text-[12px] uppercase tracking-wider transition-colors no-underline group"
                      >
                        <MessageCircle className="w-3.5 h-3.5 text-[#25D366] group-hover:scale-110 transition-transform" />
                        <span>Endorse Track via WhatsApp</span>
                        <ArrowRight className="w-3.5 h-3.5 text-[#a39e93]" />
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Bottom Consultation Banner */}
        <div className="border border-[#2a2a2a] bg-[#141414] p-5 sm:p-6 flex flex-col sm:flex-row items-center justify-between gap-4 corner-frame">
          <div className="flex items-center gap-3">
            <div className="p-2 border border-[#2a2a2a] bg-[#0f0f0f] shrink-0">
              <Star className="w-5 h-5 text-[#e5483c]" />
            </div>
            <div>
              <div className="font-mono text-[13px] uppercase tracking-wider text-[#faf6ec] font-semibold">
                Custom Multi-Track & Exhibition Activations
              </div>
              <div className="font-body text-[13px] text-[#a39e93]">
                Combine exhibition space with academic track endorsements for tailored brand objectives.
              </div>
            </div>
          </div>

          <a
            href={getWhatsAppUrl('Hello KRITI 2027 Organisers, we would like to discuss a customized multi-track and exhibition package.')}
            target="_blank"
            rel="noopener noreferrer"
            className="focus-ring inline-flex items-center gap-2 px-5 py-2.5 border border-[#25D366]/40 hover:border-[#25D366] bg-[#25D366]/10 text-[#faf6ec] font-mono text-[12px] uppercase tracking-wider transition-all no-underline shrink-0"
          >
            <MessageCircle className="w-4 h-4 text-[#25D366]" />
            <span>Consult Organisers</span>
          </a>
        </div>
      </div>
    </section>
  );
};
