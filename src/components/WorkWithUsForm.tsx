import { useEffect, useRef, useState } from 'react';
import { Phone, Mail } from 'lucide-react';

/**
 * Embeds the real Tex Vet Trees recruitment form from HubSpot (portal 244644442,
 * region na2) — the same form used on texvettrees.com/work-with-us/, loaded via
 * HubSpot's official v2 embed script. Submissions go to their HubSpot CRM.
 * If the script is blocked (ad-blocker / CSP / offline), we fall back to contact details.
 */
const SCRIPT_SRC = 'https://js-na2.hsforms.net/forms/embed/v2.js';
const FORM = { region: 'na2', portalId: '244644442', formId: 'aaf43e80-6109-4b43-b048-71a5ca9b1ace' };
const TARGET_ID = 'hs-work-with-us-form';

declare global {
  interface Window {
    hbspt?: { forms: { create: (opts: Record<string, unknown>) => void } };
  }
}

export function WorkWithUsForm() {
  const ref = useRef<HTMLDivElement>(null);
  const created = useRef(false);
  const [status, setStatus] = useState<'loading' | 'ready' | 'error'>('loading');

  useEffect(() => {
    let cancelled = false;

    const tryCreate = () => {
      if (created.current || cancelled || !ref.current || !window.hbspt) return false;
      ref.current.innerHTML = '';
      window.hbspt.forms.create({ ...FORM, target: `#${TARGET_ID}` });
      created.current = true;
      setStatus('ready');
      return true;
    };

    if (tryCreate()) return;

    let script = document.querySelector<HTMLScriptElement>(`script[src="${SCRIPT_SRC}"]`);
    if (!script) {
      script = document.createElement('script');
      script.src = SCRIPT_SRC;
      script.async = true;
      document.body.appendChild(script);
    }
    const onLoad = () => tryCreate();
    script.addEventListener('load', onLoad);
    // Fallback poll in case the script was already loading/cached.
    const poll = window.setInterval(() => {
      if (tryCreate()) window.clearInterval(poll);
    }, 250);
    const stopPoll = window.setTimeout(() => {
      window.clearInterval(poll);
      if (!created.current && !cancelled) setStatus('error');
    }, 10000);

    return () => {
      cancelled = true;
      script?.removeEventListener('load', onLoad);
      window.clearInterval(poll);
      window.clearTimeout(stopPoll);
    };
  }, []);

  return (
    <div className="rounded-lg border border-white/10 bg-[#f4f8fa] p-6 shadow-2xl shadow-black/40 sm:p-8">
      <h3 className="mb-1 text-lg font-black uppercase tracking-wide text-[#1d2410]">Employment Application</h3>
      <p className="mb-6 text-sm text-[#4c5230]">
        Fill out the form below. Once submitted, your information is added to our recruitment database for review.
      </p>

      <div id={TARGET_ID} ref={ref} className="twt-hsform" />

      {status === 'loading' && (
        <div className="flex min-h-[420px] items-center justify-center gap-3 text-sm font-medium text-[#4c5230]">
          <span className="h-4 w-4 animate-spin rounded-full border-2 border-[#4c5230]/30 border-t-[#4c5230]" aria-hidden="true" />
          Loading application form…
        </div>
      )}

      {status === 'error' && (
        <div className="rounded-md border border-[#4c5230]/20 bg-white p-6 text-center">
          <p className="mb-2 text-sm font-semibold text-[#1d2410]">Having trouble loading the form?</p>
          <p className="mb-5 text-sm text-[#4c5230]">
            No problem — reach out directly and we'll get your application started.
          </p>
          <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="tel:+12544475090"
              className="inline-flex items-center gap-2 rounded bg-[#4c5230] px-5 py-2.5 text-xs font-bold uppercase tracking-widest text-white transition-colors hover:bg-[#3a3f25]"
            >
              <Phone className="h-4 w-4" />
              (254) 447-5090
            </a>
            <a
              href="mailto:texvettrees@gmail.com"
              className="inline-flex items-center gap-2 rounded border border-[#4c5230]/40 px-5 py-2.5 text-xs font-bold uppercase tracking-widest text-[#4c5230] transition-colors hover:bg-[#4c5230]/5"
            >
              <Mail className="h-4 w-4" />
              Email Us
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
