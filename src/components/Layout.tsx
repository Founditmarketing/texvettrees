import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Header } from './Header';
import { Footer } from './Footer';
import { FloatingQuoteButton } from './FloatingQuoteButton';

/** On route change: jump to the top (instant), or to a #hash target if one is present. */
function ScrollManager() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    const html = document.documentElement;
    const prev = html.style.scrollBehavior;
    html.style.scrollBehavior = 'auto';
    if (hash) {
      requestAnimationFrame(() => {
        const el = document.getElementById(hash.slice(1));
        if (el) el.scrollIntoView();
        else window.scrollTo(0, 0);
        html.style.scrollBehavior = prev;
      });
    } else {
      window.scrollTo(0, 0);
      html.style.scrollBehavior = prev;
    }
  }, [pathname, hash]);
  return null;
}

export function Layout() {
  return (
    <div className="min-h-screen font-sans">
      <ScrollManager />
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
      <FloatingQuoteButton />
    </div>
  );
}
