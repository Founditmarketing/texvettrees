/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Routes, Route } from 'react-router-dom';
import { MotionConfig } from 'motion/react';
import { IntroProvider } from './components/Intro';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { AboutPage } from './pages/AboutPage';
import { GalleryPage } from './pages/GalleryPage';
import { BlogPage } from './pages/BlogPage';
import { ContactPage } from './pages/ContactPage';
import { ReviewsPage } from './pages/ReviewsPage';
import { ServiceDetailPage } from './pages/ServiceDetailPage';
import { WorkWithUsPage } from './pages/WorkWithUsPage';
import { CommunityPage } from './pages/CommunityPage';
import { PrivacyPolicyPage } from './pages/PrivacyPolicyPage';
import { TermsPage } from './pages/TermsPage';

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <IntroProvider>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/reviews" element={<ReviewsPage />} />
            <Route path="/services/:slug" element={<ServiceDetailPage />} />
            <Route path="/work-with-us" element={<WorkWithUsPage />} />
            <Route path="/community" element={<CommunityPage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
          <Route path="/terms" element={<TermsPage />} />
            <Route path="*" element={<Home />} />
          </Route>
        </Routes>
      </IntroProvider>
    </MotionConfig>
  );
}
