"use client";

import { notFound } from "next/navigation";
import { Calendar } from "lucide-react";

const notices = [
  {
    slug: "new-website",
    date: "৭ নভেম্বর, ২০২৪",
    title: "নতুন ওয়েবসাইট প্রকাশ",
    description:
      "আমাদের বিদ্যালয়ের নতুন ওয়েবসাইট চালু হয়েছে। সকল তথ্য এখানে পাবেন।",
    content: `এটি একটি বিস্তারিত সংস্করণ যেখানে আরও তথ্য দেওয়া যেতে পারে...`,
  },
  {
    slug: "sports-day",
    date: "৫ নভেম্বর, ২০২৪",
    title: "বার্ষিক ক্রীড়া প্রতিযোগিতা",
    description: "আগামী ১৫ নভেম্বর বার্ষিক ক্রীড়া প্রতিযোগিতা অনুষ্ঠিত হবে।",
    content: `ক্রীড়া প্রতিযোগিতা সকাল ৯টা থেকে শুরু হবে এবং বিভিন্ন ইভেন্ট থাকবে।`,
  },
  {
    slug: "parents-meeting",
    date: "৩ নভেম্বর, ২০২৪",
    title: "অভিভাবক সভা",
    description: "আগামী ১০ নভেম্বর সকাল ১০টায় অভিভাবক সভা অনুষ্ঠিত হবে।",
    content: `অভিভাবকদের উপস্থিত থাকার জন্য অনুরোধ করা হচ্ছে।`,
  },
];

export default function NoticePage({ params }) {
  const notice = notices.find((n) => n.slug === params.slug);

  if (!notice) {
    return notFound();
  }

  return (
    <section className="container mx-auto px-4 py-12 max-w-3xl min-h-screen">
      <div className="flex items-center space-x-3 mb-6">
        <Calendar className="h-6 w-6 text-primary" />
        <span className="text-sm text-gray-600">{notice.date}</span>
      </div>

      <h1 className="text-3xl font-bold mb-4">{notice.title}</h1>
      <p className="text-gray-700 mb-6">{notice.description}</p>
      <div className="prose max-w-none">
        <p>{notice.content}</p>
      </div>
    </section>
  );
}
