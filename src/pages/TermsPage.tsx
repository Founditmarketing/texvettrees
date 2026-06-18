import { Link } from 'react-router-dom';
import { LegalPage } from '../components/LegalPage';

export function TermsPage() {
  return (
    <LegalPage title="Terms & Conditions" watermark="Terms" updated="June 2026">
      <p>
        These Terms &amp; Conditions govern your use of the Tex Vet Trees &amp; Landscaping website and the services we
        provide. By accessing our site or engaging our services, you agree to these terms.
      </p>

      <h2>Our Services</h2>
      <p>
        We provide tree care, landscaping, turf, hardscaping, fencing, and decking &amp; patio services across Central
        &amp; North Texas. Service descriptions on this site are for general information and may change without notice.
      </p>

      <h2>Estimates &amp; Quotes</h2>
      <p>
        Quotes are estimates based on the information available and visible site conditions. Final pricing may be
        adjusted after an on-site assessment or if the scope of work changes. A quote is not a binding contract until a
        written work agreement is accepted by both parties.
      </p>

      <h2>Scheduling, Payment &amp; Cancellations</h2>
      <p>
        Scheduling is subject to availability and weather. Payment terms, deposits, and cancellation policies are
        provided in your individual work agreement.
      </p>

      <h2>Property Access &amp; Responsibilities</h2>
      <p>
        By scheduling work, you confirm that you own the property or are authorized to approve the work, and you grant
        our crew access to perform it. Please identify any private utilities, irrigation lines, or items requiring
        special care before work begins.
      </p>

      <h2>Warranties &amp; Disclaimers</h2>
      <p>
        We perform every job with professional care and are fully insured. Except as expressly stated in a written work
        agreement, our website and services are provided &ldquo;as is&rdquo; without warranties of any kind.
      </p>

      <h2>Limitation of Liability</h2>
      <p>
        To the fullest extent permitted by law, Tex Vet Trees &amp; Landscaping is not liable for indirect, incidental,
        or consequential damages arising from your use of this website. Nothing in these terms limits any liability that
        cannot be limited under applicable law.
      </p>

      <h2>Financing</h2>
      <p>
        Financing options are offered through Hearth, an independent third-party provider. Approval, rates, and terms
        are determined solely by Hearth and its lending partners. We are not the lender and do not make credit
        decisions.
      </p>

      <h2>Intellectual Property</h2>
      <p>
        All content on this site — including our name, logo, text, and images — is the property of Tex Vet Trees &amp;
        Landscaping and may not be reused without our written permission.
      </p>

      <h2>Third-Party Links</h2>
      <p>
        Our site links to third-party websites and tools. We are not responsible for their content, policies, or
        practices.
      </p>

      <h2>Governing Law</h2>
      <p>
        These terms are governed by the laws of the State of Texas. Any disputes will be handled in the courts of
        McLennan County, Texas.
      </p>

      <h2>Changes to These Terms</h2>
      <p>
        We may update these Terms &amp; Conditions from time to time. The &ldquo;last updated&rdquo; date above reflects
        the most recent version.
      </p>

      <h2>Contact Us</h2>
      <p>
        Questions about these terms? Call us at <a href="tel:+12544475090">(254) 447-5090</a>, email{' '}
        <a href="mailto:texvettrees@gmail.com">texvettrees@gmail.com</a>, or use our{' '}
        <Link to="/contact">contact page</Link>.
      </p>
    </LegalPage>
  );
}
