import React, { useState, useMemo } from 'react';
import { getWhatsAppUrl } from '../config/contact';
import {
  Sliders,
  MessageCircle,
  Users,
  MapPin,
  Eye,
  Clock,
  Check,
  Sparkles,
  Award,
  CheckCircle2,
} from 'lucide-react';

interface EventTrackOption {
  id: string;
  name: string;
  code: string;
  category: string;
}

interface DeliverableOption {
  id: string;
  label: string;
  impactScore: number;
  stageMinutes?: number;
  category: string;
}

const AVAILABLE_TRACKS: EventTrackOption[] = [
  { id: 'hackathon', name: 'Medical Hackathon', code: 'EVT-01', category: 'Innovation' },
  { id: 'symposium', name: 'Medical Symposium', code: 'EVT-02', category: 'Plenary' },
  { id: 'medtech', name: 'Med-Tech Exhibition', code: 'EVT-03', category: 'Expo' },
  { id: 'debate', name: 'Med- Debate', code: 'EVT-04', category: 'Forensic' },
  { id: 'mun', name: 'Med-MUN', code: 'EVT-05', category: 'Policy' },
  { id: 'jeopardy', name: 'Medical Jeopardy', code: 'EVT-06', category: 'Quiz' },
  { id: 'papers', name: 'Scientific Papers (PG/UG)', code: 'EVT-07/08', category: 'Research' },
  { id: 'posters', name: 'Scientific Posters (PG/UG)', code: 'EVT-09/10', category: 'Clinical' },
  { id: 'workshops', name: 'Hands-on Workshops', code: 'EVT-11', category: 'Skills' },
];

const AVAILABLE_DELIVERABLES: DeliverableOption[] = [
  { id: 'keynote', label: 'Dedicated Mainstage Presence & LED Video Broadcast', impactScore: 20, category: 'Mainstage' },
  { id: 'booth', label: 'Three-Day Prime Exhibition Demo Booth', impactScore: 16, category: 'Exhibition' },
  { id: 'campus-tour', label: 'Campus PR Tour Feature (50+ Medical Colleges)', impactScore: 18, category: 'Statewide' },
  { id: 'souvenir', label: 'Partner Mention in Official KRITI Souvenir (Kakatiya Chronicles)', impactScore: 14, category: 'Publication' },
  { id: 'delegate-kit', label: 'Delegate Welcome Kit Inserts (2,000+ Medicos)', impactScore: 10, category: 'Collateral' },
];

export const CostEstimator: React.FC = () => {
  const [selectedTier, setSelectedTier] = useState<'title' | 'cohost' | 'exhibition'>('title');
  const [selectedTracks, setSelectedTracks] = useState<string[]>(['hackathon']);
  const [selectedDeliverables, setSelectedDeliverables] = useState<string[]>([
    'keynote',
    'booth',
    'campus-tour',
    'souvenir',
  ]);

  // Handle tier change with sensible default deliverables
  const handleTierChange = (tier: 'title' | 'cohost' | 'exhibition') => {
    setSelectedTier(tier);
    if (tier === 'title') {
      setSelectedDeliverables([
        'keynote',
        'booth',
        'campus-tour',
        'souvenir',
        'delegate-kit',
      ]);
      setSelectedTracks(['hackathon']);
    } else if (tier === 'cohost') {
      setSelectedDeliverables(['keynote', 'booth', 'campus-tour', 'souvenir']);
      setSelectedTracks(['hackathon']);
    } else {
      setSelectedDeliverables(['booth', 'souvenir']);
      setSelectedTracks([]);
    }
  };

  const toggleTrack = (id: string) => {
    setSelectedTracks((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const toggleDeliverable = (id: string) => {
    setSelectedDeliverables((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  // Dynamic calculations
  const tierName =
    selectedTier === 'title'
      ? 'Platinum Tier (Single Event Title Partner)'
      : selectedTier === 'cohost'
      ? 'Gold Tier (Co-Host Partner)'
      : 'Silver Tier (Exhibition Partner)';

  const stagePresence =
    selectedTier === 'title'
      ? '20-30 Minutes'
      : selectedTier === 'cohost'
      ? '10-15 Minutes'
      : 'Atrium Demo Only';

  // Dynamic Visibility & Engagement Score (Max 100)
  const visibilityScore = useMemo(() => {
    const tierBase = selectedTier === 'title' ? 45 : selectedTier === 'cohost' ? 32 : 20;
    const tracksScore = Math.min(selectedTracks.length * 4, 20);
    const deliverablesScore = Math.min(
      selectedDeliverables.reduce((acc, id) => {
        const item = AVAILABLE_DELIVERABLES.find((d) => d.id === id);
        return acc + (item ? item.impactScore * 0.4 : 0);
      }, 0),
      35
    );
    return Math.min(Math.round(tierBase + tracksScore + deliverablesScore), 100);
  }, [selectedTier, selectedTracks, selectedDeliverables]);

  const scoreLabel =
    visibilityScore >= 90
      ? 'MAXIMUM STATEWIDE DOMINANCE'
      : visibilityScore >= 75
      ? 'HIGH-IMPACT CO-HOST VISIBILITY'
      : visibilityScore >= 50
      ? 'STRONG TARGETED ENGAGEMENT'
      : 'ESSENTIAL EXHIBITION PRESENCE';

  // Dynamic WhatsApp prefilled message
  const trackNames = selectedTracks
    .map((id) => AVAILABLE_TRACKS.find((t) => t.id === id)?.name)
    .filter(Boolean)
    .join(', ');

  const deliverablesNames = selectedDeliverables
    .map((id) => AVAILABLE_DELIVERABLES.find((d) => d.id === id)?.label)
    .filter(Boolean)
    .slice(0, 4)
    .join('; ');

  const whatsAppUrl = getWhatsAppUrl(
    `Hello KRITI 2027 Organisers, using the Partnership Simulator, our organization configured a custom academic package: Base: ${tierName}${
      trackNames ? `, Endorsed Tracks: [${trackNames}]` : ''
    }, Key Inclusions: [${deliverablesNames}]. We would like to request the customized proposal and partnership details.`
  );

  return (
    <section id="estimator" className="py-16 sm:py-24 px-4 sm:px-6 border-b border-[#2a2a2a] relative">
      <div className="max-w-[1240px] mx-auto">
        {/* Section Header */}
        <div className="mb-12 sm:mb-16">
          <div className="flex items-center gap-2 mb-2 font-mono text-[11px] sm:text-[12px] uppercase tracking-[0.14em] text-[#e5483c]">
            <Sliders className="w-3.5 h-3.5" />
            <span>[ 02 · INTERACTIVE PARTNERSHIP & VISIBILITY SIMULATOR ]</span>
          </div>
          <h2 className="font-display text-[32px] sm:text-[44px] md:text-[48px] font-bold text-[#faf6ec] uppercase tracking-[0.01em] leading-tight">
            Configure Your Partnership Package<span className="text-[#e5483c]">.</span>
          </h2>
          <p className="font-body text-[15px] sm:text-[17px] text-[#aaa497] max-w-[760px] mt-3">
            Select your base conference tier, customize academic track endorsements across our 11 confirmed events, and toggle activation deliverables to simulate your organization’s multi-channel reach.
          </p>
        </div>

        {/* Visualizer Interactive Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Controls Column (Cols 1-7) */}
          <div className="lg:col-span-7 border border-[#2a2a2a] bg-[#141414] p-6 sm:p-8 corner-frame space-y-8">
            {/* Control 1: Base Tier Selection */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <label className="block font-mono text-[12px] text-[#faf6ec] uppercase tracking-[0.1em]">
                  1. Select Base Partnership Tier
                </label>
                <span className="font-mono text-[10px] text-[#a39e93] uppercase">Click to Select</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {[
                  { id: 'title', label: 'Platinum Tier', code: 'TIER-01 // PLATINUM', badge: 'Event Title Partner' },
                  { id: 'cohost', label: 'Gold Tier', code: 'TIER-02 // GOLD', badge: 'Co-Host Partner' },
                  { id: 'exhibition', label: 'Silver Tier', code: 'TIER-03 // SILVER', badge: '3-Day Atrium Booth' },
                ].map((item) => {
                  const isSelected = selectedTier === item.id;
                  return (
                    <button
                      key={item.id}
                      type="button"
                      aria-pressed={isSelected}
                      onClick={() => handleTierChange(item.id as 'title' | 'cohost' | 'exhibition')}
                      className={`py-3.5 px-3.5 border text-left cursor-pointer transition-all duration-150 ${
                        isSelected
                          ? 'border-[#e5483c] bg-[#1f1414] shadow-[0_0_15px_rgba(229,72,60,0.15)] ring-1 ring-[#e5483c]'
                          : 'border-[#2a2a2a] bg-[#0f0f0f] hover:border-[#3a3a3a]'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-mono text-[10px] text-[#e5483c] uppercase tracking-wider">
                          {item.code}
                        </span>
                        {isSelected && <Check className="w-3.5 h-3.5 text-[#25D366]" />}
                      </div>
                      <div className="font-display text-[17px] sm:text-[18px] font-bold text-[#faf6ec] leading-snug">
                        {item.label}
                      </div>
                      <div className="font-mono text-[10px] text-[#8e8a80] mt-1 uppercase">
                        {item.badge}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Control 2: Academic Event Track Endorsement Chips */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <label className="block font-mono text-[12px] text-[#faf6ec] uppercase tracking-[0.1em]">
                  2. Co-Sponsor Academic Event Tracks ({selectedTracks.length} Selected)
                </label>
                <span className="font-mono text-[10px] text-[#a39e93] uppercase">Toggle to Add/Remove</span>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {AVAILABLE_TRACKS.map((track) => {
                  const isSelected = selectedTracks.includes(track.id);
                  return (
                    <button
                      key={track.id}
                      type="button"
                      aria-pressed={isSelected}
                      onClick={() => toggleTrack(track.id)}
                      className={`p-2.5 border text-left cursor-pointer transition-all ${
                        isSelected
                          ? 'border-[#25D366] bg-[#0f1f14] text-[#faf6ec]'
                          : 'border-[#2a2a2a] bg-[#0f0f0f] text-[#8e8a80] hover:border-[#3a3a3a]'
                      }`}
                    >
                      <div className="flex items-center justify-between gap-1 mb-1">
                        <span className="font-mono text-[9px] uppercase tracking-wider text-[#f06459]">
                          {track.code}
                        </span>
                        {isSelected && <Check className="w-3 h-3 text-[#25D366]" />}
                      </div>
                      <div className="font-mono text-[11px] font-semibold leading-tight line-clamp-1">
                        {track.name}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Control 3: Custom Activation Deliverables Toggles */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <label className="block font-mono text-[12px] text-[#faf6ec] uppercase tracking-[0.1em]">
                  3. Customize Inclusions & Brand Deliverables ({selectedDeliverables.length} Active)
                </label>
                <span className="font-mono text-[10px] text-[#a39e93] uppercase">Interactive Inclusions</span>
              </div>
              <div className="space-y-2">
                {AVAILABLE_DELIVERABLES.map((deliverable) => {
                  const isChecked = selectedDeliverables.includes(deliverable.id);
                  return (
                    <button
                      key={deliverable.id}
                      type="button"
                      aria-pressed={isChecked}
                      onClick={() => toggleDeliverable(deliverable.id)}
                      className={`w-full p-2.5 sm:p-3 border text-left cursor-pointer transition-all flex items-center justify-between gap-3 ${
                        isChecked
                          ? 'border-[#e5483c]/60 bg-[#171212] text-[#faf6ec]'
                          : 'border-[#2a2a2a] bg-[#0f0f0f] text-[#a39e93] hover:border-[#3a3a3a]'
                      }`}
                    >
                      <div className="flex items-center gap-2.5">
                        <div
                          className={`w-4 h-4 border flex items-center justify-center transition-colors ${
                            isChecked
                              ? 'border-[#e5483c] bg-[#e5483c] text-white'
                              : 'border-[#3a3a3a] bg-[#141414]'
                          }`}
                        >
                          {isChecked && <Check className="w-3 h-3 stroke-[3]" />}
                        </div>
                        <span className="font-body text-[13px] sm:text-[14px]">
                          {deliverable.label}
                        </span>
                      </div>
                      <span className="font-mono text-[10px] uppercase text-[#a39e93] shrink-0 px-2 py-0.5 border border-[#2a2a2a] bg-[#0a0a0a]">
                        {deliverable.category}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Results Summary Card (Cols 8-12) */}
          <div className="lg:col-span-5 border border-[#e5483c]/50 bg-[#141414] p-6 sm:p-8 corner-frame shadow-[0_0_24px_rgba(229,72,60,0.1)] space-y-6">
            <div>
              <div className="font-mono text-[11px] uppercase tracking-[0.14em] text-[#e5483c] mb-1 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                <span>[ SIMULATED VISIBILITY & ENGAGEMENT ]</span>
              </div>
              <h3 className="font-display text-[24px] sm:text-[28px] font-bold text-[#faf6ec] uppercase leading-tight">
                {tierName}
              </h3>
            </div>

            {/* Dynamic Visibility Meter */}
            <div className="p-4 bg-[#0f0f0f] border border-[#2a2a2a]" aria-live="polite">
              <div className="flex items-center justify-between mb-2">
                <span className="font-mono text-[11px] text-[#a39e93] uppercase">
                  Visibility & Impact Index
                </span>
                <span className="font-mono text-[18px] font-bold text-[#faf6ec]">
                  {visibilityScore}
                  <span className="text-[12px] text-[#a39e93]"> / 100</span>
                </span>
              </div>
              {/* Progress Bar */}
              <div className="w-full bg-[#1c1c1c] h-2.5 overflow-hidden border border-[#2a2a2a]">
                <div
                  className="h-full transition-all duration-300 ease-out bg-gradient-to-r from-[#bd2826] via-[#e5483c] to-[#25D366]"
                  style={{ width: `${visibilityScore}%` }}
                />
              </div>
              <div className="font-mono text-[10px] text-[#25D366] mt-2 flex items-center gap-1.5 font-bold uppercase tracking-wider">
                <CheckCircle2 className="w-3 h-3 text-[#25D366]" />
                <span>{scoreLabel}</span>
              </div>
            </div>

            {/* Academic Proposal Status Box */}
            <div className="p-4 bg-[#0f0f0f] border border-[#2a2a2a]">
              <div className="font-mono text-[10px] text-[#a39e93] uppercase tracking-wider">
                ACADEMIC PARTNERSHIP PROPOSAL & SCOPE
              </div>
              <div className="font-display text-[26px] sm:text-[30px] font-bold text-[#faf6ec] leading-tight uppercase mt-1">
                Pricing on Request
              </div>
              <div className="font-mono text-[11px] text-[#aaa497] mt-1">
                Customized MoU & Institutional Deliverables via Organisers
              </div>
            </div>

            {/* Projected Metrics Breakdown */}
            <div className="space-y-3 pt-2">
              <div className="flex items-center justify-between border-b border-[#2a2a2a] pb-2.5">
                <div className="flex items-center gap-2 text-[13px] text-[#aaa497]">
                  <Users className="w-4 h-4 text-[#e5483c]" />
                  <span>Direct Medico Interactions</span>
                </div>
                <div className="font-mono text-[14px] text-[#faf6ec] font-bold">
                  2,000+ Medicos & Faculty
                </div>
              </div>

              <div className="flex items-center justify-between border-b border-[#2a2a2a] pb-2.5">
                <div className="flex items-center gap-2 text-[13px] text-[#aaa497]">
                  <Clock className="w-4 h-4 text-[#e5483c]" />
                  <span>Plenary Mainstage Exposure</span>
                </div>
                <div className="font-mono text-[14px] text-[#faf6ec] font-bold">
                  {stagePresence}
                </div>
              </div>

              <div className="flex items-center justify-between border-b border-[#2a2a2a] pb-2.5">
                <div className="flex items-center gap-2 text-[13px] text-[#aaa497]">
                  <Award className="w-4 h-4 text-[#e5483c]" />
                  <span>Endorsed Academic Tracks</span>
                </div>
                <div className="font-mono text-[14px] text-[#faf6ec] font-bold">
                  {selectedTracks.length} Tracks Selected
                </div>
              </div>

              <div className="flex items-center justify-between border-b border-[#2a2a2a] pb-2.5">
                <div className="flex items-center gap-2 text-[13px] text-[#aaa497]">
                  <MapPin className="w-4 h-4 text-[#e5483c]" />
                  <span>Campus PR Tour Outreach</span>
                </div>
                <div className="font-mono text-[14px] text-[#faf6ec] font-bold">
                  {selectedDeliverables.includes('campus-tour') ? '50+ Medical Colleges' : 'Atrium Foothold'}
                </div>
              </div>

              <div className="flex items-center justify-between border-b border-[#2a2a2a] pb-2.5">
                <div className="flex items-center gap-2 text-[13px] text-[#aaa497]">
                  <Eye className="w-4 h-4 text-[#e5483c]" />
                  <span>Followers & Reach</span>
                </div>
                <div className="font-mono text-[14px] text-[#faf6ec] font-bold">
                  10k+ Followers
                </div>
              </div>
            </div>

            {/* Direct WhatsApp Action Button (Strictly Zero Forms) */}
            <div className="pt-2">
              <a
                href={whatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-3.5 px-4 bg-[#25D366] hover:bg-[#20bd5a] text-black font-mono text-[13px] tracking-[0.08em] uppercase font-bold transition-all no-underline shadow-md"
                id="estimator-whatsapp-cta"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Discuss This Package on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
