import React from 'react';
import { getWhatsAppUrl } from '../config/contact';
import { MessageCircle, ArrowRight } from 'lucide-react';

export const FinalCTA: React.FC = () => {
  const whatsAppUrl = getWhatsAppUrl(
    'Hello KRITI 2027 Organisers, our organization is ready to secure a partnership tier for KRITI 2027. Please share onboarding next steps.'
  );

  return (
    <section className="py-20 sm:py-28 px-4 sm:px-6 relative overflow-hidden border-b border-[#2a2a2a] bg-[#121212]">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-blueprint-dashed opacity-20 pointer-events-none" aria-hidden="true" />
      <div
        className="absolute bottom-0 right-1/4 w-[450px] h-[300px] bg-[radial-gradient(ellipse_at_center,rgba(189,40,38,0.15)_0%,transparent_70%)] pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-[960px] mx-auto relative z-10 text-center">
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 px-3 py-1 mb-4 border border-[#2a2a2a] bg-[#0f0f0f] font-mono text-[11px] uppercase tracking-[0.16em] text-[#e5483c]">
          <span>[ 06 · SECURE YOUR PARTNERSHIP ]</span>
        </div>

        {/* Headline */}
        <h2 className="font-display text-[36px] sm:text-[52px] md:text-[60px] font-bold text-[#faf6ec] uppercase tracking-[0.01em] leading-tight mb-5">
          Collaborate with Kakatiya Medical College<span className="text-[#e5483c]">.</span>
        </h2>

        {/* Copy */}
        <p className="font-body text-[16px] sm:text-[18px] md:text-[20px] text-[#aaa497] max-w-[700px] mx-auto leading-relaxed mb-8">
          Sponsorship slots for the Platinum Tier (Event Title Partner) and Gold Tier (Co-Host) are strictly limited. Connect directly with our organisers to reserve your stage presence and activate statewide outreach.
        </p>

        {/* Action Buttons (Strictly Zero Forms) */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={whatsAppUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="focus-ring flex items-center justify-center gap-2.5 px-8 py-4 bg-[#25D366] hover:bg-[#20bd5a] text-black font-mono text-[14px] tracking-[0.08em] uppercase font-bold transition-all shadow-[0_0_20px_rgba(37,211,102,0.3)] hover:shadow-[0_0_28px_rgba(37,211,102,0.45)] no-underline w-full sm:w-auto"
            id="final-cta-whatsapp"
          >
            <MessageCircle className="w-5 h-5" />
            <span>Connect on WhatsApp with Organisers</span>
          </a>

          <a
            href="#packages"
            className="focus-ring flex items-center justify-center gap-2 px-6 py-4 border border-[#2a2a2a] hover:border-[#55534f] bg-[#0f0f0f] text-[#d4cdbc] hover:text-[#faf6ec] font-mono text-[13px] tracking-[0.1em] uppercase transition-colors no-underline w-full sm:w-auto"
          >
            <span>Review Tier Packages</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};
