import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Users,
  GraduationCap,
  BookOpen,
  UserCheck,
  Building,
  ClipboardList,
  Camera,
  Trophy,
  ArrowRight,
  ChevronRight,
} from "lucide-react"

export function ContentGrid() {
  const sections = [
    {
      title: "আমাদের সম্পর্কে",
      icon: Users,
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-50",
      textColor: "text-blue-700",
      items: [
        "প্রতিষ্ঠান সম্পর্কে",
        "প্রাক্তন প্রধান শিক্ষক",
        "ব্যবস্থাপনা কমিটি",
        "শিক্ষকদের তালিকা",
        "কর্মচারীদের তালিকা",
        "প্রতিষ্ঠানের অবকাঠামো",
        "লক্ষ্য ও উদ্দেশ্য",
        "কেন এখানে পড়বেন",
      ],
    },
    {
      title: "একাডেমিক তথ্য",
      icon: GraduationCap,
      color: "from-primary to-green-600",
      bgColor: "bg-green-50",
      textColor: "text-green-700",
      items: ["একাডেমিক ফি", "বই তালিকা", "সিলেবাস", "ছুটির দিন", "নোটিশ", "একাডেমিক ক্যালেন্ডার", "ডেমো সেকশন", "ডেমো সেকশন"],
    },
    {
      title: "শিক্ষার্থী কর্নার",
      icon: UserCheck,
      color: "from-purple-500 to-purple-600",
      bgColor: "bg-purple-50",
      textColor: "text-purple-700",
      items: [
        "আমাদের শিক্ষার্থী",
        "ফি পেমেন্ট",
        "পোশাক তথ্য",
        "ক্লাস রুটিন",
        "পরীক্ষার রুটিন",
        "ডেমো সেকশন",
        "ডেমো সেকশন",
        "ডেমো সেকশন",
      ],
    },
    {
      title: "সুবিধাসমূহ",
      icon: Building,
      color: "from-orange-500 to-orange-600",
      bgColor: "bg-orange-50",
      textColor: "text-orange-700",
      items: [
        "বিজ্ঞান ল্যাব",
        "কম্পিউটার ল্যাব",
        "লাইব্রেরি",
        "খেলার মাঠ",
        "পরিবহন",
        "ইনডোর গেমস",
        "ডেমো ফ্যাসিলিটি",
        "ডেমো ফ্যাসিলিটি",
      ],
    },
    {
      title: "ফলাফল",
      icon: ClipboardList,
      color: "from-red-500 to-red-600",
      bgColor: "bg-red-50",
      textColor: "text-red-700",
      items: ["পাবলিক রেজাল্ট", "স্কুল রেজাল্ট", "বোর্ড রেজাল্ট লিংক", "পরীক্ষার রুটিন", "স্কুল রেজাল্ট"],
    },
    {
      title: "ভর্তি",
      icon: BookOpen,
      color: "from-teal-500 to-teal-600",
      bgColor: "bg-teal-50",
      textColor: "text-teal-700",
      items: ["ভর্তি তথ্য", "অনলাইনে আবেদন", "প্রসপেক্টাস", "ভর্তি ফরম"],
    },
    {
      title: "গ্যালারি",
      icon: Camera,
      color: "from-pink-500 to-pink-600",
      bgColor: "bg-pink-50",
      textColor: "text-pink-700",
      items: ["ইভেন্ট", "সাধারণ ছবি", "সাধারণ ভিডিও"],
    },
    {
      title: "সহ-পাঠক্রম",
      icon: Trophy,
      color: "from-yellow-500 to-yellow-600",
      bgColor: "bg-yellow-50",
      textColor: "text-yellow-700",
      items: [
        "খেলাধুলা",
        "ট্যুর",
        "স্কাউট",
        "বিএনসিসি",
        "কম্পিউটার ক্লাব",
        "ফটোগ্রাফি ক্লাব",
        "সাংস্কৃতিক ক্লাব",
        "বিতর্ক ক্লাব",
        "বিজ্ঞান ক্লাব",
        "ভাষা ক্লাব",
      ],
    },
  ]

  return (
    <div className="py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">বিভাগসমূহ</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            আমাদের বিদ্যালয়ের সকল বিভাগ ও সেবা সম্পর্কে জানুন। প্রতিটি বিভাগে ক্লিক করে বিস্তারিত তথ্য দেখুন।
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {sections.map((section, index) => (
            <Card
              key={index}
              className="group hover:shadow-2xl transition-all duration-300 border-0 shadow-lg hover:-translate-y-2 bg-white overflow-hidden"
            >
              <CardHeader className={`${section.bgColor} border-b-0 relative overflow-hidden py-2`}>
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${section.color} opacity-10 group-hover:opacity-20 transition-opacity duration-300`}
                ></div>
                <CardTitle className={`flex items-center justify-between ${section.textColor} relative z-10`}>
                  <div className="flex items-center gap-3">
                    <div
                      className={`p-2 rounded-lg bg-gradient-to-r ${section.color} text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}
                    >
                      <section.icon className="h-6 w-6" />
                    </div>
                    <span className="font-bold text-lg">{section.title}</span>
                  </div>
                  <ChevronRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <ul className="space-y-3">
                  {section.items.map((item, itemIndex) => (
                    <li
                      key={itemIndex}
                      className="group/item flex items-center gap-3 text-gray-700 hover:text-primary cursor-pointer transition-all duration-200 p-2 rounded-lg hover:bg-gray-50"
                    >
                      <div
                        className={`w-2 h-2 bg-gradient-to-r ${section.color} rounded-full flex-shrink-0 group-hover/item:scale-125 transition-transform duration-200`}
                      ></div>
                      <span className="text-sm font-medium flex-1">{item}</span>
                      <ArrowRight className="h-3 w-3 opacity-0 group-hover/item:opacity-100 group-hover/item:translate-x-1 transition-all duration-200" />
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
