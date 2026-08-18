import { Hero } from '../components/Hero';
import { FinancingBanner } from '../components/FinancingBanner';
import { TrustBanner } from '../components/TrustBanner';
import { About } from '../components/About';
import { Services } from '../components/Services';
import { WhyChooseUs } from '../components/WhyChooseUs';
import { Gallery } from '../components/Gallery';
import { Blog } from '../components/Blog';
import { ContactForm } from '../components/ContactForm';
import { PageSEO } from '../components/PageSEO';
import { LOCAL_BUSINESS_JSON_LD } from '../data/business';

export function Home() {
  return (
    <>
      <PageSEO
        title="Tex Vet Trees | Veteran-Owned Tree Service & Landscaping in Texas"
        description="Veteran owned and operated tree service and landscaping across Central and North Texas. Precision tree care rooted in military discipline. Call (254) 447-5090 for a free quote."
        path="/"
        jsonLd={LOCAL_BUSINESS_JSON_LD}
      />
      <Hero />
      <TrustBanner />
      <FinancingBanner />
      <Services />
      <About />
      <WhyChooseUs />
      <Gallery />
      <Blog />
      <ContactForm />
    </>
  );
}
