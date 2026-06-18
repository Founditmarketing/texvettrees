import { PageHero } from '../components/PageHero';
import { Blog } from '../components/Blog';
import { CTASection } from '../components/CTASection';

export function BlogPage() {
  return (
    <>
      <PageHero
        eyebrow="Stay Up-To-Date"
        title="Blog"
        subtitle="Stories, projects, and updates from the Tex Vet Trees team."
        watermark="Dispatches"
        image="/images/treeservice.jpg"
      />
      <Blog showHeader={false} variant="card" />
      <CTASection />
    </>
  );
}
