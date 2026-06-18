import { Trees, Flower2, Leaf, Hammer, Fence, TentTree, type LucideIcon } from 'lucide-react';

export type Service = {
  slug: string;
  title: string;
  tagline: string; // short line for the menu + hero subtitle
  watermark: string; // short single word for the page-hero background watermark
  description: string; // longer blurb (homepage carousel card)
  intro: string; // page-body intro paragraph
  Icon: LucideIcon;
  bulletIcon: 'leaf' | 'check';
  features: string[];
  before: string;
  after: string;
};

export const SERVICES: Service[] = [
  {
    slug: 'tree-service',
    title: 'Tree Service',
    tagline: 'Trimming, removals & tree-health care done with precision.',
    watermark: 'Trees',
    description:
      'Certified trimming, hazardous removals, and tree-health care that protect your home and keep your canopy thriving. From routine pruning to full storm cleanup, we handle the whole job.',
    intro:
      "Your trees are an investment in your property's value, safety, and beauty. Our crews handle everything from routine pruning to emergency storm cleanup — protecting your home while keeping your canopy healthy for years to come. Every cut is planned, every limb is accounted for, and your property is left cleaner than we found it.",
    Icon: Trees,
    bulletIcon: 'leaf',
    features: [
      'Crown thinning & deadwood removal',
      'Hazardous & storm-damage takedowns',
      'Stump grinding & full haul-off',
      'Pest & disease inspections',
    ],
    before: '/images/14.jpg',
    after: '/images/treeservice.jpg',
  },
  {
    slug: 'landscaping',
    title: 'Landscaping',
    tagline: 'Custom design and planting built for the Texas climate.',
    watermark: 'Landscape',
    description:
      'Custom design, planting, and maintenance built for the Texas climate. Beds, borders, and color that actually survive the summer — and stay sharp year-round.',
    intro:
      'A great landscape does more than look good — it frames your home, manages water, and thrives through brutal Texas summers. We design, install, and maintain beds, borders, and seasonal color using native and drought-tolerant plants chosen to last. The result is a yard that stays sharp year-round with far less upkeep.',
    Icon: Flower2,
    bulletIcon: 'leaf',
    features: [
      'Native & drought-tolerant plantings',
      'Mulch, stone & clean bed borders',
      'Seasonal cleanups & refreshes',
      'Irrigation-friendly layouts',
    ],
    before: '/images/IMG_9100.jpg',
    after: '/images/IMG_9109.jpeg',
  },
  {
    slug: 'turf',
    title: 'Turf',
    tagline: 'Premium synthetic turf that stays green year-round.',
    watermark: 'Turf',
    description:
      'Premium synthetic turf that stays green all year with near-zero upkeep — no mowing, no mud, no brown patches. Engineered to drain fast and hold up to heavy use.',
    intro:
      'Tired of mowing, mud, and brown patches? Our premium synthetic turf gives you a lush, even lawn 365 days a year with virtually zero maintenance. Engineered with a proper drainage base and UV-stable blades, it stands up to kids, pets, and Texas heat — and never needs water, mowing, or fertilizer.',
    Icon: Leaf,
    bulletIcon: 'leaf',
    features: [
      'Pet- & kid-safe surfaces',
      'Proper drainage base prep',
      'UV-stable evergreen blades',
      'Putting greens & play areas',
    ],
    before: '/images/IMG_9462.jpg',
    after: '/images/IMG_9480.jpg',
  },
  {
    slug: 'hardscaping',
    title: 'Hardscaping',
    tagline: 'Patios, walls & walkways engineered to last decades.',
    watermark: 'Stone',
    description:
      'Retaining walls, stone pathways, and paver patios engineered to add lasting structure, drainage, and value to your property. Built to hold its line for decades.',
    intro:
      'Hardscaping adds the structure that turns a yard into usable outdoor living space. We build paver patios, stone walkways, retaining walls, and fire pits on engineered bases with proper drainage — so they hold their line for decades. Lasting function and serious curb appeal, built to a veteran standard.',
    Icon: Hammer,
    bulletIcon: 'check',
    features: [
      'Paver patios & walkways',
      'Engineered retaining walls',
      'Fire pits & seating walls',
      'Proper grading & drainage',
    ],
    before: '/images/backyard-before.jpg',
    after: '/images/backyard-transformation.jpg',
  },
  {
    slug: 'fencing',
    title: 'Fencing',
    tagline: 'Privacy and curb appeal, built for Texas weather.',
    watermark: 'Fencing',
    description:
      'Durable, good-looking fence lines that lock in privacy and lift curb appeal — built to stand up to Texas weather. Wood, metal, and composite, done right.',
    intro:
      'A fence sets your boundary, secures your family, and defines your property at the curb. We build and repair cedar privacy fences, steel and pipe ranch fencing, and custom gates — all built to stand up to Texas weather. Straight lines, solid posts, and hardware that keeps working for the long haul.',
    Icon: Fence,
    bulletIcon: 'check',
    features: [
      'Cedar privacy fencing',
      'Steel & pipe ranch fencing',
      'Custom gates & access hardware',
      'Repairs, restaining & replacement',
    ],
    before: '/images/IMG_9122.jpg',
    after: '/images/IMG_9123.jpeg',
  },
  {
    slug: 'decking-patios',
    title: 'Decking & Patios',
    tagline: 'Decks, pergolas & covered patios for Texas evenings.',
    watermark: 'Decks',
    description:
      'Custom decks, pergolas, and covered patios that turn your backyard into the room you actually want to live in. Designed for shade, gatherings, and Texas evenings.',
    intro:
      'Your backyard should be a room you actually want to live in. We design and build custom decks, pergolas, and covered patios engineered for shade, gatherings, and long Texas evenings — in cedar or low-maintenance composite, with built-in lighting and seating options to match how you live outdoors.',
    Icon: TentTree,
    bulletIcon: 'check',
    features: [
      'Cedar & composite decking',
      'Pergolas & shade structures',
      'Covered patios',
      'Built-in lighting & seating',
    ],
    before: '/images/IMG_8971.jpeg',
    after: '/images/decking.jpg',
  },
];

export function getService(slug: string): Service | undefined {
  return SERVICES.find((s) => s.slug === slug);
}
