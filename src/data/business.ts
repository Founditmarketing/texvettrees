import { SITE_DOMAIN } from '../components/PageSEO';

export const BUSINESS_NAME = 'Tex Vet Trees & Landscaping';

export const BUSINESS_SOCIAL_LINKS = [
  'https://www.facebook.com/TexVetTrees',
  'https://www.instagram.com/texvettrees/',
  'https://www.yelp.com/biz/tex-vet-trees-and-landscaping-waco',
  'https://www.google.com/maps/place/Tex+Vet+Trees+%26+Landscaping/@31.704561,-97.263625,17z/data=!3m1!4b1!4m6!3m5!1s0x864f993980090279:0x9f1d11a2ae38e6bb!8m2!3d31.704561!4d-97.263625!16s%2Fg%2F11yz9xr1qb?entry=ttu',
  'https://www.angi.com/companylist/us/tx/waco/tex-vet-trees-landscaping-reviews-1.htm',
  'https://www.thumbtack.com/tx/waco/tree-trimming/tex-vet-trees-landscaping/service/566111823036858381',
];

export const LOCAL_BUSINESS_JSON_LD = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': `${SITE_DOMAIN}/#business`,
  name: BUSINESS_NAME,
  url: SITE_DOMAIN,
  image: `${SITE_DOMAIN}/og-image.png`,
  telephone: '+1-254-447-5090',
  email: 'texvettrees@gmail.com',
  description:
    'Veteran owned and operated tree service and landscaping company serving Central and North Texas: tree service, landscaping, turf, hardscaping, fencing, and decking & patios.',
  address: {
    '@type': 'PostalAddress',
    addressRegion: 'TX',
    addressCountry: 'US',
  },
  areaServed: {
    '@type': 'State',
    name: 'Texas',
  },
  sameAs: BUSINESS_SOCIAL_LINKS,
};
