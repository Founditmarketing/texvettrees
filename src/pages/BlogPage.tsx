import { PageHero } from '../components/PageHero';
import { Blog } from '../components/Blog';
import { CTASection } from '../components/CTASection';
import { PageSEO } from '../components/PageSEO';

export function BlogPage() {
  return (
    <>
      <PageSEO
        title="Blog | Tex Vet Trees & Landscaping"
        description="Stories, projects, and updates from the Tex Vet Trees team — veteran-owned tree service and landscaping across Central & North Texas."
        path="/blog"
      />
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
