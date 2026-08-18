import { PageHero } from '../components/PageHero';
import { Gallery } from '../components/Gallery';
import { CTASection } from '../components/CTASection';
import { PageSEO } from '../components/PageSEO';

export function GalleryPage() {
  return (
    <>
      <PageSEO
        title="Gallery | Tex Vet Trees & Landscaping"
        description="Browse real, finished job sites across Central & North Texas — tree work, landscaping, turf, hardscaping, fencing, decking, and patios."
        path="/gallery"
      />
      <PageHero
        eyebrow="Our Work"
        title="Gallery"
        subtitle="A look at real, finished job sites across Central & North Texas — tree work, landscaping, turf, hardscaping, fencing, and more."
        watermark="Portfolio"
        image="/images/backyard-transformation.jpg"
      />
      <Gallery showHeader={false} />
      <CTASection />
    </>
  );
}
