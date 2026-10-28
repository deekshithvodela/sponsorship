import React, { useState } from 'react';
import { faqItems } from '../data/faq';
import { getWhatsAppUrl } from '../config/contact';
import { Plus, Minus, HelpCircle, MessageCircle } from 'lucide-react';

export const FAQ: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>(faqItems[0]?.id || null);

  const toggleFAQ = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  const whatsAppUrl = getWhatsAppUrl(
    'Hello KRITI 2027 Organisers, I have an inquiry regarding partnership terms, invoice processing, or booth specifications.'
  );

  return (
    <section id="faq" className="py-16 sm:py-24 px-4 sm:px-6 border-b border-[#2a2a2a] relative">
      <div className="max-w-[960px] mx-auto">
        {/* Section Header */}
        <div className="mb-12 sm:mb-16">
          <div className="flex items-center gap-2 mb-2 font-mono text-[11px] sm:text-[12px] uppercase tracking-[0.14em] text-[#e5483c]">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>[ 05 · SPONSORSHIP & PARTNERSHIP FAQS ]</span>
          </div>
          <h2 className="font-display text-[32px] sm:text-[44px] md:text-[48px] font-bold text-[#faf6ec] uppercase tracking-[0.01em] leading-tight">
            Frequently Asked Questions<span className="text-[#e5483c]">.</span>
          </h2>
          <p className="font-body text-[15px] sm:text-[17px] text-[#aaa497] mt-3">
            Essential facts on KRITI sponsorship tiers, headline title rights, our 11 confirmed academic events, booth facilities, and direct WhatsApp organisers access.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3 mb-10">
          {faqItems.map((item, index) => {
            const isOpen = openId === item.id;
            const contentId = `faq-content-${item.id}`;
            const headerId = `faq-header-${item.id}`;

            return (
              <div
                key={item.id}
                className={`border transition-colors duration-150 corner-frame ${
                  isOpen
                    ? 'border-[#bd2826] bg-[#141414]'
                    : 'border-[#2a2a2a] bg-[#121212] hover:border-[#3a3a3a]'
                }`}
              >
                <button
                  type="button"
                  id={headerId}
                  onClick={() => toggleFAQ(item.id)}
                  aria-expanded={isOpen}
                  aria-controls={contentId}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 cursor-pointer focus-ring"
                >
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-[12px] font-bold text-[#a39e93]">
                      {String(index + 1).padStart(2, '0')}.
                    </span>
                    <span className="font-display text-[18px] sm:text-[20px] font-bold text-[#faf6ec] uppercase">
                      {item.question}
                    </span>
                  </div>
                  <div className="shrink-0 p-1 border border-[#2a2a2a] bg-[#0f0f0f] text-[#d4cdbc]">
                    {isOpen ? <Minus className="w-4 h-4 text-[#e5483c]" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>

                {isOpen && (
                  <div
                    id={contentId}
                    role="region"
                    aria-labelledby={headerId}
                    className="px-5 sm:px-6 pb-6 pt-1 text-[14px] sm:text-[15px] font-body text-[#aaa497] leading-relaxed border-t border-[#2a2a2a]/40"
                  >
                    <p>{item.answer}</p>
                    <div className="mt-3 flex items-center gap-2">
                      <span className="font-mono text-[10px] uppercase text-[#a39e93] px-2 py-0.5 bg-[#0f0f0f] border border-[#2a2a2a]">
                        Category: {item.category}
                      </span>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* WhatsApp Help Banner */}
        <div className="border border-[#2a2a2a] bg-[#141414] p-5 sm:p-6 flex flex-col sm:flex-row items-center justify-between gap-4 corner-frame">
          <div className="flex items-center gap-3">
            <div className="p-2 border border-[#2a2a2a] bg-[#0f0f0f] shrink-0">
              <MessageCircle className="w-5 h-5 text-[#25D366]" />
            </div>
            <div>
              <div className="font-mono text-[13px] text-[#faf6ec] uppercase tracking-wider font-semibold">
                Have an Unanswered Question?
              </div>
              <div className="font-body text-[13px] text-[#a39e93]">
                Connect directly with the KRITI Executive Organizing Committee on WhatsApp.
              </div>
            </div>
          </div>

          <a
            href={whatsAppUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="focus-ring inline-flex items-center gap-2 px-5 py-2.5 bg-[#25D366] text-black font-mono text-[12px] font-bold uppercase tracking-wider hover:bg-[#20bd5a] transition-colors no-underline shrink-0 shadow-sm"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Ask via WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
};
