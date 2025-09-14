import { Card, CardContent } from "@/components/ui/card";
import { BookOpen, Users, Award, Globe } from "lucide-react";

export function AboutSection() {
  const features = [
    {
      icon: BookOpen,
      title: "শিক্ষায় উৎকর্ষতা",
      description:
        "সমালোচনামূলক চিন্তাভাবনা ও সৃজনশীলতা বিকাশের জন্য ব্যাপক পাঠ্যক্রম।",
    },
    {
      icon: Users,
      title: "অভিজ্ঞ শিক্ষকমণ্ডলী",
      description: "প্রতিটি শিক্ষার্থীর সম্ভাবনা বিকাশে নিবেদিত শিক্ষকবৃন্দ।",
    },
    {
      icon: Award,
      title: "অসাধারণ ফলাফল",
      description:
        "ধারাবাহিকভাবে উচ্চ একাডেমিক অর্জন এবং বিশ্ববিদ্যালয়ে ভর্তি।",
    },
    {
      icon: Globe,
      title: "বৈশ্বিক দৃষ্টিভঙ্গি",
      description:
        "আন্তঃসংযুক্ত বিশ্বে সফলতার জন্য শিক্ষার্থীদের প্রস্তুত করা।",
    },
  ];

  return (
    <section id="about" className="py-20 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            আমাদের বিদ্যালয় সম্পর্কে
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            ৮০ বছরেরও বেশি সময় ধরে, কে এল পি এইচ এস শিক্ষায় উৎকর্ষতার
            আলোকবর্তিকা হিসেবে আগামী দিনের নেতাদের মন গঠনে নিবেদিত ও উদ্ভাবনী
            ভূমিকা পালন করে আসছে।
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuentryResponse.map((feature, index) => (
            <Card
              key={index}
              className="bg-card hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-primary-10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-card-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
