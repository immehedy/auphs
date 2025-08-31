import { ContentGrid } from "@/components/ContentGrid";
import { HeroSection } from "@/components/HeroSection";
import { HotlineSection } from "@/components/HotlineSection";
import { ImportantLinks } from "@/components/ImportantLinks";
import { NoticeSection } from "@/components/NoticeSection";
import PrincipalSection from "@/components/PrincipleSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      <HeroSection />
      
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <div className="lg:col-span-3">
            <NoticeSection />
            <ContentGrid />
          </div>
          <div className="lg:col-span-1 space-y-6">
            <PrincipalSection />
            <ImportantLinks />
            <HotlineSection />
          </div>
        </div>
      </div>
    </main>
  );
}
