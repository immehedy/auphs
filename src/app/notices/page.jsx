"use client";

import Link from "next/link";
import { Calendar, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const notices = [
  {
    slug: "new-website",
    date: "৭ নভেম্বর, ২০২৪",
    title: "নতুন ওয়েবসাইট প্রকাশ",
    description:
      "আমাদের বিদ্যালয়ের নতুন ওয়েবসাইট চালু হয়েছে। সকল তথ্য এখানে পাবেন।",
    isNew: true,
  },
  {
    slug: "sports-day",
    date: "৫ নভেম্বর, ২০২৪",
    title: "বার্ষিক ক্রীড়া প্রতিযোগিতা",
    description: "আগামী ১৫ নভেম্বর বার্ষিক ক্রীড়া প্রতিযোগিতা অনুষ্ঠিত হবে।",
    isNew: false,
  },
  {
    slug: "parents-meeting",
    date: "৩ নভেম্বর, ২০২৪",
    title: "অভিভাবক সভা",
    description: "আগামী ১০ নভেম্বর সকাল ১০টায় অভিভাবক সভা অনুষ্ঠিত হবে।",
    isNew: false,
  },
];

export default function NoticesPage() {
  return (
    <section className="container mx-auto px-4 py-12 min-h-screen">
      <h1 className="text-3xl font-bold mb-8 text-center">সকল নোটিশ</h1>

      <div className="space-y-6">
        {notices.map((notice) => (
          <Card
            key={notice.slug}
            className="shadow-sm hover:shadow-md transition-all">
            <CardContent className="p-6">
              <div className="flex items-center space-x-3 mb-3">
                <Calendar className="h-5 w-5 text-primary" />
                <span className="text-sm text-gray-600">{notice.date}</span>
                {notice.isNew && (
                  <span className="text-xs bg-red-100 text-red-600 px-2 py-1 rounded-full">
                    নতুন
                  </span>
                )}
              </div>

              <h2 className="text-xl font-semibold mb-2">{notice.title}</h2>
              <p className="text-gray-600">{notice.description}</p>

              <Link href={`/notices/${notice.slug}`}>
                <Button
                  variant="link"
                  className="mt-3 text-primary flex items-center">
                  বিস্তারিত দেখুন
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
