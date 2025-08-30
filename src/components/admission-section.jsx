import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, FileText, Users, CheckCircle } from "lucide-react";

export function AdmissionsSection() {
  const steps = [
    {
      icon: FileText,
      title: "আবেদনপত্র",
      description: "প্রয়োজনীয় কাগজপত্র সহ অনলাইন আবেদনপত্র পূরণ করুন।",
    },
    {
      icon: Calendar,
      title: "ভর্তি পরীক্ষা",
      description: "নির্ধারিত তারিখে ভর্তি পরীক্ষায় অংশগ্রহণ করুন।",
    },
    {
      icon: Users,
      title: "সাক্ষাৎকার",
      description: "অভিভাবকদের সাথে ব্যক্তিগত সাক্ষাৎকারে অংশগ্রহণ করুন।",
    },
    {
      icon: CheckCircle,
      title: "ভর্তি",
      description: "ভর্তির নিশ্চয়তা পান এবং ভর্তি প্রক্রিয়া সম্পন্ন করুন।",
    },
  ];

  return (
    <section id="admissions" className="py-20 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            ভর্তি প্রক্রিয়া
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            আমাদের শিক্ষার্থী সম্প্রদায়ে যোগ দিন। আমাদের সাথে আপনার যাত্রা শুরু
            করতে এই সহজ পদক্ষেপগুলি অনুসরণ করুন।
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {steps.map((step, index) => (
            <Card
              key={index}
              className="bg-card text-center hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="w-16 h-16 bg-primary-10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <step.icon className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-lg text-card-foreground">
                  {step.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Card className="bg-primary text-primary-foreground max-w-2xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">আবেদন করতে প্রস্তুত?</h3>
              <p className="mb-6 text-primary-foreground/90">
                ২০২৫ শিক্ষাবর্ষের জন্য আবেদন এখন খোলা। আমাদের মর্যাদাপূর্ণ
                প্রতিষ্ঠানে যোগ দেওয়ার এই সুযোগ হাতছাড়া করবেন না।
              </p>
              <Button
                size="lg"
                variant="secondary"
                className="bg-white text-primary hover:bg-gray-100">
                এখনই আবেদন করুন
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
