import { type ReactNode } from 'react';
import { PageHero } from './PageHero';

/** Shared layout for the Privacy Policy and Terms pages: PageHero + a readable prose body. */
export function LegalPage({
  title,
  watermark,
  updated,
  children,
}: {
  title: string;
  watermark: string;
  updated: string;
  children: ReactNode;
}) {
  return (
    <>
      <PageHero eyebrow="Legal" title={title} subtitle={`Last updated ${updated}`} watermark={watermark} />
      <section className="relative bg-[#111] border-b border-white/5 py-20">
        <div className="container mx-auto px-6">
          <div
            className="mx-auto max-w-3xl text-white/65 leading-relaxed
              [&>h2]:text-white [&>h2]:font-black [&>h2]:uppercase [&>h2]:tracking-tight [&>h2]:text-xl md:[&>h2]:text-2xl [&>h2]:mt-10 [&>h2]:mb-3 [&>h2:first-child]:mt-0
              [&>p]:mb-4 [&>p]:text-sm md:[&>p]:text-[15px]
              [&>ul]:mb-4 [&>ul]:list-disc [&>ul]:pl-5 [&>ul]:space-y-1.5 [&>ul]:text-sm md:[&>ul]:text-[15px]
              [&_strong]:text-white/90 [&_strong]:font-semibold
              [&_a]:text-[#a9bd84] [&_a]:underline [&_a]:underline-offset-2 hover:[&_a]:text-white"
          >
            {children}
          </div>
        </div>
      </section>
    </>
  );
}
