import { Link } from 'react-router-dom';
import { LegalPage } from '../components/LegalPage';

export function PrivacyPolicyPage() {
  return (
    <LegalPage title="Privacy Policy" watermark="Privacy" updated="June 2026">
      <p>
        This Privacy Policy explains how Tex Vet Trees &amp; Landscaping (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or
        &ldquo;our&rdquo;) collects, uses, and protects information when you visit our website or request our services.
        By using our site or contacting us, you agree to the practices described below.
      </p>

      <h2>Information We Collect</h2>
      <ul>
        <li>
          <strong>Information you provide:</strong> your name, email address, phone number, property address, and
          project details when you request a quote, submit a form, or apply to work with us.
        </li>
        <li>
          <strong>Information collected automatically:</strong> basic usage data such as your IP address, browser type,
          and pages viewed, gathered through standard web technologies.
        </li>
      </ul>

      <h2>How We Use Your Information</h2>
      <ul>
        <li>Respond to your inquiries and provide estimates and services</li>
        <li>Schedule, perform, and follow up on work at your property</li>
        <li>Review and process employment applications</li>
        <li>Operate, maintain, and improve our website</li>
        <li>Send information or updates you have requested</li>
      </ul>

      <h2>How We Share Information</h2>
      <p>
        <strong>We do not sell your personal information.</strong> We share information only as needed to operate our
        business:
      </p>
      <ul>
        <li>
          <strong>Service providers:</strong> we use HubSpot to manage form submissions and our customer records, and
          Hearth to offer optional financing. Information you submit through those tools is handled according to their
          respective privacy policies.
        </li>
        <li>
          <strong>Legal requirements:</strong> we may disclose information if required by law or to protect our rights,
          safety, or property.
        </li>
      </ul>

      <h2>Cookies &amp; Tracking</h2>
      <p>
        Our site may use cookies and similar technologies to keep the site working properly and to understand how it is
        used. You can control or disable cookies through your browser settings, though some features may not work as
        intended.
      </p>

      <h2>Data Security</h2>
      <p>
        We take reasonable measures to protect the information you share with us. However, no method of transmission or
        storage is completely secure, and we cannot guarantee absolute security.
      </p>

      <h2>Your Choices</h2>
      <p>
        You may request to access, correct, or delete the personal information we hold about you, or ask to stop
        receiving communications, by contacting us using the details below.
      </p>

      <h2>Third-Party Links</h2>
      <p>
        Our website links to third-party sites and tools (such as Hearth financing, review platforms, and social
        media). We are not responsible for the content or privacy practices of those third parties.
      </p>

      <h2>Children&rsquo;s Privacy</h2>
      <p>
        Our website and services are not directed to children under 13, and we do not knowingly collect personal
        information from them.
      </p>

      <h2>Changes to This Policy</h2>
      <p>
        We may update this Privacy Policy from time to time. The &ldquo;last updated&rdquo; date above reflects the most
        recent version.
      </p>

      <h2>Contact Us</h2>
      <p>
        Questions about this policy? Call us at <a href="tel:+12544475090">(254) 447-5090</a>, email{' '}
        <a href="mailto:texvettrees@gmail.com">texvettrees@gmail.com</a>, or use our{' '}
        <Link to="/contact">contact page</Link>.
      </p>
    </LegalPage>
  );
}
