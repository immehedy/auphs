import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ExternalLink,
  Link2,
  Globe,
  FileText,
  GraduationCap,
  Building2,
  Database,
} from "lucide-react";

export function ImportantLinks({ showImportantLinks }) {
  const links = [
    {
      title: "শিক্ষা বোর্ড ফলাফল",
      description: "সকল বোর্ড পরীক্ষার ফলাফল দেখুন",
      icon: FileText,
      color: "text-blue-600",
      bgColor: "bg-blue-50",
      url: "http://www.educationboardresults.gov.bd/"
    },
    {
      title: "মাধ্যমিক ও উচ্চমাধ্যমিক বোর্ড",
      description: "শিক্ষা বোর্ডের অফিসিয়াল ওয়েবসাইট",
      icon: GraduationCap,
      color: "text-green-600",
      bgColor: "bg-green-50",
      url: "https://dhakaeducationboard.gov.bd/"
    },
    {
      title: "মাধ্যমিক ও উচ্চমাধ্যমিক অধিদপ্তর",
      description: "শিক্ষা অধিদপ্তরের তথ্য ও সেবা",
      icon: Building2,
      color: "text-purple-600",
      bgColor: "bg-purple-50",
      url: "http://www.dshe.gov.bd/"
    },
    {
      title: "বাংলাদেশ শিক্ষাতথ্য ও পরিসংখ্যান ব্যুরো (ব্যানবেইস)",
      description: "শিক্ষা পরিসংখ্যান ও তথ্য",
      icon: Database,
      color: "text-orange-600",
      bgColor: "bg-orange-50",
      url: "http://www.banbeis.gov.bd/"
    },
    {
      title: "শিক্ষা মন্ত্রণালয়",
      description: "শিক্ষা মন্ত্রণালয়ের অফিসিয়াল সাইট",
      icon: Building2,
      color: "text-red-600",
      bgColor: "bg-red-50",
      url: "https://shed.gov.bd/"
    },
    {
      title: "শিক্ষক বাতায়ন ",
      description: "শিক্ষক বাতায়ন",
      icon: GraduationCap,
      color: "text-teal-600",
      bgColor: "bg-teal-50",
      url: "https://teachers.gov.bd/"
    },
    {
      title: "কিশোর বাতায়ন",
      description: "কিশোর বাতায়ন",
      icon: Building2,
      color: "text-purple-600",
      bgColor: "bg-purple-50",
      url: "https://dev.konnect.edu.bd/"
    },
    
    
  ];

  // Don't render the component if showImportantLinks is false
  if (!showImportantLinks) {
    return null;
  }

  return (
    <div className="space-y-6">
      <Card className="shadow-xl border-0 overflow-hidden">
        <CardHeader className="bg-gradient-to-r from-primary to-primary/80 text-white relative">
          <div className="absolute inset-0 bg-black/10"></div>
          <CardTitle className="text-xl font-bold flex items-center space-x-3 relative z-10 py-2">
            <Link2 className="h-6 w-6" />
            <span>গুরুত্বপূর্ণ লিংক</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          <div className="divide-y divide-gray-100">
            {links.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group block p-4 hover:bg-gray-50 cursor-pointer transition-all duration-200 hover:shadow-sm">
                <div className="flex items-start space-x-4">
                  <div
                    className={`p-2 rounded-lg ${link.bgColor} group-hover:scale-110 transition-transform duration-200`}>
                    <link.icon className={`h-5 w-5 ${link.color}`} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-semibold text-gray-900 group-hover:text-primary transition-colors duration-200 text-sm leading-tight">
                      {link.title}
                    </h4>
                    <p className="text-xs text-gray-500 mt-1 leading-relaxed">
                      {link.description}
                    </p>
                  </div>
                  <ExternalLink className="h-4 w-4 text-gray-400 group-hover:text-primary group-hover:scale-110 transition-all duration-200 flex-shrink-0 mt-1" />
                </div>
              </a>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}