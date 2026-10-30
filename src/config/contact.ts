/**
 * KRITI 2027 Sponsorship & Partnerships WhatsApp Messaging Configuration
 * 
 * Kakatiya Medical College, Warangal
 * All sponsor enquiries, tier bookings, and secretariat consultations happen EXCLUSIVELY
 * via WhatsApp messaging. No forms are used on this page.
 */

export interface ContactConfig {
  /**
   * Official WhatsApp phone number in international format without '+' or spaces.
   * Default configured to India country code format (+91).
   */
  whatsappNumber: string;

  /**
   * Default general enquiry prefilled message.
   */
  defaultMessage: string;

  /**
   * Contextual messages for each sponsorship tier and track.
   */
  tierMessages: {
    titlePartner: string;
    coHostPartner: string;
    exhibitionPartner: string;
    academicTrack: string;
    customReach: string;
  };

  organisersHours: string;
  organisersEmail: string;
  organisersLocation: string;
}

export const contactConfig: ContactConfig = {
  // Official WhatsApp Organisers contact number (International format: 91...)
  whatsappNumber: '919515476138',

  defaultMessage:
    'Hello KRITI 2027 Organisers, we are interested in exploring academic partnership and sponsorship opportunities for KRITI.',

  tierMessages: {
    titlePartner:
      'Hello KRITI 2027 Organisers, we would like to explore the Platinum Tier (Single Event Title Partner & Presenter) package for KRITI 2027. Please share the prospectus, partnership terms, and onboarding details.',
    coHostPartner:
      'Hello KRITI 2027 Organisers, we are interested in the Gold Tier (Co-Host Partner for an academic track of our choice) package for KRITI 2027. Please provide partnership deliverables and scheduling information.',
    exhibitionPartner:
      'Hello KRITI 2027 Organisers, we would like to book a designated Silver Tier (Exhibition Partner) booth at KRITI 2027. Please share booth specifications and layout.',
    academicTrack:
      'Hello KRITI 2027 Organisers, we are interested in endorsing an Academic Event Track (such as Workshops, Code Blue, Hackathon, Symposium, Med-Tech Expo, MUN, Quiz, Med- Debate, Paper, or Poster) at KRITI 2027.',
    customReach:
      'Hello KRITI 2027 Organisers, I used your Academic Partnership Simulator and would like to discuss a customized multi-channel activation package for our organization.',
  },

  organisersHours: 'Available 24x7',
  organisersEmail: 'deekshithvodela@gmail.com',
  organisersLocation: 'Kakatiya Medical College, Warangal, Telangana, India',
};

/**
 * Checks whether the WhatsApp number has been populated with a valid phone string.
 */
export function isWhatsAppConfigured(): boolean {
  const num = contactConfig.whatsappNumber?.trim();
  if (!num || num === 'UNCONFIGURED' || num.length < 7) {
    return false;
  }
  return /^\d{7,15}$/.test(num.replace(/\D/g, ''));
}

/**
 * Generates an official click-to-chat WhatsApp URL with prefilled text.
 */
export function getWhatsAppUrl(customMessage?: string): string {
  const cleanNumber = isWhatsAppConfigured()
    ? contactConfig.whatsappNumber.replace(/\D/g, '')
    : '919515476138'; // Official organisers fallback

  const message = customMessage || contactConfig.defaultMessage;
  const encodedMessage = encodeURIComponent(message);

  return `https://wa.me/${cleanNumber}?text=${encodedMessage}`;
}

/**
 * Returns prefilled WhatsApp link for a specific sponsorship tier or feature.
 */
export function getTierWhatsAppUrl(
  tierId: 'title-partner' | 'co-host-partner' | 'exhibition-partner' | 'academic-track' | 'custom-reach'
): string {
  switch (tierId) {
    case 'title-partner':
      return getWhatsAppUrl(contactConfig.tierMessages.titlePartner);
    case 'co-host-partner':
      return getWhatsAppUrl(contactConfig.tierMessages.coHostPartner);
    case 'exhibition-partner':
      return getWhatsAppUrl(contactConfig.tierMessages.exhibitionPartner);
    case 'academic-track':
      return getWhatsAppUrl(contactConfig.tierMessages.academicTrack);
    case 'custom-reach':
      return getWhatsAppUrl(contactConfig.tierMessages.customReach);
    default:
      return getWhatsAppUrl();
  }
}
