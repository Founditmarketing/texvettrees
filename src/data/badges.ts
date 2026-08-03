export type TrustBadge = { src: string; alt: string };

// Single source of truth for the "Accredited & Recognized" logos shown in the
// footer, the home hero, and the contact page.
export const TRUST_BADGES: TrustBadge[] = [
  { src: '/images/Veteran-Business-400x118-1.png', alt: 'Veteran Owned & Operated' },
  { src: '/images/Waco-Camber-of-Commerce-PNG-200x74-1.png', alt: 'Greater Waco Chamber of Commerce' },
  { src: '/images/McGregor-Chamber-Logo.png', alt: 'McGregor Chamber of Commerce' },
  { src: '/images/Greater-Hewitt-Chamber-Logo.png', alt: 'Greater Hewitt Chamber of Commerce' },
  { src: '/images/ISA-Logo.png', alt: 'International Society of Arboriculture' },
  { src: '/images/bbb-trust-logo-3-400x162-1.webp', alt: 'BBB Accredited Business' },
];
