import { Hero } from '../components/Hero';
import { FinancingBanner } from '../components/FinancingBanner';
import { TrustBanner } from '../components/TrustBanner';
import { About } from '../components/About';
import { Services } from '../components/Services';
import { WhyChooseUs } from '../components/WhyChooseUs';
import { Gallery } from '../components/Gallery';
import { Blog } from '../components/Blog';
import { ContactForm } from '../components/ContactForm';

export function Home() {
  return (
    <>
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
