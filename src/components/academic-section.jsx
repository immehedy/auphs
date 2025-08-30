import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export function AcademicsSection() {
  const programs = [
    {
      title: "বিজ্ঞান বিভাগ",
      description: "পদার্থবিজ্ঞান, রসায়ন, জীববিজ্ঞান এবং গণিত উন্নত গবেষণাগার সুবিধা সহ।",
      subjects: ["পদার্থবিজ্ঞান", "রসায়ন", "জীববিজ্ঞান", "গণিত"],
    },
    {
      title: "ব্যবসায় শিক্ষা বিভাগ",
      description: "ভবিষ্যৎ উদ্যোক্তাদের জন্য ব্যবসায় অধ্যয়ন, হিসাববিজ্ঞান এবং অর্থনীতি।",
      subjects: ["হিসাববিজ্ঞান", "ব্যবসায় সংগঠন", "অর্থনীতি", "পরিসংখ্যান"],
    },
    {
      title: "মানবিক বিভাগ",
      description: "সুষম শিক্ষার জন্য সাহিত্য, ইতিহাস এবং সামাজিক বিজ্ঞান।",
      subjects: ["বাংলা সাহিত্য", "ইতিহাস", "ভূগোল", "রাষ্ট্রবিজ্ঞান"],
    },
  ]

  return (
    <section id="academics" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">শিক্ষাক্রম</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            আপনার আগ্রহ এবং ক্যারিয়ারের আকাঙ্ক্ষার সাথে মানানসই আমাদের বৈচিত্র্যময় শিক্ষাক্রম থেকে বেছে নিন।
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <Card key={index} className="bg-card hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-xl text-card-foreground">{program.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4 leading-relaxed">{program.description}</p>
                <div className="space-y-2 mb-6">
                  {program.subjects.map((subject, idx) => (
                    <div key={idx} className="flex items-center">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                      <span className="text-foreground">{subject}</span>
                    </div>
                  ))}
                </div>
                <Button variant="outline" className="w-full bg-transparent">
                  আরও জানুন
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
