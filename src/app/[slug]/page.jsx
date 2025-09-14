import { notFound } from "next/navigation";
import { Calendar, Download, FileText, ExternalLink } from "lucide-react";
import { contentfulClient } from "@/lib/contentful";
import { formatBengaliDate, getNestedValue } from "@/lib/utils";

// Rich text renderer for Contentful rich text
const renderRichText = (richTextContent) => {
  if (!richTextContent || !richTextContent.content) {
    return null;
  }

  return richTextContent.content.map((node, index) => {
    switch (node.nodeType) {
      case "paragraph":
        return (
          <p key={index} className="mb-4 text-gray-700 leading-relaxed">
            {node.content?.map((inline, inlineIndex) => {
              if (inline.nodeType === "text") {
                return inline.value;
              } else if (inline.nodeType === "hyperlink") {
                return (
                  <a
                    key={inlineIndex}
                    href={inline.data.uri}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 underline inline-flex items-center gap-1">
                    {inline.content[0]?.value || inline.data.uri}
                    <ExternalLink className="h-3 w-3" />
                  </a>
                );
              } else if (inline.nodeType === "asset-hyperlink") {
                const asset = inline.data.target;
                const isImage =
                  asset?.fields?.file?.contentType?.startsWith("image/");
                const isPDF =
                  asset?.fields?.file?.contentType === "application/pdf";

                if (isImage) {
                  return (
                    <a
                      key={inlineIndex}
                      href={`https:${asset.fields.file.url}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800 underline">
                      {asset.fields.title || "ছবি দেখুন"}
                    </a>
                  );
                } else if (isPDF) {
                  return (
                    <a
                      key={inlineIndex}
                      href={`https:${asset.fields.file.url}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-red-600 hover:text-red-800 underline">
                      <FileText className="h-4 w-4" />
                      {asset.fields.title || "PDF ডাউনলোড করুন"}
                    </a>
                  );
                } else {
                  return (
                    <a
                      key={inlineIndex}
                      href={`https:${asset.fields.file.url}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-green-600 hover:text-green-800 underline">
                      <Download className="h-4 w-4" />
                      {asset.fields.title || "ফাইল ডাউনলোড করুন"}
                    </a>
                  );
                }
              }
              return inline.value || "";
            })}
          </p>
        );

      case "embedded-asset-block":
        const asset = node.data.target;
        const isImage = asset?.fields?.file?.contentType?.startsWith("image/");
        const isPDF = asset?.fields?.file?.contentType === "application/pdf";

        if (isImage) {
          return (
            <div key={index} className="my-6">
              <img
                src={`https:${asset.fields.file.url}`}
                alt={asset.fields.title || "ছবি"}
                className="max-w-full h-auto rounded-lg shadow-md"
              />
              {asset.fields.description && (
                <p className="text-sm text-gray-600 mt-2 text-center italic">
                  {asset.fields.description}
                </p>
              )}
            </div>
          );
        } else if (isPDF) {
          return (
            <div
              key={index}
              className="my-6 p-4 border border-gray-200 rounded-lg bg-gray-50">
              <div className="flex items-center gap-3">
                <FileText className="h-8 w-8 text-red-600" />
                <div className="flex-1">
                  <h3 className="font-medium text-gray-900">
                    {asset.fields.title || "PDF ডকুমেন্ট"}
                  </h3>
                  {asset.fields.description && (
                    <p className="text-sm text-gray-600 mt-1">
                      {asset.fields.description}
                    </p>
                  )}
                </div>
                <a
                  href={`https:${asset.fields.file.url}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors">
                  <Download className="h-4 w-4" />
                  ডাউনলোড
                </a>
              </div>
            </div>
          );
        } else {
          return (
            <div
              key={index}
              className="my-6 p-4 border border-gray-200 rounded-lg bg-gray-50">
              <div className="flex items-center gap-3">
                <Download className="h-8 w-8 text-blue-600" />
                <div className="flex-1">
                  <h3 className="font-medium text-gray-900">
                    {asset.fields.title || "ফাইল"}
                  </h3>
                  {asset.fields.description && (
                    <p className="text-sm text-gray-600 mt-1">
                      {asset.fields.description}
                    </p>
                  )}
                  <p className="text-xs text-gray-500 mt-1">
                    {asset.fields.file.contentType}
                  </p>
                </div>
                <a
                  href={`https:${asset.fields.file.url}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                  <Download className="h-4 w-4" />
                  ডাউনলোড
                </a>
              </div>
            </div>
          );
        }

      case "heading-1":
        return (
          <h1 key={index} className="text-2xl font-bold mb-4 text-gray-900">
            {node.content[0]?.value || ""}
          </h1>
        );

      case "heading-2":
        return (
          <h2 key={index} className="text-xl font-bold mb-3 text-gray-900">
            {node.content[0]?.value || ""}
          </h2>
        );

      case "heading-3":
        return (
          <h3 key={index} className="text-lg font-semibold mb-2 text-gray-900">
            {node.content[0]?.value || ""}
          </h3>
        );

      case "unordered-list":
        return (
          <ul
            key={index}
            className="list-disc list-inside mb-4 text-gray-700 space-y-1">
            {node.content.map((listItem, listIndex) => (
              <li key={listIndex}>
                {listItem.content[0]?.content[0]?.value || ""}
              </li>
            ))}
          </ul>
        );

      case "ordered-list":
        return (
          <ol
            key={index}
            className="list-decimal list-inside mb-4 text-gray-700 space-y-1">
            {node.content.map((listItem, listIndex) => (
              <li key={listIndex}>
                {listItem.content[0]?.content[0]?.value || ""}
              </li>
            ))}
          </ol>
        );

      case "blockquote":
        return (
          <blockquote
            key={index}
            className="border-l-4 border-blue-500 pl-4 py-2 mb-4 bg-blue-50 text-gray-700 italic">
            {node.content[0]?.content[0]?.value || ""}
          </blockquote>
        );

      case "hr":
        return <hr key={index} className="my-6 border-gray-300" />;

      default:
        return null;
    }
  });
};

export default async function NoticePage({ params }) {
  const { slug } = params; // ✅ fixed
  let notice = null;

  try {
    const entryResponse = await contentfulClient?.getEntries({
      content_type: "sectionItem",
      "sys.id": slug,
      include: 2,
    });

    if (res && entryResponse.items && entryResponse.items.length > 0) {
      notice = entryResponse.items[0];
    }
  } catch (error) {
    console.error("Error fetching notice:", error);
  }

  if (!notice) {
    return notFound();
  }

  return (
    <section className="container mx-auto px-4 py-12 max-w-4xl min-h-screen bg-white">
      <h1 className="text-3xl font-bold mb-8 text-gray-900">
        {notice?.fields?.title}
      </h1>

      <div className="mb-6">
        {notice.fields.details ? (
          renderRichText(notice.fields.details)
        ) : (
          <p className="text-gray-700">বিবরণ নেই</p>
        )}
      </div>
    </section>
  );
}
