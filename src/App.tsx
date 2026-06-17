/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { MotionConfig } from 'motion/react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { TrustBanner } from './components/TrustBanner';
import { About } from './components/About';
import { Services } from './components/Services';
import { WhyChooseUs } from './components/WhyChooseUs';
import { Gallery } from './components/Gallery';
import { Blog } from './components/Blog';
import { ContactForm } from './components/ContactForm';
import { Footer } from './components/Footer';
import { FloatingQuoteButton } from './components/FloatingQuoteButton';

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <div className="min-h-screen font-sans">
        <Header />
        <main>
          <Hero />
          <TrustBanner />
          <About />
          <Services />
          <WhyChooseUs />
          <Gallery />
          <Blog />
          <ContactForm />
        </main>
        <Footer />
        <FloatingQuoteButton />
      </div>
    </MotionConfig>
  );
}
