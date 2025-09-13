import { notFound } from "next/navigation";
import { Calendar } from "lucide-react";
import { contentfulClient } from "@/lib/contentful";
import { formatBengaliDate, getNestedValue } from "@/lib/utils";

// Fallback notices (same structure as your main page)
const fallbackNotices = [
  {
    fields: {
      slug: "new-website",
      date: "November 7, 2024",
      title: {
        content: [{ content: [{ value: "নতুন ওয়েবসাইট প্রকাশ" }] }],
      },
      description: {
        content: [
          {
            content: [
              {
                value: "আমাদের বিদ্যালয়ের নতুন ওয়েবসাইট চালু হয়েছে। সকল তথ্য এখানে পাবেন।",
              },
            ],
          },
        ],
      },
      content: {
        content: [
          {
            content: [
              {
                value: "এটি একটি বিস্তারিত সংস্করণ যেখানে আরও তথ্য দেওয়া যেতে পারে...",
              },
            ],
          },
        ],
      },
    },
  },
  {
    fields: {
      slug: "sports-day",
      date: "November 5, 2024",
      title: {
        content: [{ content: [{ value: "বার্ষিক ক্রীড়া প্রতিযোগিতা" }] }],
      },
      description: {
        content: [
          {
            content: [
              {
                value: "আগামী ১৫ নভেম্বর বার্ষিক ক্রীড়া প্রতিযোগিতা অনুষ্ঠিত হবে।",
              },
            ],
          },
        ],
      },
      content: {
        content: [
          {
            content: [
              {
                value: "ক্রীড়া প্রতিযোগিতা সকাল ৯টা থেকে শুরু হবে এবং বিভিন্ন ইভেন্ট থাকবে।",
              },
            ],
          },
        ],
      },
    },
  },
  {
    fields: {
      slug: "parents-meeting",
      date: "November 3, 2024",
      title: {
        content: [{ content: [{ value: "অভিভাবক সভা" }] }],
      },
      description: {
        content: [
          {
            content: [
              {
                value: "আগামী ১০ নভেম্বর সকাল ১০টায় অভিভাবক সভা অনুষ্ঠিত হবে।",
              },
            ],
          },
        ],
      },
      content: {
        content: [
          {
            content: [
              {
                value: "অভিভাবকদের উপস্থিত থাকার জন্য অনুরোধ করা হচ্ছে।",
              },
            ],
          },
        ],
      },
    },
  },
];

export default async function NoticePage({ params }) {
  const { slug } = params;
  let notice = null;

  try {
    // First, try to get from Contentful
    const res = await contentfulClient?.getEntries({
      content_type: "notices",
    });

    // Check if we have data from Contentful
    if (res && res.items && res.items.length > 0) {
      // Look for the notice with matching slug in Contentful data
      notice = res.items.find(item => item.fields.slug === slug);
    }

    // If not found in Contentful, check fallback notices
    if (!notice) {
      notice = fallbackNotices.find(item => item.fields.slug === slug);
    }
  } catch (error) {
    console.error("Error fetching notice:", error);
    // Try fallback notices on error
    notice = fallbackNotices.find(item => item.fields.slug === slug);
  }

  // Show 404 if notice not found
  if (!notice) {
    return notFound();
  }

  // Extract data with fallback values
  const title = getNestedValue(
    notice,
    "fields.title.content.0.content.0.value",
    "শিরোনাম নেই"
  );
  
  const description = getNestedValue(
    notice,
    "fields.description.content.0.content.0.value",
    "বিবরণ নেই"
  );
  
  const content = getNestedValue(
    notice,
    "fields.content.content.0.content.0.value",
    "বিস্তারিত তথ্য নেই"
  );
  
  const date = notice.fields.date;

  return (
    <section className="container mx-auto px-4 py-12 max-w-3xl min-h-screen">
      <div className="flex items-center space-x-3 mb-6">
        <Calendar className="h-6 w-6 text-primary" />
        <span className="text-sm text-gray-600">
          {formatBengaliDate(date)}
        </span>
      </div>

      <h1 className="text-3xl font-bold mb-4">{title}</h1>
      <p className="text-gray-700 mb-6">{description}</p>
      <div className="prose max-w-none">
        <p>{content}</p>
      </div>
    </section>
  );
}

// Generate static paths for better performance (optional)
export async function generateStaticParams() {
  try {
    const res = await contentfulClient?.getEntries({
      content_type: "notices",
    });

    const paths = [];
    
    // Add Contentful notices
    if (res && res.items) {
      res.items.forEach(item => {
        if (item.fields.slug) {
          paths.push({ slug: item.fields.slug });
        }
      });
    }

    // Add fallback notices
    fallbackNotices.forEach(item => {
      if (item.fields.slug && !paths.find(p => p.slug === item.fields.slug)) {
        paths.push({ slug: item.fields.slug });
      }
    });

    return paths;
  } catch (error) {
    console.error("Error generating static params:", error);
    // Return fallback slugs
    return fallbackNotices.map(item => ({ slug: item.fields.slug }));
  }
}