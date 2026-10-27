/**
 * KRITI 2027 Sponsorship Packages & 10 Confirmed Academic Event Tracks
 * 
 * Kakatiya Medical College, Warangal
 * Incorporates confirmed events: PG Poster, UG Poster, PG Paper, UG Paper,
 * Symposium, Debate, Hackathon, Med-Tech Exhibition, MUN, Jeopardy.
 * NOTE: Prize pool amounts are unfinalized and strictly omitted.
 */

export interface SponsorshipTier {
  id: string;
  code: string;
  name: string;
  tagline: string;
  price: number;
  formattedPrice: string;
  priceSubtext: string;
  badge?: string;
  isFlagship?: boolean;
  overview: string;
  keyFeatures: string[];
  limitations?: string;
  actionText: string;
  actionType: 'title-partner' | 'co-host-partner' | 'exhibition-partner';
}

export interface AcademicTrack {
  id: string;
  name: string;
  code: string;
  targetAudience: 'Postgraduate (PG)' | 'Undergraduate (UG)' | 'Universal Medico';
  category: string;
  description: string;
  deliverables: string[];
}

export interface ConferenceMetric {
  label: string;
  value: string;
  subtext: string;
  iconName: string;
}

export const sponsorshipTiers: SponsorshipTier[] = [
  {
    id: 'title-partner',
    code: 'TIER-01 // TITLE',
    name: 'Title Partner (Full Monopoly)',
    tagline: 'Sole Conference Title Partnership & Complete Event Exclusivity',
    price: 0,
    formattedPrice: 'Pricing on Request',
    priceSubtext: 'Exclusive Title Partnership · Complete Institutional Branding',
    badge: 'FLAGSHIP // SOLE EXCLUSIVITY',
    isFlagship: true,
    overview:
      'The premier sponsorship tier offering absolute institutional dominance, headline conference title presenting rights across all flagship plenaries, 180 minutes of stage presence, and statewide campus outreach across 50+ colleges.',
    keyFeatures: [
      'Headline Conference Title Presenter & Host across all Flagship Sessions',
      '180 minutes of guaranteed mainstage presence across the 2-day conference',
      'Dedicated partner keynote address during prime plenary session',
      '10-minute promotional video broadcast during interval breaks on main LED screens',
      'Integration with statewide offline PR campaign visiting 50+ medical colleges across Telangana',
      'Two-day prime designated exhibition booth in central high-traffic atrium',
      'Complete offline PR campaign targeting medical colleges across Telangana & AP',
      'Multi-channel online broadcast across official KRITI social media and website',
      'Partner mention in the official KRITI Souvenir (Kakatiya Chronicles) distributed to faculty & delegates',
      'Prominent venue banners, standees across key atriums, and direct coverage across delegate network',
    ],
    limitations: 'Strictly limited to 1 exclusive organization across the conference.',
    actionText: 'Enquire via WhatsApp',
    actionType: 'title-partner',
  },
  {
    id: 'co-host-partner',
    code: 'TIER-02 // CO-HOST',
    name: 'Co-Host Partner (Collaborative Monopoly)',
    tagline: 'Strategic Conference Co-Host Association & Prime Exhibition Footprint',
    price: 0,
    formattedPrice: 'Pricing on Request',
    priceSubtext: 'Substantial stage presence & city-wide PR integration',
    badge: 'HIGH IMPACT // CO-HOST',
    isFlagship: false,
    overview:
      'Strategic partnership positioning your brand as the official Co-Host Partner of the Annual Conference with 90 minutes of dedicated stage presence, keynote speech, and offline PR reach across Hyderabad medical colleges.',
    keyFeatures: [
      'Official Co-Host Partner across Annual Conference Sessions & Plenaries',
      '90 minutes of dedicated mainstage presence across conference sessions',
      'Dedicated partner keynote address on the mainstage',
      '5-minute promotional video broadcast during interval sessions on LED displays',
      'Integration with offline PR campaign targeting medical colleges in Hyderabad',
      'Two-day designated exhibition booth in high-traffic atrium',
      'Offline PR campaign targeting medical colleges in the Hyderabad metro region',
      'Online broadcast across KRITI social media channels and official website',
      'Partner mention in the official KRITI Souvenir (Kakatiya Chronicles)',
      'Banners, standees, and direct coverage across delegate network',
    ],
    limitations: 'Limited to 2 non-competing collaborative partners.',
    actionText: 'Enquire via WhatsApp',
    actionType: 'co-host-partner',
  },
  {
    id: 'exhibition-partner',
    code: 'TIER-03 // EXHIBITION',
    name: 'Exhibition Partner (Limited Monopoly)',
    tagline: 'High-Footfall Atrium Exhibition & Multi-Channel Broadcast',
    price: 0,
    formattedPrice: 'Pricing on Request',
    priceSubtext: 'Two-day primary exhibition footprint',
    badge: 'DIRECT ENGAGEMENT',
    isFlagship: false,
    overview:
      'Essential on-ground exhibition presence designed for healthcare organizations, diagnostic services, medical device companies, and educational publishers seeking direct interaction with 2,000+ delegates.',
    keyFeatures: [
      'Two-day designated workspace / booth exhibit in high-traffic atrium',
      'Placement of official brand banners and standees in key venue atriums and entrance halls',
      'Digital brand broadcast across KRITI official social media channels',
      'Official partner listing and logo placement on the KRITI website',
      'Acknowledgment mention in the official KRITI Souvenir (Kakatiya Chronicles)',
      'Direct engagement and lead generation with 2,000+ medical delegates',
    ],
    limitations: 'Exhibition & branding only; excludes plenary stage time and headline title hosting.',
    actionText: 'Enquire via WhatsApp',
    actionType: 'exhibition-partner',
  },
];

export const academicTracks: AcademicTrack[] = [
  {
    id: 'track-hackathon',
    name: 'Medical Hackathon',
    code: 'EVT-01 // INNOVATION',
    targetAudience: 'Universal Medico',
    category: 'Innovation & MedTech',
    description:
      'KRITI’s flagship clinical problem-solving sprint challenging teams of medicos and innovators to engineer working prototypes for clinical safety, AI diagnostics, and hospital workflow automation.',
    deliverables: [
      'Exclusive Track Naming Endorsement ("Presented by [Partner]")',
      'Seat on the final expert evaluation jury panel',
      'Logo on all hackathon problem statement documents and digital repositories',
      'Direct interaction with top medical and engineering innovators',
    ],
  },
  {
    id: 'track-symposium',
    name: 'Medical Symposium',
    code: 'EVT-02 // PLENARY',
    targetAudience: 'Universal Medico',
    category: 'Clinical Plenary',
    description:
      'High-impact clinical symposia featuring leading national clinicians and international NRI alumni addressing breakthroughs in oncology, cardiology, robotic surgery, and precision medicine.',
    deliverables: [
      'Symposium session co-branding and stage backdrop signage',
      'Speaker introduction and brand acknowledgment by session chairperson',
      'Brochure and institutional literature distribution inside symposium hall',
      'Digital acknowledgment on archived video proceedings',
    ],
  },
  {
    id: 'track-medtech-expo',
    name: 'Med-Tech Exhibition',
    code: 'EVT-03 // EXPO',
    targetAudience: 'Universal Medico',
    category: 'Technology & Devices',
    description:
      'A dedicated medical technology showcase where healthcare enterprises demonstrate medical hardware, surgical instruments, digital health apps, and simulation equipment to clinicians.',
    deliverables: [
      'Prime central exhibition booth space in main atrium',
      'Live demonstration slots for attending medical faculty and students',
      'Logo featured on venue exhibition directory and signage',
      'Dedicated delegate footfall during designated exhibition hours',
    ],
  },
  {
    id: 'track-debate',
    name: 'Med- Debate',
    code: 'EVT-04 // DEBATE',
    targetAudience: 'Universal Medico',
    category: 'Ethics & Healthcare Policy',
    description:
      'Spirited collegiate debate tournament debating clinical bioethics, AI in clinical decisions, public health policy, and the commercialization of medicine.',
    deliverables: [
      'Debate podium and stage backdrop branding',
      'Opening debate remarks and partner acknowledgment by student moderators',
      'Official trophy and certificate presentation to winning debaters',
      'Viral highlight video clips circulated on medical social channels',
    ],
  },
  {
    id: 'track-mun',
    name: 'Medical Model United Nations (Med-MUN)',
    code: 'EVT-05 // MUN',
    targetAudience: 'Universal Medico',
    category: 'Global Health Governance',
    description:
      'Simulated World Health Assembly and WHO committees where delegates represent sovereign nations to debate pandemic treaties, international healthcare equity, and global drug pricing.',
    deliverables: [
      'Title endorsement of the Med-MUN committee chambers',
      'Opening address to simulated diplomatic delegates and student leaders',
      'Branded delegate dossiers, working papers, and committee placards',
      'Awarding of the Best Delegate & Outstanding Diplomat gavels',
    ],
  },
  {
    id: 'track-jeopardy',
    name: 'Medical Jeopardy / Quiz',
    code: 'EVT-06 // QUIZ',
    targetAudience: 'Universal Medico',
    category: 'Clinical Knowledge',
    description:
      'Electrifying diagnostic trivia and medical quiz tournament featuring buzzer rounds, clinical image identification, and clinical case puzzles in an amphitheater setting.',
    deliverables: [
      'Official Quiz Track endorsement on electronic scoreboard screens',
      'Partner logo on participant quiz answer sheets and buzzer consoles',
      'Award presentation ceremony for top quiz finalists',
      'Live social media broadcasts and highlight coverage',
    ],
  },
  {
    id: 'track-pg-paper',
    name: 'PG Paper Presentation',
    code: 'EVT-07 // PG RESEARCH',
    targetAudience: 'Postgraduate (PG)',
    category: 'Specialist Clinical Research',
    description:
      'Rigorous peer-reviewed presentations by resident doctors, postgraduate trainees, and surgical registrars covering original clinical trials, meta-analyses, and clinical research.',
    deliverables: [
      'PG Paper hall endorsement and judging panel branding',
      'Abstract publication in the official KRITI Souvenir (Kakatiya Chronicles)',
      'Trophy presentation to winning postgraduate clinical researcher',
      'Citation in official conference literature',
    ],
  },
  {
    id: 'track-ug-paper',
    name: 'UG Paper Presentation',
    code: 'EVT-08 // UG RESEARCH',
    targetAudience: 'Undergraduate (UG)',
    category: 'Undergraduate Scientific Inquiry',
    description:
      'Platform for visionary undergraduate MBBS students across India to defend original observational studies, laboratory research, and public health surveys before faculty.',
    deliverables: [
      'UG Paper session sponsorship and hall branding',
      'Inclusion of corporate logo on scientific certificate of merit',
      'Abstract publication in the official KRITI Souvenir (Kakatiya Chronicles)',
      'Photo opportunities with award-winning student investigators',
    ],
  },
  {
    id: 'track-pg-poster',
    name: 'PG Poster Presentation',
    code: 'EVT-09 // PG POSTER',
    targetAudience: 'Postgraduate (PG)',
    category: 'Clinical Case Series',
    description:
      'High-level visual scientific poster gallery presenting rare pathology cases, surgical technique innovations, and radiological case studies authored by postgraduate specialists.',
    deliverables: [
      'Exclusive PG Poster gallery entrance arch branding',
      'Logo on PG poster evaluation rubrics and digital scoring tablets',
      'Presentation of the Best PG Clinical Poster Award',
      'Continuous exposure to attending consultants and professors',
    ],
  },
  {
    id: 'track-ug-poster',
    name: 'UG Poster Presentation',
    code: 'EVT-10 // UG POSTER',
    targetAudience: 'Undergraduate (UG)',
    category: 'Visual Medical Science',
    description:
      'Vibrant visual exhibition of clinical case reports, physiological diagrams, and healthcare innovation concepts designed and presented by undergraduate medical students.',
    deliverables: [
      'UG Poster gallery aisle and display panel branding',
      'Logo printed on all participant display boards and tags',
      'Presentation of the Best UG Scientific Poster Award',
      'High footfall visibility throughout the two conference days',
    ],
  },
];

export const conferenceMetrics: ConferenceMetric[] = [
  {
    label: 'Delegates Attending',
    value: '2,000+',
    subtext: 'UG Medicos, PGs, Interns & Faculty from across India',
    iconName: 'Users',
  },
  {
    label: 'Campus PR Tour',
    value: '50+ Colleges',
    subtext: 'Statewide offline publicity across Telangana & AP',
    iconName: 'MapPin',
  },
  {
    label: 'Academic Event Tracks',
    value: '10+ Events',
    subtext: 'Hackathon, Symposium, Med-Tech Expo, MUN, Jeopardy & Papers',
    iconName: 'Trophy',
  },
  {
    label: 'Followers & Reach',
    value: '10k+ Followers',
    subtext: 'Official digital campaign, Instagram channels & medico network',
    iconName: 'MessageSquare',
  },
];
