import { ContentGrid } from "@/components/ContentGrid";
import { HeroSection } from "@/components/HeroSection";
import { HotlineSection } from "@/components/HotlineSection";
import { ImportantLinks } from "@/components/ImportantLinks";
import { NoticeSection } from "@/components/NoticeSection";
import PresidentSection from "@/components/PresidentSection";
import PrincipalSection from "@/components/PrincipleSection";
import { contentfulClient } from "@/lib/contentful";

export const revalidate = 3600; // Revalidate content every hour

export default async function Home() {
  const entryResponse = await contentfulClient?.getEntries({
    content_type: "landingPage",
    include: 2,
  });
  const content = entryResponse.items[0].fields;

  const noticesResponse = await contentfulClient?.getEntries({
    content_type: "notices", // Your actual notice content type
    order: '-fields.date', // Order by date field, newest first
    limit: 3, // Ensure we get all notices
  });


  return (
    <main className="min-h-screen bg-gray-50">
      <HeroSection bannerImage={content?.hero} />

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <div className="lg:col-span-3">
            <NoticeSection
              scrollingNotice={
                content?.scrollingNotice?.content[0]?.content[0]?.value
              }
              slideImages={content?.slideImages}
              notices={noticesResponse?.items}
            />
            <ContentGrid items={content?.items} />
          </div>
          <div className="lg:col-span-1 space-y-6">
            <PrincipalSection
              principalName={content?.principalName}
              principalPhoto={content?.principalPhoto}
              principleMessage={content?.principleMessage}
            />
            <PresidentSection
              presidentName={content?.presidentName}
              presidentPhoto={content?.presidentPhoto}
              presidentMessage={content?.presidentMessage}
            />
            <ImportantLinks showImportantLinks={content?.showImportantLinks} />
            <HotlineSection />
          </div>
        </div>
      </div>
    </main>
  );
}
