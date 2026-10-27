import React from 'react';
import { comparisonMatrix } from '../data/capabilities';
import { getWhatsAppUrl } from '../config/contact';
import { Check, X, MessageCircle, Table } from 'lucide-react';

export const ComparisonMatrix: React.FC = () => {
  const categories = Array.from(new Set(comparisonMatrix.map((r) => r.category)));
  const whatsAppUrl = getWhatsAppUrl(
    'Hello KRITI 2027 Organisers, I am reviewing the deliverables matrix and would like to clarify specific tier inclusions.'
  );

  const renderCell = (val: boolean | string) => {
    if (val === true) {
      return <Check className="w-4 h-4 text-[#25D366] mx-auto" aria-label="Included" />;
    }
    if (val === false) {
      return <X className="w-4 h-4 text-[#55534f] mx-auto" aria-label="Not Included" />;
    }
    return (
      <span className="font-mono text-[11px] sm:text-[12px] text-[#faf6ec] text-center block">
        {val}
      </span>
    );
  };

  return (
    <section id="matrix" className="py-16 sm:py-24 px-4 sm:px-6 border-b border-[#2a2a2a] relative">
      <div className="max-w-[1240px] mx-auto">
        {/* Section Header */}
        <div className="mb-12 sm:mb-16">
          <div className="flex items-center gap-2 mb-2 font-mono text-[11px] sm:text-[12px] uppercase tracking-[0.14em] text-[#e5483c]">
            <Table className="w-3.5 h-3.5" />
            <span>[ 04 · DELIVERABLES COMPARISON MATRIX ]</span>
          </div>
          <h2 className="font-display text-[32px] sm:text-[44px] md:text-[48px] font-bold text-[#faf6ec] uppercase tracking-[0.01em] leading-tight">
            Deliverables Side-by-Side<span className="text-[#e5483c]">.</span>
          </h2>
          <p className="font-body text-[15px] sm:text-[17px] text-[#aaa497] max-w-[700px] mt-3">
            Compare stage presence, headline hosting rights, designated workspaces, campus PR campaign integration, and publication features across the 3 sponsorship tiers.
          </p>
        </div>

        {/* Comparison Table */}
        <div className="border border-[#2a2a2a] bg-[#141414] overflow-x-auto corner-frame mb-8">
          <table className="w-full text-left font-body text-[13px] sm:text-[14px] min-w-[760px] border-collapse">
            <caption className="sr-only">Deliverables & Partnership Scope Comparison Matrix</caption>
            <thead>
              <tr className="border-b border-[#2a2a2a] bg-[#0f0f0f]">
                <th scope="col" className="py-4 px-5 text-[#a39e93] font-mono text-[11px] uppercase tracking-[0.1em] w-2/5">
                  Deliverables & Partnership Scope
                </th>
                <th scope="col" className="py-4 px-4 text-center font-display text-[15px] sm:text-[16px] font-bold text-[#faf6ec] uppercase bg-[#181111] border-x border-[#2a2a2a]">
                  <div className="text-[10px] text-[#e5483c] font-mono tracking-wider">TIER-01 // TITLE</div>
                  <div>Full Monopoly</div>
                </th>
                <th scope="col" className="py-4 px-4 text-center font-display text-[15px] sm:text-[16px] font-bold text-[#faf6ec] uppercase">
                  <div className="text-[10px] text-[#a39e93] font-mono tracking-wider">TIER-02 // CO-HOST</div>
                  <div>Collaborative Monopoly</div>
                </th>
                <th scope="col" className="py-4 px-4 text-center font-display text-[15px] sm:text-[16px] font-bold text-[#faf6ec] uppercase">
                  <div className="text-[10px] text-[#a39e93] font-mono tracking-wider">TIER-03 // EXHIBITION</div>
                  <div>Limited Monopoly</div>
                </th>
              </tr>
            </thead>
            <tbody>
              {categories.map((category) => {
                const rows = comparisonMatrix.filter((r) => r.category === category);
                return (
                  <React.Fragment key={category}>
                    <tr className="bg-[#0f0f0f]/80 border-y border-[#2a2a2a]">
                      <td
                        colSpan={4}
                        className="py-2.5 px-5 font-mono text-[11px] uppercase tracking-[0.14em] text-[#e5483c] font-bold"
                      >
                        // {category}
                      </td>
                    </tr>
                    {rows.map((row, idx) => (
                      <tr
                        key={idx}
                        className="border-b border-[#1f1f1f] hover:bg-[#1a1a1a]/60 transition-colors"
                      >
                        <th scope="row" className="py-3 px-5 text-[#d4cdbc] font-medium text-left font-normal">
                          {row.deliverable}
                          {row.notes && (
                            <span className="block font-body text-[11px] text-[#a39e93] mt-0.5">
                              {row.notes}
                            </span>
                          )}
                        </th>
                        <td className="py-3 px-4 text-center bg-[#181111]/40 border-x border-[#2a2a2a]">
                          {renderCell(row.fullMonopoly)}
                        </td>
                        <td className="py-3 px-4 text-center">{renderCell(row.collabMonopoly)}</td>
                        <td className="py-3 px-4 text-center">{renderCell(row.limitedMonopoly)}</td>
                      </tr>
                    ))}
                  </React.Fragment>
                );
              })}
            </tbody>
          </table>
        </div>

        {/* Action bar below matrix */}
        <div className="border border-[#2a2a2a] bg-[#141414] p-5 sm:p-6 flex flex-col sm:flex-row items-center justify-between gap-4 corner-frame">
          <div>
            <div className="font-mono text-[13px] text-[#faf6ec] uppercase tracking-wider font-semibold">
              Need a Custom Deliverables Arrangement?
            </div>
            <div className="font-body text-[13px] text-[#a39e93]">
              Our organisers can tailor workshop slots, booth square footage, and academic track associations.
            </div>
          </div>

          <a
            href={whatsAppUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="focus-ring inline-flex items-center gap-2 px-5 py-2.5 bg-[#25D366] text-black font-mono text-[12px] font-bold uppercase tracking-wider hover:bg-[#20bd5a] transition-colors no-underline shrink-0 shadow-sm"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Chat on WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
};
