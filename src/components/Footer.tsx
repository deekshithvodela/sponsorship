import React from 'react';
import { contactConfig, getWhatsAppUrl } from '../config/contact';
import { MessageCircle, ExternalLink, MapPin } from 'lucide-react';

export const Footer: React.FC = () => {
  const whatsAppUrl = getWhatsAppUrl();

  return (
    <footer className="bg-[#0f0f0f] border-t border-[#2a2a2a] text-[#a39e93] font-body text-[14px] pt-16 pb-12 px-4 sm:px-6">
      <div className="max-w-[1240px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-[#222222]">
          {/* Brand Column (Cols 1-5) */}
          <div className="md:col-span-5 flex flex-col items-start">
            <a
              href="#"
              className="inline-flex items-center gap-1.5 no-underline mb-4 group"
            >
              <div className="w-2.5 h-2.5 rounded-full bg-[#e5483c] group-hover:shadow-[0_0_8px_#e5483c] transition-all mr-1 animate-pulse" />
              <span className="font-display text-[26px] font-bold tracking-[0.02em] text-[#faf6ec] group-hover:text-white transition-colors">
                kriti<span className="text-[#e5483c]">.</span>
              </span>
              <span className="text-[#a39e93] font-mono text-[14px]" aria-hidden="true">
                ·
              </span>
              <span className="font-mono text-[13px] tracking-[0.14em] uppercase text-[#a39e93]">
                2027
              </span>
            </a>

            <p className="font-mono text-[11px] tracking-[0.14em] uppercase text-[#e5483c] mb-2">
              KAKATIYA RESEARCH INITIATIVE FOR TRANSFORMATIVE INNOVATIONS
            </p>

            <p className="text-[#aaa497] max-w-[420px] text-[14px] leading-relaxed mb-4">
              A premier academic and research medical conference hosted by Kakatiya Medical College, Warangal. Providing a national platform for medical scholars, clinicians, and health tech pioneers to live fully up to the potential of their dreams.
            </p>

            <div className="flex items-center gap-2 font-mono text-[11px] text-[#a39e93]">
              <MapPin className="w-3.5 h-3.5 text-[#e5483c] shrink-0" />
              <span>Kakatiya Medical College, Warangal, Telangana, India</span>
            </div>
          </div>

          {/* Quick Navigation (Cols 6-8) */}
          <div className="md:col-span-3">
            <h3 className="font-mono text-[11px] uppercase tracking-[0.16em] text-[#faf6ec] mb-4">
              SPONSORSHIP NAVIGATION
            </h3>
            <ul className="space-y-2.5 font-mono text-[12px] uppercase tracking-[0.08em] p-0 list-none m-0">
              <li>
                <a href="#packages" className="text-[#a39e93] hover:text-[#d4cdbc] no-underline transition-colors">
                  Tier Packages
                </a>
              </li>
              <li>
                <a href="#estimator" className="text-[#a39e93] hover:text-[#d4cdbc] no-underline transition-colors">
                  Reach & ROI Visualizer
                </a>
              </li>
              <li>
                <a href="#events" className="text-[#a39e93] hover:text-[#d4cdbc] no-underline transition-colors">
                  11 Confirmed Events
                </a>
              </li>
              <li>
                <a href="#matrix" className="text-[#a39e93] hover:text-[#d4cdbc] no-underline transition-colors">
                  Deliverables Matrix
                </a>
              </li>
              <li>
                <a href="#faq" className="text-[#a39e93] hover:text-[#d4cdbc] no-underline transition-colors">
                  Frequently Asked Questions
                </a>
              </li>
            </ul>
          </div>

          {/* Institutional Contact & WhatsApp (Cols 9-12) */}
          <div className="md:col-span-4">
            <h3 className="font-mono text-[11px] uppercase tracking-[0.16em] text-[#faf6ec] mb-4">
              ORGANISERS DIRECT CONTACT
            </h3>
            <p className="text-[13px] text-[#aaa497] leading-relaxed mb-4">
              For corporate proposals, booth schematics, and official MoUs, message our organizing committee on WhatsApp:
            </p>

            <a
              href={whatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 bg-[#25D366]/15 hover:bg-[#25D366]/25 border border-[#25D366]/40 hover:border-[#25D366] text-[#faf6ec] font-mono text-[12px] uppercase tracking-wider transition-colors no-underline mb-4"
            >
              <MessageCircle className="w-4 h-4 text-[#25D366]" />
              <span>WhatsApp</span>
            </a>

            <div className="font-mono text-[11px] text-[#a39e93] space-y-1">
              <div>{contactConfig.organisersHours}</div>
              <div>Conference Website: <a href="https://www.kritikmc.com" target="_blank" rel="noopener noreferrer" className="text-[#d4cdbc] hover:text-[#e5483c] inline-flex items-center gap-1">www.kritikmc.com <ExternalLink className="w-3 h-3" /></a></div>
            </div>
          </div>
        </div>

        {/* Bottom Credits & Publications */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-[11px] text-[#a39e93]">
          <div>
            © 2027 KRITI · Kakatiya Medical College. All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <span>KRITI Souvenir (Kakatiya Chronicles)</span>
            <span>·</span>
            <a href="#packages" className="text-[#a39e93] hover:text-[#d4cdbc] no-underline">
              Sponsorships
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
