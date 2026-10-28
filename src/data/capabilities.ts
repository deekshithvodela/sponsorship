/**
 * KRITI 2027 Academic Pillars & 15-Point Deliverables Comparison Matrix
 * 
 * Verified from the official KRITI Kakatiya Medical College partnership breakdown.
 * NOTE: Prize pool numbers are strictly omitted per user instruction.
 */

export interface PillarItem {
  id: string;
  index: string;
  title: string;
  category: string;
  description: string;
  impactMetric: string;
  badge: string;
}

export interface ComparisonMatrixRow {
  category: string;
  deliverable: string;
  fullMonopoly: string | boolean;
  collabMonopoly: string | boolean;
  limitedMonopoly: string | boolean;
  notes?: string;
}

export const conferencePillars: PillarItem[] = [
  {
    id: 'medical-hackathon',
    index: '01',
    title: 'Flagship Medical Hackathon',
    category: 'Innovation & MedTech',
    description:
      'KRITI’s premier clinical problem-solving competition challenging interdisciplinary teams of medicos and engineers to develop working prototypes for urgent medical issues, hospital safety, and AI diagnostic aids.',
    impactMetric: '36-Hour Hackathon · National MedTech Teams',
    badge: 'Premier Event',
  },
  {
    id: 'campus-pr-tour',
    index: '02',
    title: 'Statewide Campus PR Tour (50+ Medical Colleges)',
    category: 'Campus Outreach',
    description:
      'A high-impact campaign visiting 50+ medical colleges across Telangana and Andhra Pradesh, distributing passes, engaging medical student networks, and generating viral digital reach.',
    impactMetric: '50+ Colleges Visited · 2 Telugu States',
    badge: 'Statewide Tour',
  },
  {
    id: 'academic-research',
    index: '03',
    title: 'PG & UG Research (Papers & Posters)',
    category: 'Scientific Inquiry',
    description:
      'Delegates from premier medical institutions across India present peer-reviewed original papers and visual case posters on artificial intelligence in healthcare, innovative surgical techniques, and public health.',
    impactMetric: 'PG & UG Tracks · Peer-Reviewed',
    badge: 'Dual Academic Tiers',
  },
  {
    id: 'medtech-expo',
    index: '04',
    title: 'Med-Tech & Device Exhibition',
    category: 'Medical Technology',
    description:
      'A dedicated exhibition arena where healthcare innovators, surgical manufacturers, diagnostic labs, and medical software providers exhibit directly to over 2,000 clinicians, residents, and medicos.',
    impactMetric: 'Three-Day Prime Exhibition Footprint',
    badge: 'Industry Showcase',
  },
  {
    id: 'kakatiya-chronicles',
    index: '05',
    title: 'Official KRITI Souvenir (Kakatiya Chronicles)',
    category: 'Official Publication',
    description:
      'The official commemorative scientific souvenir and publication of Kakatiya Medical College, archiving research abstracts, conference proceedings, and distributed directly to senior faculty, clinicians, and medical delegates.',
    impactMetric: 'Distributed across Telangana & AP',
    badge: 'Official Souvenir',
  },
  {
    id: 'global-network',
    index: '06',
    title: 'KMC NRI Alumni & Clinician Network',
    category: 'Mentorship & Industry Bonds',
    description:
      'Direct bridge with esteemed Kakatiya Medical College alumni practicing across the United States and India, providing first-generation doctors and student innovators with senior guidance and international connections.',
    impactMetric: 'Global Clinician Roster',
    badge: 'Global Alumni',
  },
];

export const comparisonMatrix: ComparisonMatrixRow[] = [
  // 1. Partnership Terms
  {
    category: 'Investment & Association',
    deliverable: 'Sponsorship Investment',
    fullMonopoly: 'Available on Request',
    collabMonopoly: 'Available on Request',
    limitedMonopoly: 'Available on Request',
    notes: 'Customized proposal & institutional MoU provided via organisers on WhatsApp',
  },
  {
    category: 'Investment & Association',
    deliverable: 'Event Title Partner & Hosting Role',
    fullMonopoly: 'Single Event Title Partner & Presenter (Choice of 11 Events)',
    collabMonopoly: 'Official Co-Host Partner of Annual Conference',
    limitedMonopoly: 'Official Conference Exhibitor',
    notes: 'Official title presentation rights for your chosen event track or co-host association',
  },

  // 2. Mainstage & Keynote
  {
    category: 'Stage Presence & Keynote',
    deliverable: 'Guaranteed Mainstage Presence (incl. Video Broadcast)',
    fullMonopoly: '20-30 Minutes',
    collabMonopoly: '10-15 Minutes',
    limitedMonopoly: false,
    notes: 'Dedicated plenary stage exposure and LED interval video broadcasts across the 3-day conference',
  },
  {
    category: 'Stage Presence & Keynote',
    deliverable: 'Keynote Address / Pitch Slot',
    fullMonopoly: 'Mainstage Keynote Address',
    collabMonopoly: 'Mainstage Keynote Address',
    limitedMonopoly: false,
    notes: 'Opportunity for guest speaker to present corporate vision to 2,000+ delegates',
  },

  // 3. Exhibition & Workspaces
  {
    category: 'Exhibition & Workspaces',
    deliverable: 'Three-Day Designated Booth Exhibit',
    fullMonopoly: 'Prime Central Atrium Workspace',
    collabMonopoly: 'Prime Central Atrium Workspace',
    limitedMonopoly: 'Designated Atrium Exhibit Booth',
    notes: 'Full three-day exhibition presence across conference days for delegate consultations and product demos',
  },
  {
    category: 'Exhibition & Workspaces',
    deliverable: 'Plenary Mainstage Presentation AV Tech',
    fullMonopoly: 'Full Plenary AV & LED Displays',
    collabMonopoly: 'Plenary AV & LED Displays',
    limitedMonopoly: false,
    notes: 'Mainstage sound system and LED projection for keynote speeches and video broadcasts',
  },

  // 4. PR & Statewide Outreach
  {
    category: 'PR & Campaign Integration',
    deliverable: 'Statewide Campus PR Outreach Campaign',
    fullMonopoly: 'Full Statewide Integration (50+ Colleges)',
    collabMonopoly: 'Hyderabad Regional Integration',
    limitedMonopoly: false,
    notes: 'Pre-event publicity campaign visiting medical campuses across Telangana',
  },
  {
    category: 'PR & Campaign Integration',
    deliverable: 'Complete Offline PR Targeting',
    fullMonopoly: 'All Medical Colleges in Telangana',
    collabMonopoly: 'Medical Colleges in Hyderabad Region',
    limitedMonopoly: false,
    notes: 'Campus posters, flyers, and direct college student council outreach',
  },
  {
    category: 'PR & Campaign Integration',
    deliverable: 'Delegate Group Coverage',
    fullMonopoly: '1,000+ Member Delegate Groups',
    collabMonopoly: '1,000+ Member Delegate Groups',
    limitedMonopoly: false,
    notes: 'Direct broadcast across official WhatsApp communication groups',
  },

  // 5. Media & Publications
  {
    category: 'Media & Publications',
    deliverable: 'Online Broadcast via Social Channels',
    fullMonopoly: true,
    collabMonopoly: true,
    limitedMonopoly: true,
    notes: 'Broadcast across Instagram, LinkedIn, and healthcare student networks',
  },
  {
    category: 'Media & Publications',
    deliverable: 'Featured on Official KRITI Website',
    fullMonopoly: 'Top-Tier Logo & Profile Feature',
    collabMonopoly: 'Prominent Logo & Profile Feature',
    limitedMonopoly: 'Partner Logo Listing',
    notes: 'Permanent placement on www.kritikmc.com registration portal',
  },
  {
    category: 'Media & Publications',
    deliverable: 'Mention in Official Souvenir (Kakatiya Chronicles)',
    fullMonopoly: 'Prominent Souvenir Feature & Partner Mention',
    collabMonopoly: 'Souvenir Partner Mention',
    limitedMonopoly: 'Souvenir Acknowledgment',
    notes: 'Archived souvenir distributed to all delegates, professors, and VIP guests',
  },
  {
    category: 'Media & Publications',
    deliverable: 'Venue Banners, Standees & Branding',
    fullMonopoly: 'All High-Footfall Atriums & Stage',
    collabMonopoly: 'High-Footfall Atriums & Stage',
    limitedMonopoly: 'Designated Standees / Banners Only',
    notes: 'Physical on-site signage across Kakatiya Medical College campus',
  },
];
