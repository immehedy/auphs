import { ContentGrid } from "@/components/ContentGrid";
import { HeroSection } from "@/components/HeroSection";
import { HotlineSection } from "@/components/HotlineSection";
import { ImportantLinks } from "@/components/ImportantLinks";
import { NoticeSection } from "@/components/NoticeSection";
import PrincipalSection from "@/components/PrincipleSection";
import { contentfulClient } from "@/lib/contentful";

export const revalidate = 360; // Revalidate content every minute

export default async function Home() {

  const res = await contentfulClient?.getEntries({
    content_type: "landingPage",
    include: 2
  });
  const content = res.items[0].fields;

  return (
    <main className="min-h-screen bg-gray-50">
      <HeroSection bannerImage = {content?.hero} />
      
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <div className="lg:col-span-3">
            <NoticeSection scrollingNotice={content?.scrollingNotice?.content[0]?.content[0]?.value} slideImages={content?.slideImages} notices={content?.notices}  />
            <ContentGrid items={content?.items} />
          </div>
          <div className="lg:col-span-1 space-y-6">
            <PrincipalSection principalName={content?.principalName} principalPhoto={content?.principalPhoto} principleMessage={content?.principleMessage}   />
            <ImportantLinks showImportantLinks={content?.showImportantLinks} />
            <HotlineSection />
          </div>
        </div>
      </div>
    </main>
  );
}
