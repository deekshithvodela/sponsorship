/**
 * KRITI 2027 Sponsorship & Partnerships FAQ Data Module
 * 
 * Curated from the official Kakatiya Medical College KRITI prospectus.
 * NOTE: Prize pool numbers and explicit tier prices are strictly omitted per user instruction.
 */

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'Packages & Tiers' | 'Conference & Events' | 'Exhibition & Space' | 'Process & WhatsApp';
}

export const faqItems: FAQItem[] = [
  {
    id: 'faq-packages-overview',
    category: 'Packages & Tiers',
    question: 'What are the main sponsorship packages and partnership options available?',
    answer:
      'KRITI offers three primary academic partnership tiers: (1) Platinum Tier for single event title presenting rights and complete event branding; (2) Gold Tier for conference co-host branding for an academic track of choice and dedicated stage presence; and (3) Silver Tier for three-day prime atrium exhibition presence and souvenir mention. Customized proposals are available on request via organisers on WhatsApp. Organizations can also endorse specific competition tracks across our 12 confirmed academic events.',
  },
  {
    id: 'faq-title-hosting',
    category: 'Conference & Events',
    question: 'What does Platinum Tier (Single Event Title Partner) include across the conference?',
    answer:
      'The Platinum Tier secures presenting rights for a chosen event out of our 12 confirmed academic events. This package includes prominent title presentation rights for the event, guarantees 20-30 minutes of dedicated mainstage presence across the 3-day conference (including promotional video broadcasts on main LED screens), and prime atrium exhibition presence.',
  },
  {
    id: 'faq-campus-pr-tour',
    category: 'Conference & Events',
    question: 'How does the Statewide Campus PR Outreach campaign function?',
    answer:
      'The campus outreach campaign is an aggressive pre-conference publicity initiative visiting 50+ medical colleges across Telangana and Andhra Pradesh. It combines on-ground campus visits to connect with student councils, social media features across official Instagram channels (10k+ Followers), and promotional collaborations across medico networks.',
  },
  {
    id: 'faq-publications-chronicles',
    category: 'Packages & Tiers',
    question: 'What is the official KRITI Souvenir (Kakatiya Chronicles)?',
    answer:
      'Kakatiya Chronicles is the official commemorative souvenir and academic publication of Kakatiya Medical College, compiling finalist abstracts, research papers, and conference proceedings. Partner mentions are archived and distributed directly to all 3,000+ delegates, institutional leaders, and medical faculty.',
  },
  {
    id: 'faq-track-sponsorships',
    category: 'Conference & Events',
    question: 'Which academic competition tracks are confirmed for this year?',
    answer:
      'This year features 12 confirmed academic events: Hands-on Medical Workshops, Code Blue (Emergency Medicine Quiz), PG Poster, UG Poster, PG Paper, UG Paper, Medical Symposium, Med- Debate, Medical Hackathon, Med-Tech Exhibition, Medical Model United Nations (Med-MUN), and Medical Jeopardy (Quiz). Partners can endorse specific tracks for naming rights, jury seats, and trophy presentation honors.',
  },
  {
    id: 'faq-booth-specifications',
    category: 'Exhibition & Space',
    question: 'What are the facilities and specifications for the designated exhibition booth?',
    answer:
      'Exhibition partners receive a designated high-traffic central atrium booth for all three conference days equipped with display tables, presentation space, and standard electrical power connectivity. Exhibition booths provide direct physical delegate engagement and sampling (booths are not AV-equipped; mainstage plenary sessions feature dedicated sound and LED display technology for keynote addresses).',
  },
  {
    id: 'faq-why-whatsapp-only',
    category: 'Process & WhatsApp',
    question: 'Why does contact and booking happen exclusively via WhatsApp messaging?',
    answer:
      'To provide instantaneous, transparent communication directly with the KRITI Executive Organizing Committee. WhatsApp eliminates cold-form email delays, allows real-time file sharing of branding assets and booth schematics, and connects your corporate representative directly with the designated student-faculty partnership coordinator.',
  },
];
