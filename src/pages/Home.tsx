import { Hero } from '../components/Hero';
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
      <About />
      <Services />
      <WhyChooseUs />
      <Gallery />
      <Blog />
      <ContactForm />
    </>
  );
}
