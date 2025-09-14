import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { contentfulClient } from "@/lib/contentful";
import { convertToBengali, formatBengaliDate, getNestedValue } from "@/lib/utils";


export default async function NoticesPage() {
  const res = await contentfulClient?.getEntries({
    content_type: "notices",
  });
  const notices = res?.items;

  console.log("notcie", notices[0])

  // Use notices if available and not empty, otherwise use fallback
  const displayNotices =
    notices && notices.length > 0 ? notices : [];
  return (
    <section className="container mx-auto px-4 py-12 min-h-screen">
      <h1 className="text-3xl font-bold mb-8 text-center">সকল নোটিশ</h1>

      <div className="space-y-6">
        {displayNotices.map((notice, index) => (
          <div
            key={index}
            className="group p-4 rounded-lg border border-gray-100 hover:border-primary/20 hover:shadow-md transition-all duration-200">
            <Link href={`/notices/${notice?.sys?.id || "default"}`}>
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <span className="text-sm bg-primary/10 text-primary px-3 py-1 rounded-full font-medium">
                      {formatBengaliDate(notice?.fields?.date)}
                    </span>
                    {notice?.fields?.isNew && (
                      <span className="text-xs bg-red-100 text-red-600 px-2 py-1 rounded-full font-semibold animate-pulse">
                        নতুন
                      </span>
                    )}
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-1 group-hover:text-primary transition-colors duration-200">
                    {getNestedValue(
                      notice,
                      "fields.title.content.0.content.0.value",
                      "শিরোনাম নেই"
                    )}
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {convertToBengali(
                      getNestedValue(
                        notice,
                        "fields.description.content.0.content.0.value",
                        "বিবরণ নেই"
                      )
                    )}
                  </p>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  className="opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
